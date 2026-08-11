(function () {
  function initIntegratedQuiz(config) {
    var policy = window.QuizPolicy || {};
    var allQuestions = Array.isArray(config.questions) ? config.questions : [];
    var questionPrefix = config.questionPrefix || 'Q';
    var examConfig = window.ExamConfig && window.ExamConfig.get
      ? window.ExamConfig.get(config.examKey)
      : null;
    var examQuestionCount = examConfig ? examConfig.questionCount : null;
    var examDurationMinutes = examConfig ? examConfig.durationMinutes : null;
    var noExplanationText = config.noExplanationText || '해설 정보가 없습니다.';
    var formatExplanation = typeof config.formatExplanation === 'function'
      ? config.formatExplanation
      : null;
    var buildExplanationAppendix = typeof config.buildExplanationAppendix === 'function'
      ? config.buildExplanationAppendix
      : null;
    var wrongStorageKey = config.wrongStorageKey || ('sn_quiz_wrong_' + window.location.pathname);
    var wrongModeFlagKey = config.wrongModeFlagKey || (wrongStorageKey + '_mode');

    var sessionQuestions = [];
    var answers = [];
    var currentIndex = 0;
    var mode = 'practice';
    var randomQuestionCount = 10;
    var timeLeft = null;
    var timerId = null;
    var explanationVisible = false;
    var answerFeedbackVisible = false;
    var wrongQuestionIds = new Set(loadWrongQuestionIds());
    var questionBankIssues = validateQuestionBank(allQuestions);

    function normalizeQuizShell() {
      if (!document || typeof document.querySelector !== 'function') {
        return;
      }

      document.title = String(document.title || '').replace(/\s*·\s*초안\s*$/, '');
      var heading = document.querySelector('.top h1');
      if (heading) {
        heading.textContent = String(heading.textContent || '').replace(/\s*·\s*초안\s*$/, '');
      }

      var randomCounts = document.querySelector('.random-counts');
      if (!randomCounts) {
        return;
      }

      while (randomCounts.firstChild) {
        randomCounts.removeChild(randomCounts.firstChild);
      }

      [10, 20, 30, 50, 100].forEach(function (count) {
        if (count > allQuestions.length) {
          return;
        }
        var button = document.createElement('button');
        button.type = 'button';
        button.textContent = String(count);
        button.addEventListener('click', function () {
          startSession('random', count);
        });
        randomCounts.appendChild(button);
      });

      var allButton = document.createElement('button');
      allButton.type = 'button';
      allButton.textContent = '전체';
      allButton.addEventListener('click', function () {
        startSession('random', 'all');
      });
      randomCounts.appendChild(allButton);
    }

    normalizeQuizShell();

    if (questionBankIssues.length > 0) {
      console.warn('Question bank validation issues:', questionBankIssues);
      window.alert('문제 데이터 검증 경고가 있습니다. 개발자 콘솔에서 상세 내용을 확인해 주세요.');
    }

    function normalizeQuestionId(id) {
      return policy.normalizeQuestionId ? policy.normalizeQuestionId(id) : String(id);
    }

    function parseChooseCount(title) {
      var match = String(title || '').match(/choose\s+(two|three|four|five|2|3|4|5)\b/i);
      if (!match) {
        return null;
      }
      var wordMap = {
        two: 2,
        three: 3,
        four: 4,
        five: 5
      };
      var raw = match[1].toLowerCase();
      return wordMap[raw] || Number(raw);
    }

    function validateQuestionBank(questions) {
      var issues = [];
      var seenIds = new Set();

      questions.forEach(function (q, index) {
        var label = q && q.id !== undefined ? q.id : ('index:' + index);

        if (!q || typeof q !== 'object') {
          issues.push({ id: label, issue: 'question is not an object' });
          return;
        }
        if (seenIds.has(q.id)) {
          issues.push({ id: label, issue: 'duplicate question id' });
        }
        seenIds.add(q.id);

        if (!Array.isArray(q.options) || q.options.length < 2) {
          issues.push({ id: label, issue: 'question must have at least two options' });
          return;
        }
        if (!Array.isArray(q.answer) || q.answer.length === 0) {
          issues.push({ id: label, issue: 'answer must be a non-empty array' });
          return;
        }

        var optionIds = new Set();
        var optionTexts = new Set();
        q.options.forEach(function (option, optionIndex) {
          var optionId = option && (option.id || option.letter);
          if (!optionId) {
            issues.push({ id: label, issue: 'option is missing id', optionIndex: optionIndex });
            return;
          }
          if (optionIds.has(optionId)) {
            issues.push({ id: label, issue: 'duplicate option id', optionId: optionId });
          }
          optionIds.add(optionId);

          var text = String(option.text || '').trim().toLowerCase();
          if (!text) {
            issues.push({ id: label, issue: 'option text is empty', optionId: optionId });
          } else if (optionTexts.has(text)) {
            issues.push({ id: label, issue: 'duplicate option text', optionId: optionId });
          }
          optionTexts.add(text);
        });

        var answerIds = new Set();
        q.answer.forEach(function (answerId) {
          if (answerIds.has(answerId)) {
            issues.push({ id: label, issue: 'duplicate answer id', answerId: answerId });
          }
          answerIds.add(answerId);
          if (!optionIds.has(answerId)) {
            issues.push({ id: label, issue: 'answer id is not present in options', answerId: answerId });
          }
        });

        var chooseCount = parseChooseCount(q.title);
        if (chooseCount !== null && chooseCount !== q.answer.length) {
          issues.push({
            id: label,
            issue: 'Choose count does not match answer length',
            chooseCount: chooseCount,
            answerLength: q.answer.length
          });
        }
      });

      return issues;
    }

    function readWrongIdsFromKey(storageKey) {
      try {
        var raw = window.localStorage.getItem(storageKey);
        if (!raw) {
          return [];
        }
        var parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) {
          return [];
        }
        return parsed.filter(function (id) {
          return typeof id === 'number' || typeof id === 'string';
        }).map(function (id) {
          return normalizeQuestionId(id);
        });
      } catch (e) {
        return [];
      }
    }

    function loadWrongQuestionIds() {
      var current = readWrongIdsFromKey(wrongStorageKey);
      if (current.length > 0) {
        return current;
      }

      var merged = [];
      var seen = new Set();

      function mergeIds(ids) {
        ids.forEach(function (id) {
          if (!seen.has(id)) {
            seen.add(id);
            merged.push(id);
          }
        });
      }

      var legacyKey = 'sn_quiz_wrong_' + window.location.pathname;
      if (legacyKey !== wrongStorageKey) {
        mergeIds(readWrongIdsFromKey(legacyKey));
      }

      var pathHint = window.location.pathname.toLowerCase();
      try {
        for (var i = 0; i < window.localStorage.length; i += 1) {
          var key = window.localStorage.key(i);
          if (!key || key === wrongStorageKey || key === legacyKey) {
            continue;
          }
          if (key.indexOf('sn_quiz_wrong_') !== 0) {
            continue;
          }
          var k = key.toLowerCase();
          var isLikelySameTrack = pathHint.indexOf('cis-df') >= 0
            ? (k.indexOf('cisdf') >= 0 || k.indexOf('cis-df') >= 0 || k.indexOf('cis_df') >= 0)
            : (pathHint.indexOf('csa') >= 0 && k.indexOf('csa') >= 0);
          if (isLikelySameTrack) {
            mergeIds(readWrongIdsFromKey(key));
          }
        }
      } catch (e) {
        // localStorage key scan can fail in strict contexts; ignore and continue.
      }

      if (merged.length > 0) {
        window.localStorage.setItem(wrongStorageKey, JSON.stringify(merged));
      }
      return merged;
    }

    function saveWrongQuestionIds() {
      window.localStorage.setItem(wrongStorageKey, JSON.stringify(Array.from(wrongQuestionIds)));
    }

    function getWrongQuestionCount() {
      return wrongQuestionIds.size;
    }

    function updateWrongModeUI() {
      var wrongBtn = document.getElementById('wrong-mode-btn');
      var resultWrongBtn = document.getElementById('result-wrong-review-btn');
      var wrongInfo = document.getElementById('wrong-info');
      var resetBtn = document.getElementById('wrong-reset-btn');
      var count = getWrongQuestionCount();

      if (wrongInfo) {
        wrongInfo.textContent = '저장된 오답 ' + count + '문항';
      }

      if (wrongBtn) {
        wrongBtn.disabled = count === 0;
        wrongBtn.textContent = count === 0 ? '오답 없음' : '오답 시작';
      }

      if (resultWrongBtn) {
        resultWrongBtn.disabled = count === 0;
        resultWrongBtn.textContent = count === 0 ? '오답 없음' : '오답 풀이';
      }

      if (resetBtn) {
        resetBtn.disabled = count === 0;
      }
    }

    function clearWrongQuestions() {
      if (getWrongQuestionCount() === 0) {
        return;
      }
      var ok = window.confirm('저장된 오답을 모두 초기화할까요?');
      if (!ok) {
        return;
      }
      wrongQuestionIds.clear();
      saveWrongQuestionIds();
      updateWrongModeUI();
    }

    function removeWrongQuestion(questionId) {
      var key = normalizeQuestionId(questionId);
      if (!wrongQuestionIds.has(key)) {
        return false;
      }
      var ok = window.confirm('이 문항을 오답 목록에서 제거할까요?');
      if (!ok) {
        return false;
      }
      wrongQuestionIds.delete(key);
      saveWrongQuestionIds();
      updateWrongModeUI();
      return true;
    }

    function shuffle(arr) {
      var clone = arr.slice();
      for (var i = clone.length - 1; i > 0; i -= 1) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = clone[i];
        clone[i] = clone[j];
        clone[j] = tmp;
      }
      return clone;
    }

    function deepCloneQuestion(q) {
      var cloned = Object.assign({}, q);
      cloned.options = q.options.map(function (o) {
        return Object.assign({}, o);
      });
      cloned.answer = q.answer.slice();
      return cloned;
    }

    function getModeFromQuery() {
      var q = new URLSearchParams(window.location.search);
      var m = q.get('mode');
      return (m === 'exam' || m === 'practice' || m === 'wrong' || m === 'all' || m === 'all_random' || m === 'random') ? m : null;
    }

    function normalizeRandomCount(value) {
      if (policy.normalizeRandomCount) {
        return policy.normalizeRandomCount(value);
      }
      if (value === 'all') return 'all';
      var count = Number(value);
      return [10, 20, 30, 50, 100].includes(count) ? count : 10;
    }

    function getRandomCountFromQuery() {
      var q = new URLSearchParams(window.location.search);
      return normalizeRandomCount(q.get('count') || 10);
    }

    function isSequentialFullStudyMode() {
      return policy.isSequentialFullStudyMode ? policy.isSequentialFullStudyMode(mode) : mode === 'all';
    }

    function isRandomMode() {
      return policy.isRandomMode ? policy.isRandomMode(mode) : mode === 'random';
    }

    function isAnswered(index) {
      return policy.isAnswered ? policy.isAnswered(answers[index]) : !!(answers[index] && answers[index].length > 0);
    }

    function getAnsweredIndexes() {
      if (policy.getAnsweredIndexes) {
        return policy.getAnsweredIndexes(answers);
      }
      return answers.map(function (_, index) {
        return index;
      }).filter(isAnswered);
    }

    function saveCurrentSelectionIfAny() {
      var selected = getCurrentSelection();
      answers[currentIndex] = selected;
      return selected.length > 0;
    }

    function showInvalidAccess() {
      var invalid = document.getElementById('invalid-screen');
      if (!invalid) {
        return;
      }
      var start = document.getElementById('start-screen');
      var quiz = document.getElementById('quiz-screen');
      var result = document.getElementById('result-screen');
      var review = document.getElementById('practice-review');

      if (start) {
        start.style.display = 'none';
      }
      if (quiz) {
        quiz.style.display = 'none';
      }
      if (result) {
        result.style.display = 'none';
      }
      if (review) {
        review.style.display = 'none';
      }

      invalid.style.display = 'block';
    }

    function setWrongModeFlag(enabled) {
      try {
        if (enabled) {
          window.sessionStorage.setItem(wrongModeFlagKey, '1');
        } else {
          window.sessionStorage.removeItem(wrongModeFlagKey);
        }
      } catch (e) {
        // Ignore storage errors to preserve quiz flow.
      }
    }

    function updateTimerText() {
      var timerEl = document.getElementById('timer');
      if (!timerEl) {
        return;
      }
      if (timeLeft === null) {
        timerEl.textContent = '제한 없음';
        return;
      }
      var m = String(Math.floor(timeLeft / 60)).padStart(2, '0');
      var s = String(timeLeft % 60).padStart(2, '0');
      timerEl.textContent = m + ':' + s;
    }

    function stopTimer() {
      if (timerId) {
        clearInterval(timerId);
        timerId = null;
      }
    }

    function startTimer() {
      stopTimer();
      updateTimerText();
      timerId = setInterval(function () {
        timeLeft -= 1;
        updateTimerText();
        if (timeLeft <= 0) {
          stopTimer();
          finishQuiz(true);
        }
      }, 1000);
    }

    function equalAnswers(expected, actual) {
      return expected.slice().sort().join(',') === actual.slice().sort().join(',');
    }

    function escapeRegExp(value) {
      return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    function stripExplanationOptionLabels(text, question) {
      var cleaned = String(text || '')
        .replace(/(?:^|\n)[^\n]*\uC815\uB2F5\uC740\s+\*\*[A-F](?:\s*,\s*[A-F])*\*\*[^\n]*(?=\n|$)/g, '')
        .replace(/\b(\uBCF4\uAE30|\uC120\uD0DD\uC9C0|\uC635\uC158)\s+[A-F](?:\s*,\s*[A-F])*\b/g, '$1');

      if (question && Array.isArray(question.options)) {
        question.options.forEach(function (option) {
          var id = option && (option.id || option.letter);
          var optionText = option && option.text ? String(option.text).trim() : '';
          if (!id || !optionText) {
            return;
          }
          var pattern = new RegExp('(' + escapeRegExp(optionText) + ')\\s*\\(' + escapeRegExp(id) + '\\)', 'g');
          cleaned = cleaned.replace(pattern, '$1');
        });
      }

      return cleaned
        .replace(/\*\*([^*\n]*?)\s*\(([A-F](?:\s*,\s*[A-F])*)\)\*\*/g, '**$1**')
        .replace(/\n{3,}/g, '\n\n')
        .trim();
    }

    function escapeHtml(value) {
      return String(value || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }

    function renderInlineMarkdown(text) {
      return escapeHtml(text)
        .replace(/`([^`\n]+)`/g, '<code>$1</code>')
        .replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>');
    }

    function renderExplanation(text) {
      return renderInlineMarkdown(text).split('\n').map(function (line) {
        if (/^<strong>\[[^\]]+\]<\/strong>$/.test(line.trim())) {
          return '<span class="explain-section-title">' + line.trim() + '</span>';
        }
        return line;
      }).join('\n');
    }

    function setExplanationContent(element, text) {
      element.innerHTML = renderExplanation(text);
    }
    function getExplanationText(question, index) {
      var base = question && question.explanation ? String(question.explanation) : noExplanationText;
      
      // Remove legacy answer prefix if present (e.g., "정답: A. ", "Answer: **A**.")
      base = base.replace(/^(정답|Answer):\s*(\*\*?[A-Z\s,]+\*\*?|[A-Z\s,]+)[.\s]*/i, '');

      if (formatExplanation) {
        try {
          base = String(formatExplanation(base, question, index, mode) || base);
        } catch (e) {
          // Keep original explanation when formatter fails.
        }
      }

      base = stripExplanationOptionLabels(base, question);

      // Prepend dynamic answer labels
      var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      var currentAnswerLabels = (question.answer || []).map(function(id) {
        var optIdx = question.options.findIndex(function(o) { return (o.id || o.letter) === id; });
        return optIdx >= 0 ? alphabet[optIdx] : '?';
      }).sort().join(', ');
      
      base = '정답: ' + currentAnswerLabels + '\n\n' + base;

      if (!buildExplanationAppendix) {
        return base;
      }
      var appendix = '';
      try {
        appendix = buildExplanationAppendix(question, index, mode) || '';
      } catch (e) {
        appendix = '';
      }
      appendix = String(appendix || '').trim();
      if (!appendix) {
        return base;
      }
      return base + '\n\n' + appendix;
    }

    function ensureQuestionExplanationUI() {
      var quizScreen = document.getElementById('quiz-screen');
      var questionBox = quizScreen ? quizScreen.querySelector('.question') : null;
      var actions = document.querySelector('#quiz-screen .actions');
      if (!quizScreen || !questionBox || !actions) {
        return;
      }

      var panel = document.getElementById('question-explain');
      if (!panel) {
        panel = document.createElement('div');
        panel.id = 'question-explain';
        panel.className = 'explain';
        panel.style.display = 'none';
        questionBox.insertAdjacentElement('afterend', panel);
      }

      var navGroup = document.getElementById('quiz-nav-group');
      if (!navGroup) {
        navGroup = document.createElement('div');
        navGroup.id = 'quiz-nav-group';
        navGroup.className = 'quiz-nav-group';
      }

      var prevBtn = document.getElementById('prev-btn');
      var nextBtn = document.getElementById('next-btn');
      var submitBtn = document.getElementById('submit-btn');
      if (prevBtn && prevBtn.parentNode !== navGroup) {
        navGroup.appendChild(prevBtn);
      }
      if (nextBtn && nextBtn.parentNode !== navGroup) {
        navGroup.appendChild(nextBtn);
      }
      if (submitBtn && submitBtn.parentNode !== navGroup) {
        navGroup.appendChild(submitBtn);
      }
      if (navGroup.parentNode !== actions) {
        actions.appendChild(navGroup);
      }

      var helpGroup = document.getElementById('quiz-help-group');
      if (!helpGroup) {
        helpGroup = document.createElement('div');
        helpGroup.id = 'quiz-help-group';
        helpGroup.className = 'quiz-help-group';
      }
      if (helpGroup.parentNode !== actions) {
        actions.insertBefore(helpGroup, navGroup);
      }

      var btn = document.getElementById('explain-toggle-btn');
      if (!btn) {
        btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'btn';
        btn.id = 'explain-toggle-btn';
        btn.style.display = 'none';
        btn.textContent = '정답 및 해설 보기';
        btn.addEventListener('click', toggleQuestionExplanation);
      }
      if (btn.parentNode !== helpGroup) {
        helpGroup.appendChild(btn);
      }

      var checkBtn = document.getElementById('answer-check-btn');
      if (!checkBtn) {
        checkBtn = document.createElement('button');
        checkBtn.type = 'button';
        checkBtn.className = 'btn';
        checkBtn.id = 'answer-check-btn';
        checkBtn.style.display = 'none';
        checkBtn.textContent = '정답 확인';
        checkBtn.addEventListener('click', checkCurrentAnswer);
      }
      if (checkBtn.parentNode !== helpGroup) {
        helpGroup.appendChild(checkBtn);
      }

      var jump = document.getElementById('question-jump');
      if (!jump) {
        jump = document.createElement('button');
        jump.type = 'button';
        jump.id = 'question-jump';
        jump.className = 'btn';
        jump.style.display = 'none';
        jump.textContent = '문항 이동';
        jump.addEventListener('click', jumpToQuestionId);
      }
      if (jump.parentNode !== helpGroup) {
        helpGroup.appendChild(jump);
      }
    }

    function shouldShowQuestionExplanation() {
      return mode === 'practice' || isRandomMode() || mode === 'all' || mode === 'all_random';
    }

    function syncQuestionExplanation() {
      ensureQuestionExplanationUI();
      var wrap = document.getElementById('question-explain');
      var btn = document.getElementById('explain-toggle-btn');
      var checkBtn = document.getElementById('answer-check-btn');
      var jump = document.getElementById('question-jump');
      if (!wrap || !btn || !checkBtn) {
        return;
      }

      var showQuestionExplanation = shouldShowQuestionExplanation();
      btn.style.display = showQuestionExplanation ? 'inline-block' : 'none';
      checkBtn.style.display = showQuestionExplanation ? 'inline-block' : 'none';
      if (jump) {
        jump.style.display = isSequentialFullStudyMode() ? 'inline-block' : 'none';
      }
      btn.textContent = explanationVisible ? '정답 및 해설 숨기기' : '정답 및 해설 보기';

      if (showQuestionExplanation && explanationVisible) {
        setExplanationContent(wrap, getExplanationText(sessionQuestions[currentIndex], currentIndex));
        wrap.style.display = 'block';
      } else {
        wrap.innerHTML = '';
        wrap.style.display = 'none';
      }
    }

    function toggleQuestionExplanation() {
      if (!shouldShowQuestionExplanation()) {
        return;
      }
      explanationVisible = !explanationVisible;
      syncQuestionExplanation();
    }

    function getCurrentSelection() {
      return Array.from(document.querySelectorAll('#options input:checked')).map(function (el) {
        return el.value;
      }).sort();
    }

    function clearAnswerFeedback() {
      Array.from(document.querySelectorAll('#options .option')).forEach(function (option) {
        option.classList.remove('option-correct', 'option-incorrect');
      });
    }

    function syncAnswerFeedback() {
      var q = sessionQuestions[currentIndex];
      if (!q || !answerFeedbackVisible) {
        clearAnswerFeedback();
        return;
      }

      var correctIds = new Set(q.answer || []);
      Array.from(document.querySelectorAll('#options .option')).forEach(function (option) {
        var input = option.querySelector('input[name="answer"]');
        if (!input) {
          return;
        }
        var isCorrect = correctIds.has(input.value);
        var isSelected = input.checked;
        option.classList.toggle('option-correct', isCorrect);
        option.classList.toggle('option-incorrect', isSelected && !isCorrect);
      });
    }

    function checkCurrentAnswer() {
      if (!shouldShowQuestionExplanation()) {
        return;
      }

      var selected = getCurrentSelection();
      if (selected.length === 0) {
        window.alert('답을 선택한 뒤 확인해 주세요.');
        return;
      }

      answers[currentIndex] = selected;
      answerFeedbackVisible = true;
      syncAnswerFeedback();
    }

    function renderQuestion() {
      var q = sessionQuestions[currentIndex];
      var picked = answers[currentIndex]; // These are IDs
      var multi = q.answer.length > 1;
      var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      explanationVisible = false;
      answerFeedbackVisible = false;

      document.getElementById('q-counter').textContent = (currentIndex + 1) + ' / ' + sessionQuestions.length;
      document.getElementById('progress').style.width = (((currentIndex + 1) / sessionQuestions.length) * 100) + '%';
      document.getElementById('q-title').textContent = questionPrefix + (currentIndex + 1) + '. ' + q.title;

      var inputType = multi ? 'checkbox' : 'radio';
      document.getElementById('options').innerHTML = q.options.map(function (o, idx) {
        var label = alphabet[idx];
        var id = o.id || o.letter;
        var checked = picked.includes(id) ? 'checked' : '';
        return '<div class="option"><label><input type="' + inputType + '" name="answer" value="' + id + '" ' + checked + '> ' + label + '. ' + o.text + '</label></div>';
      }).join('');
      document.getElementById('options').onchange = function () {
        if (answerFeedbackVisible) {
          answers[currentIndex] = getCurrentSelection();
          syncAnswerFeedback();
        }
      };

      document.getElementById('prev-btn').disabled = currentIndex === 0;
      document.getElementById('next-btn').style.display = currentIndex === sessionQuestions.length - 1 ? 'none' : 'inline-block';
      document.getElementById('submit-btn').style.display = (isSequentialFullStudyMode() || currentIndex === sessionQuestions.length - 1) ? 'inline-block' : 'none';
      document.getElementById('notice').textContent = '';
      syncQuestionExplanation();
    }

    function saveCurrentSelection() {
      var selected = getCurrentSelection();

      if (selected.length === 0) {
        window.alert('답을 선택한 뒤 진행해 주세요.');
        return false;
      }

      answers[currentIndex] = selected;
      return true;
    }

    function renderPracticeReview() {
      var wrap = document.getElementById('practice-review');
      var list = document.getElementById('review-list');
      var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      var reviewIndexes = policy.getReviewIndexes
        ? policy.getReviewIndexes(mode, answers, sessionQuestions.length)
        : (isSequentialFullStudyMode()
          ? getAnsweredIndexes()
          : sessionQuestions.map(function (_, index) { return index; }));
      list.innerHTML = '';

      reviewIndexes.forEach(function (i) {
        var q = sessionQuestions[i];
        var user = answers[i] || [];
        var ok = equalAnswers(q.answer, user);
        var isInWrongSet = wrongQuestionIds.has(normalizeQuestionId(q.id));
        
        var userLabels = user.map(function(id) {
          var optIdx = q.options.findIndex(function(o) { return (o.id || o.letter) === id; });
          return optIdx >= 0 ? alphabet[optIdx] : '?';
        }).sort().join(', ');

        var correctLabels = q.answer.map(function(id) {
          var optIdx = q.options.findIndex(function(o) { return (o.id || o.letter) === id; });
          return optIdx >= 0 ? alphabet[optIdx] : '?';
        }).sort().join(', ');

        var card = document.createElement('div');
        card.className = 'review-item';
        card.innerHTML = '\n      <div class="review-head">\n        <div class="review-q">' + questionPrefix + (i + 1) + '. ' + q.title + '</div>\n        <span class="review-badge ' + (ok ? 'ok' : 'ng') + '">' + (ok ? '정답' : '오답') + '</span>\n      </div>\n      <div class="review-meta">내 답: ' + (userLabels || '(미응답)') + ' / 정답: ' + correctLabels + '</div>\n      <div class="review-actions">\n        <button class="explain-btn">해설 보기</button>\n        ' + (isInWrongSet ? '<button class="remove-wrong-btn">오답에서 제거</button>' : '') + '\n      </div>\n      <div class="explain" style="display:none;"></div>\n    ';

        var btn = card.querySelector('.explain-btn');
        var ex = card.querySelector('.explain');
        setExplanationContent(ex, getExplanationText(q, i));
        btn.addEventListener('click', function () {
          var showing = ex.style.display === 'block';
          ex.style.display = showing ? 'none' : 'block';
          btn.textContent = showing ? '해설 보기' : '해설 숨기기';
        });

        var removeBtn = card.querySelector('.remove-wrong-btn');
        if (removeBtn) {
          removeBtn.addEventListener('click', function () {
            var removed = removeWrongQuestion(q.id);
            if (removed) {
              removeBtn.disabled = true;
              removeBtn.textContent = '제거됨';
            }
          });
        }

        list.appendChild(card);
      });

      wrap.style.display = 'block';
    }

    function getWrongSessionQuestions() {
      var wrongList = allQuestions.filter(function (q) {
        return wrongQuestionIds.has(normalizeQuestionId(q.id));
      });
      return wrongList;
    }

    function startSession(selectedMode, selectedCount) {
      var request = policy.normalizeSessionRequest
        ? policy.normalizeSessionRequest(selectedMode, selectedCount)
        : null;
      if (request) {
        selectedMode = request.mode;
        selectedCount = request.count;
      } else if (selectedMode === 'practice') {
        selectedMode = 'random';
        selectedCount = 10;
      } else if (selectedMode === 'all_random') {
        selectedMode = 'random';
        selectedCount = 'all';
      }

      mode = selectedMode;
      if (mode === 'exam' && (!Number.isInteger(examQuestionCount) || examQuestionCount <= 0 ||
        !Number.isFinite(examDurationMinutes) || examDurationMinutes <= 0)) {
        window.alert('실전 모드 시험 설정을 확인해 주세요.');
        return;
      }
      if (isRandomMode()) {
        randomQuestionCount = normalizeRandomCount(selectedCount || randomQuestionCount);
      }
      setWrongModeFlag(mode === 'wrong');
      var limit = policy.getSessionLimit
        ? policy.getSessionLimit(mode, randomQuestionCount, allQuestions.length, examQuestionCount)
        : (mode === 'exam'
          ? examQuestionCount
          : (isSequentialFullStudyMode()
            ? allQuestions.length
            : (isRandomMode()
              ? (randomQuestionCount === 'all' ? allQuestions.length : randomQuestionCount)
              : 10)));
      var duration = mode === 'exam' ? examDurationMinutes * 60 : null;

      if (mode === 'wrong') {
        sessionQuestions = getWrongSessionQuestions().map(deepCloneQuestion);
        if (sessionQuestions.length === 0) {
          window.alert('저장된 오답이 없습니다.');
          updateWrongModeUI();
          return;
        }
      } else if (mode === 'all') {
        sessionQuestions = allQuestions.map(deepCloneQuestion);
      } else if (mode === 'exam' && policy.proportionalDomainSample) {
        sessionQuestions = policy.proportionalDomainSample(allQuestions.map(deepCloneQuestion), limit);
      } else if (isRandomMode()) {
        sessionQuestions = shuffle(allQuestions.map(deepCloneQuestion)).slice(0, Math.min(limit, allQuestions.length));
      } else {
        sessionQuestions = shuffle(allQuestions.map(deepCloneQuestion)).slice(0, Math.min(limit, allQuestions.length));
      }

      sessionQuestions.forEach(function(q) {
        q.options = shuffle(q.options);
      });

      answers = Array.from({ length: sessionQuestions.length }, function () {
        return [];
      });
      currentIndex = 0;
      timeLeft = duration;

      document.getElementById('start-screen').style.display = 'none';
      document.getElementById('result-screen').style.display = 'none';
      document.getElementById('quiz-screen').style.display = 'block';
      document.getElementById('practice-review').style.display = 'none';

      var label = policy.getModeLabel
        ? policy.getModeLabel(mode, randomQuestionCount)
        : '연습';
      if (!policy.getModeLabel) {
        if (mode === 'exam') label = '실전';
        else if (mode === 'wrong') label = '오답';
        else if (mode === 'all') label = '전체';
        else if (isRandomMode()) label = randomQuestionCount === 'all' ? '랜덤(전체)' : '랜덤(' + randomQuestionCount + ')';
      }

      document.getElementById('mode-label').textContent = label;
      if (mode === 'exam') {
        startTimer();
      } else {
        stopTimer();
        document.getElementById('timer').textContent = '제한 없음';
      }

      renderQuestion();
    }

    function moveQuestion(delta) {
      if (isSequentialFullStudyMode()) {
        saveCurrentSelectionIfAny();
      } else if (!saveCurrentSelection()) {
        return;
      }
      currentIndex += delta;
      if (currentIndex < 0) {
        currentIndex = 0;
      }
      if (currentIndex > sessionQuestions.length - 1) {
        currentIndex = sessionQuestions.length - 1;
      }
      renderQuestion();
    }

    function jumpToQuestionId() {
      if (!isSequentialFullStudyMode()) {
        return;
      }

      var value = window.prompt('이동할 문항 번호를 입력해 주세요.');
      if (value === null) {
        return;
      }
      var raw = Number(String(value).trim());
      if (!Number.isInteger(raw) || raw < 1) {
        window.alert('이동할 문항 번호를 입력해 주세요.');
        return;
      }

      var targetIndex = sessionQuestions.findIndex(function (question) {
        return Number(question.id) === raw;
      });
      if (targetIndex < 0) {
        window.alert('해당 문항을 찾을 수 없습니다.');
        return;
      }

      saveCurrentSelectionIfAny();
      currentIndex = targetIndex;
      renderQuestion();
    }

    function finishQuiz(isTimeOver) {
      if (isTimeOver === void 0) {
        isTimeOver = false;
      }
      if (isSequentialFullStudyMode()) {
        saveCurrentSelectionIfAny();
        if (getAnsweredIndexes().length === 0) {
          window.alert('채점할 문항이 없습니다. 답을 선택한 뒤 채점해 주세요.');
          return;
        }
      } else if (!isTimeOver && !saveCurrentSelection()) {
        return;
      }

      stopTimer();
      var gradedIndexes = policy.getGradedIndexes
        ? policy.getGradedIndexes(mode, answers, sessionQuestions.length)
        : (isSequentialFullStudyMode()
          ? getAnsweredIndexes()
          : sessionQuestions.map(function (_, index) { return index; }));
      var gradeResult = policy.gradeSession
        ? policy.gradeSession(sessionQuestions, answers, gradedIndexes)
        : null;
      var correct = gradeResult ? gradeResult.correct : 0;
      var wrongInSession = gradeResult ? gradeResult.wrongIds : [];

      if (gradeResult) {
        if (policy.updateWrongQuestionIds) {
          wrongQuestionIds = new Set(policy.updateWrongQuestionIds(mode, Array.from(wrongQuestionIds), gradeResult));
        } else {
          if (mode === 'wrong') {
            gradeResult.correctIds.forEach(function (id) {
              wrongQuestionIds.delete(normalizeQuestionId(id));
            });
          }
          wrongInSession.forEach(function (id) {
            wrongQuestionIds.add(normalizeQuestionId(id));
          });
        }
      } else {
        gradedIndexes.forEach(function (i) {
          var q = sessionQuestions[i];
          if (equalAnswers(q.answer, answers[i] || [])) {
            correct += 1;
            if (mode === 'wrong') {
              wrongQuestionIds.delete(normalizeQuestionId(q.id));
            }
          } else {
            wrongInSession.push(q.id);
          }
        });

        wrongInSession.forEach(function (id) {
          wrongQuestionIds.add(normalizeQuestionId(id));
        });
      }
      saveWrongQuestionIds();
      updateWrongModeUI();

      var total = gradedIndexes.length;
      var percent = total === 0 ? 0 : Math.round((correct / total) * 100);

      document.getElementById('quiz-screen').style.display = 'none';
      document.getElementById('result-screen').style.display = 'block';
      document.getElementById('result-title').textContent = isTimeOver ? '시간 종료 - 결과' : '채점 결과';
      document.getElementById('result-score').textContent = correct + ' / ' + total;
      document.getElementById('result-percent').textContent = '정답률 ' + percent + '%';

      var modeText = mode === 'exam' ? '실전 모드' : (mode === 'wrong' ? '오답 모드' : (mode === 'all' ? '전체 문제 풀이' : (isRandomMode() ? '랜덤 문제 풀이' : '문제 풀이')));
      var summaryText = modeText + '를 완료했습니다. ' + total + '문항 중 ' + correct + '문항 정답입니다.';
      if (isSequentialFullStudyMode()) {
        summaryText = modeText + '를 종료했습니다. 풀이한 ' + total + '문항 중 ' + correct + '문항 정답입니다.';
      }
      document.getElementById('result-summary').textContent = summaryText;

      if (mode === 'practice' || isRandomMode() || mode === 'wrong' || mode === 'all' || mode === 'all_random') {
        renderPracticeReview();
      } else {
        document.getElementById('practice-review').style.display = 'none';
      }
    }

    function restartCurrentMode() {
      startSession(mode, randomQuestionCount);
    }

    function startWrongReview() {
      startSession('wrong');
    }

    window.startSession = startSession;
    window.moveQuestion = moveQuestion;
    window.finishQuiz = finishQuiz;
    window.clearWrongQuestions = clearWrongQuestions;
    window.restartCurrentMode = restartCurrentMode;
    window.startWrongReview = startWrongReview;
    window.toggleQuestionExplanation = toggleQuestionExplanation;

    document.getElementById('pool-info').textContent = '문제 풀: ' + allQuestions.length + '문항';
    updateWrongModeUI();
    var autoMode = getModeFromQuery();
    if (!autoMode) {
      var query = new URLSearchParams(window.location.search);
      if (query.has('mode')) {
        showInvalidAccess();
      }
      return;
    }
    startSession(autoMode, getRandomCountFromQuery());
  }

  window.initIntegratedQuiz = initIntegratedQuiz;
})();

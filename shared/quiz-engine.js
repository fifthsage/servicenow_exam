(function () {
  function initIntegratedQuiz(config) {
    var allQuestions = Array.isArray(config.questions) ? config.questions : [];
    var questionPrefix = config.questionPrefix || 'Q';
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
    var timeLeft = null;
    var timerId = null;
    var explanationVisible = false;
    var wrongQuestionIds = new Set(loadWrongQuestionIds());
    var questionBankIssues = validateQuestionBank(allQuestions);

    if (questionBankIssues.length > 0) {
      console.warn('Question bank validation issues:', questionBankIssues);
      window.alert('문제 데이터 검증 경고가 있습니다. 개발자 콘솔에서 상세 내용을 확인해 주세요.');
    }

    function normalizeQuestionId(id) {
      return String(id);
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
      return (m === 'exam' || m === 'practice' || m === 'wrong' || m === 'all' || m === 'all_random') ? m : null;
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
      if (btn.parentNode !== actions || btn !== actions.firstChild) {
        actions.insertBefore(btn, actions.firstChild);
      }
    }

    function shouldShowQuestionExplanation() {
      return mode === 'practice' || mode === 'all' || mode === 'all_random';
    }

    function syncQuestionExplanation() {
      ensureQuestionExplanationUI();
      var wrap = document.getElementById('question-explain');
      var btn = document.getElementById('explain-toggle-btn');
      if (!wrap || !btn) {
        return;
      }

      var showQuestionExplanation = shouldShowQuestionExplanation();
      btn.style.display = showQuestionExplanation ? 'inline-block' : 'none';
      btn.textContent = explanationVisible ? '정답 및 해설 숨기기' : '정답 및 해설 보기';

      if (showQuestionExplanation && explanationVisible) {
        wrap.textContent = getExplanationText(sessionQuestions[currentIndex], currentIndex);
        wrap.style.display = 'block';
      } else {
        wrap.textContent = '';
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

    function renderQuestion() {
      var q = sessionQuestions[currentIndex];
      var picked = answers[currentIndex]; // These are IDs
      var multi = q.answer.length > 1;
      var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      explanationVisible = false;

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

      document.getElementById('prev-btn').disabled = currentIndex === 0;
      document.getElementById('next-btn').style.display = currentIndex === sessionQuestions.length - 1 ? 'none' : 'inline-block';
      document.getElementById('submit-btn').style.display = currentIndex === sessionQuestions.length - 1 ? 'inline-block' : 'none';
      document.getElementById('notice').textContent = '';
      syncQuestionExplanation();
    }

    function saveCurrentSelection() {
      var selected = Array.from(document.querySelectorAll('#options input:checked')).map(function (el) {
        return el.value;
      }).sort();

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
      list.innerHTML = '';

      sessionQuestions.forEach(function (q, i) {
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
        ex.textContent = getExplanationText(q, i);
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

    function startSession(selectedMode) {
      mode = selectedMode;
      setWrongModeFlag(mode === 'wrong');
      var limit = mode === 'exam' ? 75 : ((mode === 'all' || mode === 'all_random') ? allQuestions.length : 10);
      var duration = mode === 'exam' ? 90 * 60 : null;

      if (mode === 'wrong') {
        sessionQuestions = getWrongSessionQuestions().map(deepCloneQuestion);
        if (sessionQuestions.length === 0) {
          window.alert('저장된 오답이 없습니다.');
          updateWrongModeUI();
          return;
        }
      } else if (mode === 'all') {
        sessionQuestions = allQuestions.map(deepCloneQuestion);
      } else if (mode === 'all_random') {
        sessionQuestions = shuffle(allQuestions.map(deepCloneQuestion));
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

      var label = '연습';
      if (mode === 'exam') label = '실전';
      else if (mode === 'wrong') label = '오답';
      else if (mode === 'all') label = '전체(순차)';
      else if (mode === 'all_random') label = '전체(랜덤)';

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
      if (!saveCurrentSelection()) {
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

    function finishQuiz(isTimeOver) {
      if (isTimeOver === void 0) {
        isTimeOver = false;
      }
      if (!isTimeOver && !saveCurrentSelection()) {
        return;
      }

      stopTimer();
      var correct = 0;
      var wrongInSession = [];
      sessionQuestions.forEach(function (q, i) {
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
      saveWrongQuestionIds();
      updateWrongModeUI();

      var total = sessionQuestions.length;
      var percent = total === 0 ? 0 : Math.round((correct / total) * 100);

      document.getElementById('quiz-screen').style.display = 'none';
      document.getElementById('result-screen').style.display = 'block';
      document.getElementById('result-title').textContent = isTimeOver ? '시간 종료 - 결과' : '채점 결과';
      document.getElementById('result-score').textContent = correct + ' / ' + total;
      document.getElementById('result-percent').textContent = '정답률 ' + percent + '%';

      var modeText = mode === 'exam' ? '실전 모드' : (mode === 'wrong' ? '오답 모드' : (mode === 'all' ? '전체 모드' : '연습 모드'));
      document.getElementById('result-summary').textContent = modeText + '를 완료했습니다. ' + total + '문항 중 ' + correct + '문항 정답입니다.';

      if (mode === 'practice' || mode === 'wrong' || mode === 'all' || mode === 'all_random') {
        renderPracticeReview();
      } else {
        document.getElementById('practice-review').style.display = 'none';
      }
    }

    function restartCurrentMode() {
      startSession(mode);
    }

    window.startSession = startSession;
    window.moveQuestion = moveQuestion;
    window.finishQuiz = finishQuiz;
    window.clearWrongQuestions = clearWrongQuestions;
    window.restartCurrentMode = restartCurrentMode;
    window.toggleQuestionExplanation = toggleQuestionExplanation;

    document.getElementById('pool-info').textContent = '문제 풀: ' + allQuestions.length + '문항';
    updateWrongModeUI();
    var autoMode = getModeFromQuery();
    if (!autoMode) {
      showInvalidAccess();
      return;
    }
    startSession(autoMode);
  }

  window.initIntegratedQuiz = initIntegratedQuiz;
})();

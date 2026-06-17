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
    var wrongQuestionIds = new Set(loadWrongQuestionIds());

    function normalizeQuestionId(id) {
      return String(id);
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
      if (formatExplanation) {
        try {
          base = String(formatExplanation(base, question, index, mode) || base);
        } catch (e) {
          // Keep original explanation when formatter fails.
        }
      }
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

    function renderQuestion() {
      var q = sessionQuestions[currentIndex];
      var picked = answers[currentIndex];
      var multi = q.answer.length > 1;

      document.getElementById('q-counter').textContent = (currentIndex + 1) + ' / ' + sessionQuestions.length;
      document.getElementById('progress').style.width = (((currentIndex + 1) / sessionQuestions.length) * 100) + '%';
      document.getElementById('q-title').textContent = questionPrefix + (currentIndex + 1) + '. ' + q.title;

      var inputType = multi ? 'checkbox' : 'radio';
      document.getElementById('options').innerHTML = q.options.map(function (o) {
        var checked = picked.includes(o.letter) ? 'checked' : '';
        return '<div class="option"><label><input type="' + inputType + '" name="answer" value="' + o.letter + '" ' + checked + '> ' + o.letter + '. ' + o.text + '</label></div>';
      }).join('');

      document.getElementById('prev-btn').disabled = currentIndex === 0;
      document.getElementById('next-btn').style.display = currentIndex === sessionQuestions.length - 1 ? 'none' : 'inline-block';
      document.getElementById('submit-btn').style.display = currentIndex === sessionQuestions.length - 1 ? 'inline-block' : 'none';
      document.getElementById('notice').textContent = '';
    }

    function saveCurrentSelection() {
      var selected = Array.from(document.querySelectorAll('#options input:checked')).map(function (el) {
        return el.value;
      }).sort();

      if (selected.length === 0) {
        document.getElementById('notice').textContent = '답을 선택한 뒤 진행해 주세요.';
        return false;
      }

      answers[currentIndex] = selected;
      return true;
    }

    function renderPracticeReview() {
      var wrap = document.getElementById('practice-review');
      var list = document.getElementById('review-list');
      list.innerHTML = '';

      sessionQuestions.forEach(function (q, i) {
        var user = answers[i] || [];
        var ok = equalAnswers(q.answer, user);
        var isInWrongSet = wrongQuestionIds.has(normalizeQuestionId(q.id));
        var card = document.createElement('div');
        card.className = 'review-item';
        card.innerHTML = '\n      <div class="review-head">\n        <div class="review-q">' + questionPrefix + (i + 1) + '. ' + q.title + '</div>\n        <span class="review-badge ' + (ok ? 'ok' : 'ng') + '">' + (ok ? '정답' : '오답') + '</span>\n      </div>\n      <div class="review-meta">내 답: ' + (user.join(',') || '(미응답)') + ' / 정답: ' + q.answer.join(',') + '</div>\n      <div class="review-actions">\n        <button class="explain-btn">해설 보기</button>\n        ' + (isInWrongSet ? '<button class="remove-wrong-btn">오답에서 제거</button>' : '') + '\n      </div>\n      <div class="explain" style="display:none;"></div>\n    ';

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
        sessionQuestions = getWrongSessionQuestions().map(function(q) { return Object.assign({}, q); });
        if (sessionQuestions.length === 0) {
          window.alert('저장된 오답이 없습니다.');
          updateWrongModeUI();
          return;
        }
      } else if (mode === 'all') {
        sessionQuestions = allQuestions.map(function(q) { return Object.assign({}, q); });
      } else if (mode === 'all_random') {
        sessionQuestions = shuffle(allQuestions.map(function(q) { return Object.assign({}, q); }));
      } else {
        sessionQuestions = shuffle(allQuestions.map(function(q) { return Object.assign({}, q); })).slice(0, Math.min(limit, allQuestions.length));
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

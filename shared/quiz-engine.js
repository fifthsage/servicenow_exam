(function () {
  function initIntegratedQuiz(config) {
    var allQuestions = Array.isArray(config.questions) ? config.questions : [];
    var questionPrefix = config.questionPrefix || 'Q';
    var noExplanationText = config.noExplanationText || '해설 정보가 없습니다.';

    var sessionQuestions = [];
    var answers = [];
    var currentIndex = 0;
    var mode = 'practice';
    var timeLeft = null;
    var timerId = null;

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
      return m === 'exam' || m === 'practice' ? m : null;
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
        var card = document.createElement('div');
        card.className = 'review-item';
        card.innerHTML = '\n      <div class="review-head">\n        <div class="review-q">' + questionPrefix + (i + 1) + '. ' + q.title + '</div>\n        <span class="review-badge ' + (ok ? 'ok' : 'ng') + '">' + (ok ? '정답' : '오답') + '</span>\n      </div>\n      <div class="review-meta">내 답: ' + (user.join(',') || '(미응답)') + ' / 정답: ' + q.answer.join(',') + '</div>\n      <button class="explain-btn">' + (ok ? '해설 보기' : '오답 해설 보기') + '</button>\n      <div class="explain" style="display:' + (ok ? 'none' : 'block') + ';">' + (q.explanation || noExplanationText) + '</div>\n    ';

        var btn = card.querySelector('.explain-btn');
        var ex = card.querySelector('.explain');
        btn.addEventListener('click', function () {
          var showing = ex.style.display === 'block';
          ex.style.display = showing ? 'none' : 'block';
          btn.textContent = showing ? '해설 보기' : '해설 숨기기';
        });

        list.appendChild(card);
      });

      wrap.style.display = 'block';
    }

    function startSession(selectedMode) {
      mode = selectedMode;
      var limit = mode === 'exam' ? 75 : 10;
      var duration = mode === 'exam' ? 90 * 60 : null;

      sessionQuestions = shuffle(allQuestions).slice(0, Math.min(limit, allQuestions.length));
      answers = Array.from({ length: sessionQuestions.length }, function () {
        return [];
      });
      currentIndex = 0;
      timeLeft = duration;

      document.getElementById('start-screen').style.display = 'none';
      document.getElementById('result-screen').style.display = 'none';
      document.getElementById('quiz-screen').style.display = 'block';
      document.getElementById('practice-review').style.display = 'none';

      document.getElementById('mode-label').textContent = mode === 'exam' ? '실전' : '연습';
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
      sessionQuestions.forEach(function (q, i) {
        if (equalAnswers(q.answer, answers[i] || [])) {
          correct += 1;
        }
      });

      var total = sessionQuestions.length;
      var percent = total === 0 ? 0 : Math.round((correct / total) * 100);

      document.getElementById('quiz-screen').style.display = 'none';
      document.getElementById('result-screen').style.display = 'block';
      document.getElementById('result-title').textContent = isTimeOver ? '시간 종료 - 결과' : '채점 결과';
      document.getElementById('result-score').textContent = correct + ' / ' + total;
      document.getElementById('result-percent').textContent = '정답률 ' + percent + '%';

      var modeText = mode === 'exam' ? '실전 모드' : '연습 모드';
      document.getElementById('result-summary').textContent = modeText + '를 완료했습니다. ' + total + '문항 중 ' + correct + '문항 정답입니다.';

      if (mode === 'practice') {
        renderPracticeReview();
      } else {
        document.getElementById('practice-review').style.display = 'none';
      }
    }

    window.startSession = startSession;
    window.moveQuestion = moveQuestion;
    window.finishQuiz = finishQuiz;

    document.getElementById('pool-info').textContent = '문제 풀: ' + allQuestions.length + '문항';
    var autoMode = getModeFromQuery();
    if (autoMode) {
      startSession(autoMode);
    }
  }

  window.initIntegratedQuiz = initIntegratedQuiz;
})();

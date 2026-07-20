(function (root, factory) {
  var policy = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = policy;
  }
  root.QuizPolicy = policy;
})(typeof window !== 'undefined' ? window : globalThis, function () {
  var RANDOM_COUNTS = [10, 20, 30, 50, 100];

  function normalizeQuestionId(id) {
    return String(id);
  }

  function normalizeRandomCount(value) {
    if (value === 'all') {
      return 'all';
    }
    var count = Number(value);
    return RANDOM_COUNTS.includes(count) ? count : 10;
  }

  function normalizeSessionRequest(mode, count) {
    if (mode === 'practice') {
      return { mode: 'random', count: 10 };
    }
    if (mode === 'all_random') {
      return { mode: 'random', count: 'all' };
    }
    if (mode === 'random') {
      return { mode: 'random', count: normalizeRandomCount(count) };
    }
    return { mode: mode, count: count };
  }

  function isSequentialFullStudyMode(mode) {
    return mode === 'all';
  }

  function isRandomMode(mode) {
    return mode === 'random';
  }

  function isAnswered(answer) {
    return Array.isArray(answer) && answer.length > 0;
  }

  function getAnsweredIndexes(answers) {
    return (answers || []).map(function (_, index) {
      return index;
    }).filter(function (index) {
      return isAnswered(answers[index]);
    });
  }

  function getAllIndexes(questionCount) {
    return Array.from({ length: questionCount }, function (_, index) {
      return index;
    });
  }

  function getGradedIndexes(mode, answers, questionCount) {
    if (isSequentialFullStudyMode(mode)) {
      return getAnsweredIndexes(answers);
    }
    return getAllIndexes(questionCount);
  }

  function getReviewIndexes(mode, answers, questionCount) {
    if (mode === 'exam') {
      return [];
    }
    return getGradedIndexes(mode, answers, questionCount);
  }

  function getSessionLimit(mode, randomCount, questionCount, examQuestionCount) {
    if (mode === 'exam') {
      if (!Number.isInteger(examQuestionCount) || examQuestionCount <= 0) {
        throw new Error('실전 모드 문항 수 설정이 필요합니다.');
      }
      return examQuestionCount;
    }
    if (isSequentialFullStudyMode(mode)) {
      return questionCount;
    }
    if (isRandomMode(mode)) {
      return randomCount === 'all' ? questionCount : normalizeRandomCount(randomCount);
    }
    return 10;
  }

  function getModeLabel(mode, randomCount) {
    if (mode === 'exam') {
      return '실전';
    }
    if (mode === 'wrong') {
      return '오답';
    }
    if (mode === 'all') {
      return '전체';
    }
    if (isRandomMode(mode)) {
      return randomCount === 'all' ? '랜덤(전체)' : '랜덤(' + randomCount + ')';
    }
    return '연습';
  }

  function equalAnswers(expected, actual) {
    return (expected || []).slice().sort().join(',') === (actual || []).slice().sort().join(',');
  }

  function gradeSession(questions, answers, gradedIndexes) {
    var correct = 0;
    var correctIds = [];
    var wrongIds = [];

    (gradedIndexes || []).forEach(function (index) {
      var question = questions[index];
      if (!question) {
        return;
      }
      if (equalAnswers(question.answer, answers[index] || [])) {
        correct += 1;
        correctIds.push(question.id);
      } else {
        wrongIds.push(question.id);
      }
    });

    return {
      correct: correct,
      correctIds: correctIds,
      wrongIds: wrongIds,
      total: (gradedIndexes || []).length
    };
  }

  function updateWrongQuestionIds(mode, existingIds, gradeResult) {
    var next = new Set((existingIds || []).map(normalizeQuestionId));
    var result = gradeResult || { correctIds: [], wrongIds: [] };

    if (mode === 'wrong') {
      (result.correctIds || []).forEach(function (id) {
        next.delete(normalizeQuestionId(id));
      });
    }

    (result.wrongIds || []).forEach(function (id) {
      next.add(normalizeQuestionId(id));
    });

    return Array.from(next);
  }

  return {
    normalizeQuestionId: normalizeQuestionId,
    normalizeRandomCount: normalizeRandomCount,
    normalizeSessionRequest: normalizeSessionRequest,
    isSequentialFullStudyMode: isSequentialFullStudyMode,
    isRandomMode: isRandomMode,
    isAnswered: isAnswered,
    getAnsweredIndexes: getAnsweredIndexes,
    getAllIndexes: getAllIndexes,
    getGradedIndexes: getGradedIndexes,
    getReviewIndexes: getReviewIndexes,
    getSessionLimit: getSessionLimit,
    getModeLabel: getModeLabel,
    equalAnswers: equalAnswers,
    gradeSession: gradeSession,
    updateWrongQuestionIds: updateWrongQuestionIds
  };
});

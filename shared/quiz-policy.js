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

  function proportionalDomainSample(questions, limit, random) {
    var source = Array.isArray(questions) ? questions.slice() : [];
    var target = Math.min(Math.max(0, Number(limit) || 0), source.length);
    var rng = typeof random === 'function' ? random : Math.random;
    if (target === 0) return [];

    var groups = {};
    source.forEach(function (question) {
      var domain = String(question.domain || 'General');
      (groups[domain] = groups[domain] || []).push(question);
    });
    Object.keys(groups).forEach(function (domain) {
      groups[domain].sort(function () { return rng() - 0.5; });
    });

    var quotas = Object.keys(groups).map(function (domain) {
      var exact = groups[domain].length * target / source.length;
      return { domain: domain, count: Math.floor(exact), remainder: exact - Math.floor(exact) };
    });
    var assigned = quotas.reduce(function (sum, quota) { return sum + quota.count; }, 0);
    quotas.sort(function (a, b) { return b.remainder - a.remainder || a.domain.localeCompare(b.domain); });
    for (var i = 0; i < target - assigned; i += 1) quotas[i % quotas.length].count += 1;

    var selected = [];
    quotas.forEach(function (quota) {
      selected = selected.concat(groups[quota.domain].slice(0, quota.count));
    });
    return selected.sort(function () { return rng() - 0.5; });
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
    proportionalDomainSample: proportionalDomainSample,
    equalAnswers: equalAnswers,
    gradeSession: gradeSession,
    updateWrongQuestionIds: updateWrongQuestionIds
  };
});

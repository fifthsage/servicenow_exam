const assert = require('assert');
const policy = require('./quiz-policy');

function testNormalizeRandomCount() {
  [10, 20, 30, 50, 100].forEach((count) => {
    assert.strictEqual(policy.normalizeRandomCount(count), count);
    assert.strictEqual(policy.normalizeRandomCount(String(count)), count);
  });
  assert.strictEqual(policy.normalizeRandomCount('all'), 'all');
  assert.strictEqual(policy.normalizeRandomCount(undefined), 10);
  assert.strictEqual(policy.normalizeRandomCount('bad'), 10);
  assert.strictEqual(policy.normalizeRandomCount(75), 10);
}

function testNormalizeSessionRequest() {
  assert.deepStrictEqual(policy.normalizeSessionRequest('practice'), { mode: 'random', count: 10 });
  assert.deepStrictEqual(policy.normalizeSessionRequest('all_random'), { mode: 'random', count: 'all' });
  assert.deepStrictEqual(policy.normalizeSessionRequest('random', 50), { mode: 'random', count: 50 });
  assert.deepStrictEqual(policy.normalizeSessionRequest('random', 'bad'), { mode: 'random', count: 10 });
  assert.deepStrictEqual(policy.normalizeSessionRequest('exam'), { mode: 'exam', count: undefined });
  assert.deepStrictEqual(policy.normalizeSessionRequest('wrong'), { mode: 'wrong', count: undefined });
  assert.deepStrictEqual(policy.normalizeSessionRequest('all'), { mode: 'all', count: undefined });
}

function testIndexes() {
  const answers = [['A'], [], ['B', 'C'], undefined, null];
  assert.deepStrictEqual(policy.getAnsweredIndexes(answers), [0, 2]);
  assert.deepStrictEqual(policy.getGradedIndexes('all', answers, 5), [0, 2]);
  assert.deepStrictEqual(policy.getGradedIndexes('random', answers, 5), [0, 1, 2, 3, 4]);
  assert.deepStrictEqual(policy.getGradedIndexes('exam', answers, 3), [0, 1, 2]);
  assert.deepStrictEqual(policy.getReviewIndexes('all', answers, 5), [0, 2]);
  assert.deepStrictEqual(policy.getReviewIndexes('wrong', answers, 3), [0, 1, 2]);
  assert.deepStrictEqual(policy.getReviewIndexes('exam', answers, 3), []);
}

function testSessionLimitAndLabels() {
  assert.strictEqual(policy.getSessionLimit('exam', 10, 364), 75);
  assert.strictEqual(policy.getSessionLimit('all', 10, 364), 364);
  assert.strictEqual(policy.getSessionLimit('random', 50, 364), 50);
  assert.strictEqual(policy.getSessionLimit('random', 'all', 364), 364);
  assert.strictEqual(policy.getSessionLimit('random', 'bad', 364), 10);
  assert.strictEqual(policy.getModeLabel('exam'), '실전');
  assert.strictEqual(policy.getModeLabel('wrong'), '오답');
  assert.strictEqual(policy.getModeLabel('all'), '전체');
  assert.strictEqual(policy.getModeLabel('random', 20), '랜덤(20)');
  assert.strictEqual(policy.getModeLabel('random', 'all'), '랜덤(전체)');
}

function testGradeSession() {
  const questions = [
    { id: 101, answer: ['A'] },
    { id: 102, answer: ['B', 'C'] },
    { id: 103, answer: ['D'] }
  ];
  const answers = [['A'], ['C', 'B'], ['A']];
  const result = policy.gradeSession(questions, answers, [0, 1, 2]);
  assert.deepStrictEqual(result, {
    correct: 2,
    correctIds: [101, 102],
    wrongIds: [103],
    total: 3
  });
}

function testWrongQuestionUpdates() {
  const result = {
    correctIds: [1, 2],
    wrongIds: [3],
    total: 3,
    correct: 2
  };
  assert.deepStrictEqual(policy.updateWrongQuestionIds('wrong', [1, 2, 4], result).sort(), ['3', '4']);
  assert.deepStrictEqual(policy.updateWrongQuestionIds('all', [4], result).sort(), ['3', '4']);
}

testNormalizeRandomCount();
testNormalizeSessionRequest();
testIndexes();
testSessionLimitAndLabels();
testGradeSession();
testWrongQuestionUpdates();

console.log('quiz-policy tests passed');

const assert = require('assert');
const policy = require('../shared/quiz-policy');

global.window = global;
const banks = [
  ['CIS-ITSM', '../CIS-ITSM/cisitsm_questions.js', 'CISITSM_QUESTIONS'],
  ['CIS-SM', '../CIS-SM/cissm_questions.js', 'CISSM_QUESTIONS'],
  ['CIS-EM', '../CIS-EM/cisem_questions.js', 'CISEM_QUESTIONS'],
  ['CIS-DISCO', '../CIS-DISCO/cisdisco_questions.js', 'CISDISCO_QUESTIONS'],
];

function seededRandom(seed) {
  let value = seed >>> 0;
  return function () {
    value = (value * 1664525 + 1013904223) >>> 0;
    return value / 4294967296;
  };
}

function countBy(items, key) {
  return items.reduce((counts, item) => {
    const value = item[key] || 'unclassified';
    counts[value] = (counts[value] || 0) + 1;
    return counts;
  }, {});
}

banks.forEach(([name, file, key]) => {
  require(file);
  const bank = global[key];
  assert.strictEqual(bank.length, 240, `${name}: expected 240 questions`);
  const expected = countBy(bank, 'domain');
  let snapshot;

  for (let seed = 1; seed <= 12; seed += 1) {
    const selected = policy.proportionalDomainSample(bank, 60, seededRandom(seed));
    assert.strictEqual(selected.length, 60, `${name}: mock question count`);
    assert.strictEqual(new Set(selected.map((question) => question.id)).size, 60, `${name}: duplicate mock question`);
    assert.ok(selected.every((question) => ['foundation', 'applied', 'advanced'].includes(question.difficulty)), `${name}: mock difficulty missing`);

    const actual = countBy(selected, 'domain');
    Object.keys(expected).forEach((domain) => {
      const exact = expected[domain] * 60 / bank.length;
      assert.ok(Math.abs((actual[domain] || 0) - exact) <= 1, `${name}: ${domain} mock quota drift`);
    });
    snapshot = { domains: actual, difficulties: countBy(selected, 'difficulty'), multiSelect: selected.filter((q) => q.answer.length > 1).length };
  }
  console.log(`${name}: 60-question mock validated; domains=${JSON.stringify(snapshot.domains)} difficulty=${JSON.stringify(snapshot.difficulties)} multi-select=${snapshot.multiSelect}`);
});

console.log('mock-exam audit passed');

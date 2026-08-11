const assert = require('assert');

global.window = global;

function validate(path, globalKey, expectedCount, expectedDistribution) {
  require(path);
  const questions = global[globalKey];
  assert.strictEqual(questions.length, expectedCount, `${globalKey}: question count`);
  assert.strictEqual(new Set(questions.map((q) => q.id)).size, questions.length, `${globalKey}: duplicate id`);
  assert.strictEqual(new Set(questions.map((q) => q.title.trim().toLowerCase())).size, questions.length, `${globalKey}: duplicate title`);

  const distribution = { A: 0, B: 0, C: 0, D: 0 };
  questions.forEach((question) => {
    assert.ok(question.options.length >= 2, `${globalKey} Q${question.id}: options`);
    const optionIds = question.options.map((option) => option.id);
    assert.strictEqual(new Set(optionIds).size, optionIds.length, `${globalKey} Q${question.id}: duplicate option ids`);
    assert.ok(question.answer.length > 0, `${globalKey} Q${question.id}: missing answer`);
    question.answer.forEach((answer) => {
      assert.ok(optionIds.includes(answer), `${globalKey} Q${question.id}: invalid answer`);
      distribution[answer] += 1;
    });
    assert.ok(question.explanation.trim(), `${globalKey} Q${question.id}: missing explanation`);
  });
  if (expectedDistribution) {
    assert.deepStrictEqual(distribution, expectedDistribution, `${globalKey}: answer distribution`);
  }
}

function validateExamReady(globalKey) {
  const questions = global[globalKey];
  const reconstructed = questions.filter((question) => question.id >= 61);
  assert.strictEqual(reconstructed.length, 180, `${globalKey}: reconstructed question count`);
  assert.strictEqual(
    new Set(reconstructed.map((question) => question.options.map((option) => option.text.trim().toLowerCase()).sort().join('||'))).size,
    reconstructed.length,
    `${globalKey}: repeated reconstructed option set`
  );
  reconstructed.forEach((question) => {
    assert.ok(question.domain, `${globalKey} Q${question.id}: missing domain`);
    assert.ok(['foundation', 'applied', 'advanced'].includes(question.difficulty), `${globalKey} Q${question.id}: invalid difficulty`);
    assert.ok(['official-docs-reconstructed', 'community-recall-reconstructed'].includes(question.sourceType), `${globalKey} Q${question.id}: source type`);
    assert.ok(question.objective, `${globalKey} Q${question.id}: missing objective`);
    assert.ok(!/^(Scenario|Troubleshooting|Governance check|Operational review|Code\/design review|Security and governance check) \(/.test(question.title), `${globalKey} Q${question.id}: generic title`);
  });
  assert.ok(reconstructed.filter((question) => question.difficulty === 'advanced').length >= 80, `${globalKey}: insufficient advanced questions`);
  reconstructed.filter((question) => question.sourceType === 'community-recall-reconstructed').forEach((question) => {
    assert.ok(['medium', 'high'].includes(question.confidence), `${globalKey} Q${question.id}: recall confidence`);
    assert.strictEqual(question.verifiedAgainst, 'official-docs', `${globalKey} Q${question.id}: recall verification`);
    assert.ok(['low', 'medium', 'high'].includes(question.releaseRisk), `${globalKey} Q${question.id}: release risk`);
  });
  const multiSelect = reconstructed.filter((question) => question.answer.length > 1);
  assert.ok(multiSelect.length >= 10, `${globalKey}: insufficient multi-select questions`);
  multiSelect.forEach((question) => {
    assert.ok(/\(Choose 2\)/.test(question.title), `${globalKey} Q${question.id}: missing Choose 2 instruction`);
    assert.strictEqual(question.answer.length, 2, `${globalKey} Q${question.id}: multi-select answer count`);
  });
}

validate('../CSA/csa_questions.js', 'CSA_QUESTIONS', 365);
validate('../CIS-DF/cisdf_questions.js', 'CISDF_QUESTIONS', 230);
validate('../CAD/cad_questions.js', 'CAD_QUESTIONS', 240);
validate('../CIS-DISCO/cisdisco_questions.js', 'CISDISCO_QUESTIONS', 240);
validate('../CIS-SM/cissm_questions.js', 'CISSM_QUESTIONS', 240);
validate('../CIS-EM/cisem_questions.js', 'CISEM_QUESTIONS', 240);
validate('../CIS-ITSM/cisitsm_questions.js', 'CISITSM_QUESTIONS', 240);

['CAD_QUESTIONS', 'CISSM_QUESTIONS', 'CISEM_QUESTIONS', 'CISITSM_QUESTIONS'].forEach(validateExamReady);

assert.strictEqual(
  CAD_QUESTIONS.filter((question) => question.id >= 61 && question.sourceType === 'community-recall-reconstructed').length,
  180,
  'CAD_QUESTIONS: recall reconstruction coverage'
);
assert.strictEqual(
  new Set(CAD_QUESTIONS.map((question) => question.options.map((option) => option.text.trim().toLowerCase()).sort().join('||'))).size,
  CAD_QUESTIONS.length,
  'CAD_QUESTIONS: duplicate option set across full bank'
);
assert.strictEqual(
  CISITSM_QUESTIONS.filter((question) => question.id >= 61 && question.sourceType === 'community-recall-reconstructed').length,
  180,
  'CISITSM_QUESTIONS: recall reconstruction coverage'
);
assert.strictEqual(
  new Set(CISITSM_QUESTIONS.map((question) => question.options.map((option) => option.text.trim().toLowerCase()).sort().join('||'))).size,
  CISITSM_QUESTIONS.length,
  'CISITSM_QUESTIONS: duplicate option set across full bank'
);
assert.strictEqual(
  CISSM_QUESTIONS.filter((question) => question.id >= 61 && question.sourceType === 'community-recall-reconstructed').length,
  180,
  'CISSM_QUESTIONS: recall reconstruction coverage'
);
assert.strictEqual(
  new Set(CISSM_QUESTIONS.map((question) => question.options.map((option) => option.text.trim().toLowerCase()).sort().join('||'))).size,
  CISSM_QUESTIONS.length,
  'CISSM_QUESTIONS: duplicate option set across full bank'
);
assert.strictEqual(
  CISEM_QUESTIONS.filter((question) => question.id >= 61 && question.sourceType === 'community-recall-reconstructed').length,
  180,
  'CISEM_QUESTIONS: recall reconstruction coverage'
);
assert.strictEqual(
  new Set(CISEM_QUESTIONS.map((question) => question.options.map((option) => option.text.trim().toLowerCase()).sort().join('||'))).size,
  CISEM_QUESTIONS.length,
  'CISEM_QUESTIONS: duplicate option set across full bank'
);

console.log('question-bank tests passed');

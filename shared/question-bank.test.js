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

validate('../CSA/csa_questions.js', 'CSA_QUESTIONS', 365);
validate('../CIS-DF/cisdf_questions.js', 'CISDF_QUESTIONS', 230);
validate('../CAD/cad_questions.js', 'CAD_QUESTIONS', 60);
validate('../CIS-DISCO/cisdisco_questions.js', 'CISDISCO_QUESTIONS', 240);
validate('../CIS-SM/cissm_questions.js', 'CISSM_QUESTIONS', 60, { A: 15, B: 15, C: 15, D: 15 });
validate('../CIS-EM/cisem_questions.js', 'CISEM_QUESTIONS', 60, { A: 15, B: 15, C: 15, D: 15 });
validate('../CIS-ITSM/cisitsm_questions.js', 'CISITSM_QUESTIONS', 60, { A: 15, B: 15, C: 15, D: 15 });

console.log('question-bank tests passed');

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const banks = [
  ['CAD', 'CAD/cad_questions.js', 'CAD_QUESTIONS', { lengthBias: 113, weakDistractors: 0, maxAnswerPosition: 70 }],
  ['CIS-ITSM', 'CIS-ITSM/cisitsm_questions.js', 'CISITSM_QUESTIONS', { lengthBias: 116, weakDistractors: 0, maxAnswerPosition: 70 }],
  ['CIS-SM', 'CIS-SM/cissm_questions.js', 'CISSM_QUESTIONS', { lengthBias: 150, weakDistractors: 0, maxAnswerPosition: 70 }],
  ['CIS-EM', 'CIS-EM/cisem_questions.js', 'CISEM_QUESTIONS', { lengthBias: 144, weakDistractors: 0, maxAnswerPosition: 70 }],
  ['CIS-DISCO', 'CIS-DISCO/cisdisco_questions.js', 'CISDISCO_QUESTIONS', { lengthBias: 166, weakDistractors: 0, maxAnswerPosition: 70 }],
];

const weakDistractor = /\b(random|every user has admin|grant all users admin|portal theme|map color|catalog price|browser history|dashboard color|delete the cmdb|empty cmdb|user password)\b/i;

function load(file, globalKey) {
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context, { filename: file });
  return context.window[globalKey];
}

function audit(name, questions, limits) {
  const domainCounts = {};
  const difficultyCounts = {};
  const findings = [];
  let answerIsLongest = 0;
  let longAnswerRatio = 0;
  let weakDistractorQuestions = 0;
  const weakDistractorIds = [];
  let recallCount = 0;
  const answerPositions = { A: 0, B: 0, C: 0, D: 0 };

  questions.forEach((question) => {
    question.answer.forEach((answer) => {
      assert.ok(Object.prototype.hasOwnProperty.call(answerPositions, answer), `${name} Q${question.id}: invalid answer position`);
      answerPositions[answer] += 1;
    });
    const answers = question.options.filter((option) => question.answer.includes(option.id));
    const distractors = question.options.filter((option) => !question.answer.includes(option.id));
    const longest = Math.max(...question.options.map((option) => option.text.length));
    const answerAverage = answers.reduce((sum, option) => sum + option.text.length, 0) / answers.length;
    const distractorAverage = distractors.reduce((sum, option) => sum + option.text.length, 0) / distractors.length;

    if (answers.some((option) => option.text.length === longest)) answerIsLongest += 1;
    if (answerAverage > distractorAverage * 1.5) {
      longAnswerRatio += 1;
      findings.push({ id: question.id, type: 'answer-length', ratio: Number((answerAverage / distractorAverage).toFixed(2)) });
    }
    if (distractors.some((option) => weakDistractor.test(option.text))) {
      weakDistractorQuestions += 1;
      weakDistractorIds.push(question.id);
      findings.push({ id: question.id, type: 'weak-distractor' });
    }

    if (question.id >= 61 || name === 'CIS-DISCO') {
      recallCount += question.sourceType === 'community-recall-reconstructed' ? 1 : 0;
      assert.ok(question.domain, `${name} Q${question.id}: missing domain`);
      assert.ok(question.objective, `${name} Q${question.id}: missing objective`);
      assert.ok(['foundation', 'applied', 'advanced'].includes(question.difficulty), `${name} Q${question.id}: invalid difficulty`);
      assert.strictEqual(question.sourceType, name === 'CIS-DISCO' ? 'official-docs-reconstructed' : 'community-recall-reconstructed', `${name} Q${question.id}: source type`);
      assert.ok(['medium', 'high'].includes(question.confidence), `${name} Q${question.id}: confidence`);
      assert.strictEqual(question.verifiedAgainst, 'official-docs', `${name} Q${question.id}: verification`);
      assert.ok(['low', 'medium', 'high'].includes(question.releaseRisk), `${name} Q${question.id}: release risk`);
      domainCounts[question.domain] = (domainCounts[question.domain] || 0) + 1;
      difficultyCounts[question.difficulty] = (difficultyCounts[question.difficulty] || 0) + 1;
    }

    const choose = question.title.match(/choose\s+(two|three|four|five|2|3|4|5)\b/i);
    if (question.answer.length > 1) {
      assert.ok(choose, `${name} Q${question.id}: multi-select title must state Choose N`);
      const words = { two: 2, three: 3, four: 4, five: 5 };
      const chooseCount = words[choose[1].toLowerCase()] || Number(choose[1]);
      assert.strictEqual(chooseCount, question.answer.length, `${name} Q${question.id}: Choose count mismatch`);
    }
  });

  assert.strictEqual(recallCount, name === 'CIS-DISCO' ? 0 : 180, `${name}: recall reconstruction coverage`);
  assert.ok(longAnswerRatio <= limits.lengthBias, `${name}: answer-length bias regressed (${longAnswerRatio} > ${limits.lengthBias})`);
  assert.ok(weakDistractorQuestions <= limits.weakDistractors, `${name}: weak distractors regressed (${weakDistractorQuestions} > ${limits.weakDistractors})`);
  Object.keys(answerPositions).forEach((position) => {
    assert.ok(answerPositions[position] <= limits.maxAnswerPosition, `${name}: answer position ${position} is over-concentrated (${answerPositions[position]} > ${limits.maxAnswerPosition})`);
  });
  return {
    name,
    total: questions.length,
    recallCount,
    answerIsLongest,
    longAnswerRatio,
    weakDistractorQuestions,
    weakDistractorIds,
    answerPositions,
    domainCounts,
    difficultyCounts,
    highestRisk: findings.filter((item) => item.type === 'answer-length').sort((a, b) => b.ratio - a.ratio).slice(0, 10),
  };
}

const reports = banks.map(([name, file, globalKey, limits]) => audit(name, load(file, globalKey), limits));
reports.forEach((report) => {
  console.log(`${report.name}: ${report.total} questions, ${report.recallCount} recall-reconstructed, ${report.longAnswerRatio} length-biased, ${report.weakDistractorQuestions} weak-distractor flags, answer-positions=${JSON.stringify(report.answerPositions)}`);
  console.log(`  difficulty=${JSON.stringify(report.difficultyCounts)} domains=${JSON.stringify(report.domainCounts)}`);
  console.log(`  highest-risk=${report.highestRisk.map((item) => `Q${item.id}:${item.ratio}`).join(', ')}`);
  console.log(`  weak-distractor-ids=${report.weakDistractorIds.join(', ') || 'none'}`);
});
console.log('question-bank quality audit passed');

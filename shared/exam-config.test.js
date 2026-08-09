const assert = require('assert');
const config = require('./exam-config');

assert.deepStrictEqual(config.get('CAD'), { questionCount: 60, durationMinutes: 90 });
assert.deepStrictEqual(config.get('CSA'), { questionCount: 60, durationMinutes: 90 });
assert.deepStrictEqual(config.get('CIS-DF'), { questionCount: 75, durationMinutes: 90 });
assert.deepStrictEqual(config.get('CIS-DISCO'), { questionCount: 60, durationMinutes: 90 });
assert.strictEqual(config.get('UNKNOWN'), null);
assert.strictEqual(config.formatSummary('CSA'), '랜덤 60문항 / 90분 제한');
assert.strictEqual(config.formatSummary('CSA', '. '), '랜덤 60문항. 90분 제한');

console.log('exam-config tests passed');

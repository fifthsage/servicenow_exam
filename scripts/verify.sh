#!/bin/sh
set -eu

node -c shared/exam-config.js
node -c shared/quiz-policy.js
node -c shared/quiz-engine.js
node shared/exam-config.test.js
node shared/quiz-policy.test.js
node shared/quiz-engine.smoke.test.js
node shared/question-bank.test.js
node scripts/audit-question-banks.js
node scripts/audit-mock-exams.js
git diff --check

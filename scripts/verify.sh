#!/bin/sh
set -eu

node -c shared/quiz-policy.js
node -c shared/quiz-engine.js
node shared/quiz-policy.test.js
node shared/quiz-engine.smoke.test.js
git diff --check

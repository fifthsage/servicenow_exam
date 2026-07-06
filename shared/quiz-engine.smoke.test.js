const assert = require('assert');
const fs = require('fs');
const vm = require('vm');

function createElement(id, elements) {
  return {
    id,
    style: {},
    textContent: '',
    innerHTML: '',
    disabled: false,
    parentNode: null,
    className: '',
    children: [],
    classList: { remove() {}, toggle() {}, add() {} },
    appendChild(child) {
      child.parentNode = this;
      this.children.push(child);
    },
    insertBefore(child) {
      child.parentNode = this;
      this.children.push(child);
    },
    insertAdjacentElement(_, child) {
      child.parentNode = this;
      this.children.push(child);
    },
    addEventListener() {},
    querySelector(selector) {
      if (selector === '.question') return elements.question;
      if (selector === '.explain-btn') return createElement('explain-btn', elements);
      if (selector === '.explain') return createElement('explain', elements);
      if (selector === '.remove-wrong-btn') return null;
      return null;
    }
  };
}

function createHarness(initialWrong) {
  const elements = {};
  const created = [];
  const ids = [
    'invalid-screen',
    'start-screen',
    'quiz-screen',
    'result-screen',
    'practice-review',
    'review-list',
    'pool-info',
    'wrong-info',
    'wrong-mode-btn',
    'result-wrong-review-btn',
    'wrong-reset-btn',
    'timer',
    'mode-label',
    'q-counter',
    'progress',
    'q-title',
    'options',
    'prev-btn',
    'next-btn',
    'submit-btn',
    'notice',
    'result-title',
    'result-score',
    'result-percent',
    'result-summary'
  ];

  ids.forEach((id) => {
    elements[id] = createElement(id, elements);
  });
  elements.question = createElement('question', elements);
  elements.actions = createElement('actions', elements);

  const document = {
    getElementById(id) {
      return elements[id] || created.find((element) => element.id === id) || null;
    },
    querySelector(selector) {
      return selector === '#quiz-screen .actions' ? elements.actions : null;
    },
    querySelectorAll() {
      return [];
    },
    createElement(tag) {
      const element = createElement(tag, elements);
      created.push(element);
      return element;
    }
  };

  const storage = new Map(initialWrong ? [['wrong_key', JSON.stringify([1])]] : []);
  const window = {
    location: { pathname: '/CSA/CSA_Integrated_Quiz.html', search: '' },
    localStorage: {
      getItem(key) { return storage.get(key) || null; },
      setItem(key, value) { storage.set(key, value); },
      removeItem(key) { storage.delete(key); },
      key(index) { return Array.from(storage.keys())[index]; },
      get length() { return storage.size; }
    },
    sessionStorage: {
      setItem() {},
      removeItem() {}
    },
    alert(message) {
      throw new Error('alert: ' + message);
    },
    confirm() {
      return true;
    },
    prompt() {
      return '2';
    }
  };

  const context = {
    window,
    document,
    console,
    URLSearchParams,
    setInterval,
    clearInterval,
    Array,
    Object,
    String,
    Number,
    Math,
    JSON,
    Set,
    RegExp
  };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync('shared/quiz-policy.js', 'utf8'), context);
  vm.runInContext(fs.readFileSync('shared/quiz-engine.js', 'utf8'), context);

  const questions = [
    { id: 1, title: 'Q1', options: [{ id: 'A', text: 'a' }, { id: 'B', text: 'b' }], answer: ['A'], explanation: 'e1' },
    { id: 2, title: 'Q2', options: [{ id: 'A', text: 'a' }, { id: 'B', text: 'b' }], answer: ['B'], explanation: 'e2' },
    { id: 3, title: 'Q3', options: [{ id: 'A', text: 'a' }, { id: 'B', text: 'b' }], answer: ['A'], explanation: 'e3' }
  ];

  window.initIntegratedQuiz({
    questions,
    wrongStorageKey: 'wrong_key',
    wrongModeFlagKey: 'wrong_flag'
  });

  return { window, document, elements };
}

let harness = createHarness(false);
harness.window.startSession('all');
assert.strictEqual(
  harness.document.getElementById('quiz-help-group').children.map((child) => child.id).join(','),
  'explain-toggle-btn,answer-check-btn,question-jump'
);
assert.strictEqual(
  harness.document.getElementById('quiz-nav-group').children.map((child) => child.id).join(','),
  'prev-btn,next-btn,submit-btn'
);
assert.strictEqual(harness.document.getElementById('question-jump').style.display, 'inline-block');
assert.strictEqual(harness.elements['submit-btn'].style.display, 'inline-block');
assert.throws(() => harness.window.finishQuiz(), /채점할 문항/);

harness.window.startSession('random', 20);
assert.strictEqual(harness.elements['mode-label'].textContent, '랜덤(20)');
assert.strictEqual(harness.document.getElementById('question-jump').style.display, 'none');

harness.window.startSession('practice');
assert.strictEqual(harness.elements['mode-label'].textContent, '랜덤(10)');

harness.window.startSession('all_random');
assert.strictEqual(harness.elements['mode-label'].textContent, '랜덤(전체)');

harness = createHarness(true);
harness.window.startSession('wrong');
assert.strictEqual(harness.elements['mode-label'].textContent, '오답');
assert.strictEqual(harness.document.getElementById('question-jump').style.display, 'none');

console.log('quiz-engine smoke tests passed');

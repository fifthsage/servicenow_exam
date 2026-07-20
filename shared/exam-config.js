(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  }
  root.ExamConfig = api;
})(typeof window !== 'undefined' ? window : globalThis, function () {
  var exams = Object.freeze({
    CSA: Object.freeze({
      questionCount: 60,
      durationMinutes: 90
    }),
    'CIS-DF': Object.freeze({
      questionCount: 75,
      durationMinutes: 90
    })
  });

  function get(examKey) {
    return exams[examKey] || null;
  }

  function formatSummary(examKey, separator) {
    var exam = get(examKey);
    if (!exam) {
      return '';
    }
    return '랜덤 ' + exam.questionCount + '문항' + (separator || ' / ') + exam.durationMinutes + '분 제한';
  }

  return Object.freeze({
    exams: exams,
    get: get,
    formatSummary: formatSummary
  });
});

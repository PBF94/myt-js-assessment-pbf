exports = typeof window === "undefined" ? global : window;

exports.regexAnswers = {
  containsNumber: function (str) {
    var regex = /^[a-zA-Z]+$/;

    return !regex.test(str);
  },

  containsRepeatingLetter: function (str) {
    var regex = /(.)\1{1,}/;

    return regex.test(str);
  },

  endsWithVowel: function (str) {
    var regex = /[aeiouAEIOU]$/;

    return regex.test(str);
  },
};

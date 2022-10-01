exports = typeof window === "undefined" ? global : window;

exports.stringsAnswers = {
  reduceString: function (str, amount) {
    if (str.length <= 1) return str;
    if (str[0] === str[1]) return this.reduceString(str.substring(1));
    else return str[0] + this.reduceString(str.substring(1));
  },
};

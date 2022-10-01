exports = typeof window === "undefined" ? global : window;

exports.recursionAnswers = {
  listFiles: function (data, dirName, arr = []) {
    var arr = [];
    this.createArray(data, dirName, arr);
    return arr;
  },
  createArray: function (data, dirName, arr) {
    for (var elem of data.files) {
      console.log(elem);
      if (typeof elem === "string") {
        arr.push(elem);
      } else if (typeof elem === "object") {
        return this.createArray(elem, dirName, arr);
      } else {
        return this.createArray(elem, dirName, arr);
      }
    }
  },
};

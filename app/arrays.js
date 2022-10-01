exports = typeof window === "undefined" ? global : window;

exports.arraysAnswers = {
  indexOf: function (arr, item) {
    var index = -1;
    for (var i = 0; i < arr.length; i++) {
      if (item === arr[i]) {
        index = i;
      }
    }

    return index;
  },

  sum: function (arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }

    return sum;
  },

  remove: function (arr, item) {
    var copyArr = JSON.parse(JSON.stringify(arr));

    while (this.indexOf(copyArr, item) !== -1) {
      var index = this.indexOf(copyArr, item);
      copyArr.splice(index, 1);
    }

    return copyArr;
  },

  removeWithoutCopy: function (arr, item) {
    while (this.indexOf(arr, item) !== -1) {
      var index = this.indexOf(arr, item);
      arr.splice(index, 1);
    }

    return arr;
  },

  append: function (arr, item) {
    var copyArr = JSON.parse(JSON.stringify(arr));
    copyArr[copyArr.length] = item;

    return copyArr;
  },

  truncate: function (arr) {
    var copyArr = JSON.parse(JSON.stringify(arr));
    return copyArr.slice(0, copyArr.length - 1);
  },

  prepend: function (arr, item) {
    var copyArr = [item, ...arr];
    return copyArr;
  },

  curtail: function (arr) {
    var copyArr = [...arr];
    copyArr.shift();

    return copyArr;
  },

  concat: function (arr1, arr2) {
    var copyArr = [...arr1, ...arr2];

    return copyArr;
  },

  insert: function (arr, item, index) {
    var copyArr = [...arr];

    copyArr.splice(index, 0, item);

    return copyArr;
  },

  count: function (arr, item) {
    // var copyArr = [...arr];
    // var count = 0;
    // while (this.indexOf(copyArr, item) !== -1) {
    //   count++;
    // }
    // return count;
  },

  duplicates: function (arr) {
    // var copyArr = [...arr];
    // copyArr.filter((item, index) => copyArr.indexOf(item) === index);
    // return copyArr;
  },
};

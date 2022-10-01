exports = typeof window === "undefined" ? global : window;

exports.functionsAnswers = {
  argsAsArray: function (fn, arr) {
    return fn(arr[0], arr[1], arr[2]);
  },

  speak: function (fn, obj) {
    var greeting = obj.greeting;
    var name = obj.namel;
    return fn();
  },

  functionFunction: function (str) {
    return (function (str2) {
      return str + ", " + str2;
    })(str);
  },

  makeClosures: function (arr, fn) {
    return arr.map((item) => {
      return fn(item);
    });
  },

  useArguments: function () {
    var sum = 0;

    for (var i = 0; i < arguments.length; i++) {
      sum = sum + arguments[i];
    }

    return sum;
  },
};

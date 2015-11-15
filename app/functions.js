exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, result) {
    // stringResult = "";
    // stringResult += (result[0] + "," + " " + result[1] + result[2]);
    // console.log(stringResult);
    // fn.apply(this, result);
    console.log(result);
    return fn.apply(null, result);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function(arg) {
      // return arg + "," + str;
      return str + ", " + arg;

      console.log(newFunction)
    };
  },

  makeClosures : function(arr, fn) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

  },

  partial : function(fn, str1, str2) {
    //should be able to use the .call like in earlier example
    return function innterFn (a) {
      return fn.call(null, str1, str2, a);
    }
  },

  useArguments : function() {
    //stackOverflow
    //http://www.davesquared.net/2007/10/passing-arbitrary-number-of-arguments.html

    var howMany = 0;
     for (var i = 0; i < arguments.length; i++){
     howMany += (arguments[i]);
   }
   console.log(howMany);
   return howMany;
  },

  callIt : function(fn) {
    //should be able to use call again
    http://hangar.runway7.net/javascript/difference-call-apply
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    fn.apply(null, args);

  },

  partialUsingArguments : function(fn) {
    //http://www.drdobbs.com/open-source/currying-and-partial-functions-in-javasc/231001821
    var a = Math.random();
    var b = Math.random();
    var c = Math.random();

    var partialMe = function (x, y, z) {
      return x / y * z;
    };

    partialMe.apply(null, [a, b, c]);
    return partialMe;
  },

  curryIt : function(fn) {
    //http://www.drdobbs.com/open-source/currying-and-partial-functions-in-javasc/231001821

  }
};

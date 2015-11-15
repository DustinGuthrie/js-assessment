exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    var total = 0;
    arr.forEach(function (el, idx, arr) {
      total += el;
    });
    return total;
  },

  remove : function(arr, item) {
    for(var i = 0; i < arr.length; i++){
      if(item === arr[i]){
        arr.splice(i,1);
      }
    }
    return arr;
  },

  removeWithoutCopy : function(arr, item) {
    for(var i = 0; i < arr.length; i++){
      if(item === arr[i]){
        arr.splice(i,1);
        i--;
      }
    }
    return arr;
  },

  append : function(arr, item) {
    var total = arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    var removed = arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    var addItem = arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    var removeFirst = arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    var joinConcat = arr1.concat(arr2);
    return joinConcat;
  },

  insert : function(arr, item, index) {
    var insertAnywhere = arr.splice(2, 0, 'z');
    return arr;
  },

  count : function(arr, item) {
    // var howMany = arr.filter(function(currVal) {
    //   return currVal !== item}).length;
    var howMany = [];
      for(var i = 0; i < arr.length; i++) {
        if(arr[i] === item){
          // console.log(arr[i]);
          howMany.push(item);
        }
        // console.log(howMany);
      }
      return howMany.length;
  },

  duplicates : function(arr) {
    var sortedArr = arr.sort();
    var results=[];
    for(var i = 0; i < arr.length; i++) {
        if(sortedArr[i + 1] == sortedArr[i] && sortedArr[i + 2] !== sortedArr[i]) {
          results.push(sortedArr[i]);
        }
    }
    // console.log(results);
    return results;
  },

  square : function(arr) {
    // var numbers = [1, 4, 9];
    // var doubles = numbers.map(function(num) {
    //   return num * 2;("but this would need to square")
    // var squared = arr.map(function(currVal){
    //   squared += (currVal * currVal);
    // });
    var squared = [];
    for(var i = 0; i < arr.length; i++){
      squared.push(arr[i] * arr[i]);
      // console.log(squared);
    }
    return squared;
  },

  findAllOccurrences : function(arr, target) {
    // var occuranceIndex = []
    var allOccurances = [];
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === target){
      allOccurances.push(arr.indexOf(target,i));
  }
    // console.log(allOccurances);
  }
  return(allOccurances);
}
};

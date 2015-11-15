exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  //http://www.bennadel.com/blog/2265-changing-the-execution-context-of-javascript-functions-using-call-and-apply.htm
  //http://unitstep.net/blog/2007/12/18/using-the-call-and-apply-methods-to-change-the-context-of-a-function-in-javascript/
  alterContext : function(fn, obj) {
    console.log(fn.call(obj));
    return fn.call(obj);
  },

  alterObjects : function(constructor, greeting) {

  },

  iterate : function(obj) {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
//     var buz = {
//   fog: 'stack'
// };
//
// for (var name in buz) {
//   if (buz.hasOwnProperty(name)) {
//     console.log('this is fog (' + name + ') for sure. Value: ' + buz[name]);
//   }
//   else {
//     console.log(name); // toString or something else
//   }
// }

var answer = [];
// for(var i in C)
for (var i in obj) {
  if (obj.hasOwnProperty(i)) {
    answer.push(i + ': ' + obj[i]);
    console.log(answer);
  }
}
return answer;
},


};

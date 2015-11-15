exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var uniqueString = "";
    for(var i = 0; i < str.length; i++){
      if(str.lastIndexOf(str[amount]) == str.indexOf(str[amount])){
        uniqueString += str[i];
      }
    }
    console.log(uniqueString);
    return uniqueString;

  },
  wordWrap: function Dustin(str, cols) {
//http://stackoverflow.com/questions/1772941/how-can-i-insert-a-character-after-every-n-characters-in-javascript

    var formattedStr = [];
    var len;

  for(var i = 0, len = str.length; i < len; i += cols) {
     formattedStr.push(str.substr(i, cols));
    return formattedStr;
  }

    Dustin(inputStrings, wrapCol).join($);

  },


  reverseString: function(str) {
    //http://hangar.runway7.net/javascript/difference-call-apply
    return str.split("").reverse().join("");

  }
};

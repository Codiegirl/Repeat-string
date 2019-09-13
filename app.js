//with .repeat method
function repeatString(str, num){
    if (num < 0) return "";
    return str.repeat(num);
  }
  
  repeatString("abc", 5)
  
  //long version
  function repeatString(str, num){
    var repeatStr = "";
    if (num < 0) return "";
      for (var i = 0; i<num; i++){
        repeatStr += str;
    }
    return repeatStr;
  }
  
  repeatString("abc", 7)
  
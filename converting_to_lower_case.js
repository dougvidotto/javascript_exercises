function toLowerCase(str) {
  var finalStr = '';
  var lowerCaseAsciiNumber;
  
  for(var i = 0; i < str.length; i++) {
    lowerCaseAsciiNumber = str.charCodeAt(i) + 32;
    if(str[i] >= 'A' && str[i] <= 'Z') {
      finalStr += String.fromCharCode(lowerCaseAsciiNumber);
    } else {
      finalStr += str[i];
    }
  }
  
  return finalStr;
}

console.log(toLowerCase('DougLas'));
console.log(toLowerCase('ALPHABET'));
console.log(toLowerCase('123'));
console.log(toLowerCase('abcDEF'));

function repeat(str, num) {
  var finalStr = '';
  
  if(!Number.isInteger(num) || num < 0) {
    return undefined;
  }
  
  for(var i = 0; i < num; i++) {
    finalStr += str;
  }
  
  return finalStr;
}


console.log(repeat('abc', 1));
console.log(repeat('abc', 2));
console.log(repeat('abc', -1));
console.log(repeat('abc', 0));
console.log(repeat('abc', 'a'));
console.log(repeat("bla", '   '));
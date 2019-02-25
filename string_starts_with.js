function startsWith(str, searchString) {
  for(var i = 0; i < searchString.length; i++) {
    if(str[i] !== searchString[i]) {
      return false;
    }
  }
  
  return true;
}

var str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));
console.log(startsWith(str, 'We put'));          // true
console.log(startsWith(str, ''));
console.log(startsWith(str, 'put')); 

var longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));

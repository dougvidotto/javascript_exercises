function getFirstNonBlankPosition(words) {
  var blankPosition = 0;
  for(;blankPosition < words.length; blankPosition++) {
    if(words[blankPosition] !== ' ') {
      break;
    }
  }
  
  return blankPosition;
}

function getLastNonBlankPosition(words) {
  var blankPosition = words.length - 1;
  
  for(;blankPosition >= 0; blankPosition--) {
    if(words[blankPosition] !== ' ') {
      break;
    }
  }
  
  return blankPosition + 1;
}

function trim(words) {
  var nonBlankInitial = getFirstNonBlankPosition(words);
  var nonBlankEnding = getLastNonBlankPosition(words);

  return words.substr(nonBlankInitial, nonBlankEnding);
}

console.log(trim('  abc  '));  // "abc")
console.log(trim('abc   '));   // "abc")
console.log(trim(' ab c'));    // "ab c")
console.log(trim(' a b  c'));
console.log(trim('      '));
console.log(trim(''));
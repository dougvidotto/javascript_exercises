function getCharCodeReference(character) {
  var charCodeReference;
  if(character >= 'A' && character <= 'Z') {
    charCodeReference = 'Z'.charCodeAt();
  } else {
    charCodeReference = 'z'.charCodeAt();
  }
  
  return charCodeReference;
}

function advance13Positions(character) {
  var charCode;
  var charCodeReference = getCharCodeReference(character);
  
  if(character.charCodeAt() + 13 > charCodeReference) {
    charCode = 13 - (26 - character.charCodeAt());
  } else {
    charCode = character.charCodeAt() + 13;
  }
  
  return charCode;
}

function rot13(words) {
  var rottedWords = "";
  var charCode;
  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  
  for(var i = 0; i < words.length; i++) {
    if(ALPHABET.includes(words[i])) {
      charCode = advance13Positions(words[i]);
      rottedWords += String.fromCharCode(charCode);
    } else {
      rottedWords += words[i];
    }
  }
  
  return rottedWords;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

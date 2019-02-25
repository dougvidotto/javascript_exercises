function splitString(str, splitter) {
  
  if (splitter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  }
  
  var word = '';
  for(var i = 0; i < str.length; i++) {
    if(splitter === '') {
      console.log(str[i]);
    } else {
      if(splitter === str[i]) {
        console.log(word);
        word = '';
      } else {
        word += str[i];
      }
    }
  }
  
  if(word !== '') {
    console.log(word);
  }
}

splitString('abc,123,hello world', ',');
splitString('hello', ';');
splitString('hello', '');
splitString(';hello;', ';');
splitString('hello');

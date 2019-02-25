function logMultiples(num) {
  var i;
  for(i = Math.floor(100 / num) * num; i > 0; i -= num) {
    if(i % 2 === 1) {
      console.log(i);
    }
  }
}

//logMultiples(17);
logMultiples(21);
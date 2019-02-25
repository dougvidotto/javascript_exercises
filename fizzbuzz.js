function fizzbuzz() {
  var message;
  for(var i = 1; i < 100; i++) {
    message = "";

    message += !(i % 3 == 0) || "Fizz";
    message = message.replace('true', '');
    
    message += !(i % 5 == 0) || "Buzz";
    message = message.replace('true', '');

    message = message === '' ? i : message;
    console.log(message);
  }
}

fizzbuzz();
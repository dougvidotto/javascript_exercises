var correctPassword = 'hard_password';
var rlSync = require("readline-sync");
var tries = 1;
var guess = rlSync.question("What is the password: ");

while(tries < 3 && guess !== correctPassword) {
  tries += 1;
  guess = rlSync.question("What is the password: ");
}

if(tries === 3) {
  console.log("You have been denied access.");
} else {
  console.log("You have successfully logged in.");
}
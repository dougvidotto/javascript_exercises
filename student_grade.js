
function calculateAverage(grades, quantity) {
  return grades / quantity;
}

var rlSync = require("readline-sync");

var grades = 0;
var totalGrades = 0;
var input = Number(rlSync.question("Enter a positive number: "));

while(input > 0) {
  grades += input;
  totalGrades++;
  input = Number(rlSync.question("Enter a positive number: "));
}

var average;
if(grades > 0) {
  average = calculateAverage(grades, totalGrades);
}

var finalGrade = 'F'
if(average >= 90) {
  finalGrade = 'A'
} else if(average >= 70 && average < 90) {
  finalGrade = 'B';
} else if(average >= 50 && average < 70) {
  finalGrade = 'C';
}

console.log(`Based on the average of your scores your letter grade is "${finalGrade}".`);
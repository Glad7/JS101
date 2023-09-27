const readline = require('readline-sync');

function prompt(message) {
  console.log('=> ' + message);
}

function invalidNumber(num) {
  return num.trimStart() === '' || num < 0 || Number.isNaN(Number(num));
}

function getLoanAmount() {
  prompt('Please enter the loan amount: ');
  let loanAmount = readline.question();

  while(invalidNumber(loanAmount)) {
    prompt('Please enter a valid loan amount: ');
    loanAmount = readline.question();
  }
  return loanAmount;
}

function getPercentage() {
  prompt('Please enter the annual percentage rate (as a %): ');
  let percentage = readline.question();

  while(invalidNumber(percentage)) {
    prompt('Please enter a annual percentage rate (as a %): ');
    percentage = readline.question();
  }
  return percentage;
}

function getDuration() {
  prompt('Please enter the loan duration in years: ');
  let duration = readline.question();

  while(invalidNumber(duration)) {
    prompt('Please enter a valid duration in years: ');
    duration = readline.question();
  }
  return duration;
}

function loanCalculate(amount, percentage, duration) {
  amount = Number(amount);
  duration = Number(duration) * 12;

  if(percentage === '0') 
    return amount / duration;

  percentage = (Number(percentage) / 100) / 12;
  
  let monthlyPayment = amount * (percentage / (1 - Math.pow((1 + percentage), (-duration))));
  return monthlyPayment;
}

prompt('Welcome to the Loan Calculator!');

let payment = loanCalculate(getLoanAmount(), getPercentage(), getDuration());

prompt('Your monthly payment is: ' + payment.toFixed(2));

prompt('Want to do another calculation? y/n');
let answer = readline.question().toLowerCase();

while(answer[0] !== 'y' && answer[0] !== 'n') {
  prompt('Please enter only \'y\' or \'n\'');
  answer = readline.question().toLowerCase();
}

while(answer[0] === 'y') {
  payment = loanCalculate(getLoanAmount(), getPercentage(), getDuration());
  prompt('Your monthly payment is: ' + payment.toFixed(2));
  prompt('Want to do another calculation? y/n');
  answer = readline.question().toLowerCase();
  while(answer[0] !== 'y' && answer[0] !== 'n') {
    prompt('Please enter only \'y\' or \'n\'');
    answer = readline.question().toLowerCase();
  }
}
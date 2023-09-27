const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');

const LANGUAGE = 'en';

function prompt(key) {
  console.log('=> ' + messages(key, LANGUAGE));
}

function messages(message, lang='en') {
  return MESSAGES[lang][message];
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

function getNumbers() {
  prompt('firstNum');
  let num1 = readline.question();

  while(invalidNumber(num1)) {
    prompt('invalidNum');
    num1 = readline.question();
  }

  prompt('secondNum');
  let num2 = readline.question();

  while(invalidNumber(num2)) {
    prompt('invalidNum');
    num2 = readline.question();
  }

  return [num1, num2];
}

function getOperation() {
  prompt('whatOperation');
  let operation = readline.question();

  while(!['1', '2', '3', '4'].includes(operation)) {
    prompt('invalidOperation');
    operation = readline.question();
  }
  return operation;
}

function calculate(numArr, operation) {
  switch(operation) {
    case '1':
      console.log('The result is: ' + `${Number(numArr[0]) + Number(numArr[1])}`);
      return;
    case '2':
      console.log('The result is: ' + `${Number(numArr[0]) - Number(numArr[1])}`);
      return;
    case '3':
      console.log('The result is: ' + `${Number(numArr[0]) * Number(numArr[1])}`);
      return;    
    case '4':
      console.log('The result is: ' + `${Number(numArr[0]) / Number(numArr[1])}`);
      return;    
  }
}

prompt('welcome');

calculate(getNumbers(), getOperation());

prompt('another');
let decision = readline.question();
while(decision.toLowerCase() !== 'yes' && decision.toLowerCase() !== 'no') {
  prompt('invalidResponse');
  decision = readline.question();
}

while(decision === 'yes') {
  calculate(getNumbers(), getOperation());

  prompt('another');

  decision = readline.question();

  while(decision.toLowerCase() !== 'yes' && decision.toLowerCase() !== 'no') {
  prompt('invalidResponse');
  decision = readline.question();
  }
}

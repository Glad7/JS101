const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock', 'r', 'p', 'l', 'sp', 'sc'];
const NORMAL_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',    'spock'],
  spock:    ['rock',     'scissors'],
};

function prompt(message) {
  console.log('=> ' + message);
}

function shortPlayerChoice(choice) {
  switch(choice) {
    case 'r':
      choice = 'rock';
      break;
    case 'p':
      choice = 'paper';
      break;
    case 'l':
      choice = 'lizard';
      break;
    case 'sp':
      choice = 'spock';
      break;
    case 'sc':
      choice = 'scissors'; 
      break;       
  }
  return choice;
}

function makePlayerChoice() {
  prompt('Choose one: ' + NORMAL_CHOICES.join(", "));
  let choice = readline.question();

  while(!VALID_CHOICES.includes(choice)) {
    prompt('That isn\'t a valid choice!');
    choice = readline.question();
  }

  return shortPlayerChoice(choice);
}

function makeComputerChoice() {
  let choice = Math.floor(Math.random() * NORMAL_CHOICES.length);
  return NORMAL_CHOICES[choice];
}

function winDecision(pChoice, cChoice) {
  if (WINNING_COMBOS[pChoice].includes(cChoice)) {
    prompt('You win!');
    return 0;
  }  
  else if (WINNING_COMBOS[cChoice].includes(pChoice)) {
    prompt('Computer wins!');
    return 1;
  }  
  else {
    prompt('It\'s a tie!');
  }  

}

let playerWins = 0;
let computerWins = 0;

while(true) {
  let playerChoice = makePlayerChoice();
  let computerChoice = makeComputerChoice();

  prompt('You chose ' + playerChoice + '. The computer chose ' + computerChoice);
  let outcomeVal = winDecision(playerChoice, computerChoice);
  if(outcomeVal === 0)
    playerWins++;
  else if(outcomeVal === 1)
    computerWins++;

  if(playerWins === 3) {
    prompt('You won the best of five!');
    playerWins = 0;
    computerWins = 0;
  }
  else if(computerWins === 3) {
    prompt('The computer won the best of five!');
    playerWins = 0;
    computerWins = 0;
  }

  prompt('Do you want to play again? (y/n)');
  let answer = readline.question();

  while(answer[0].toLowerCase() !== 'y' && answer[0].toLowerCase() !== 'n') {
    prompt('Please enter a valid answer. (y/n)');
    answer = readline.question();
  }

  if(answer[0].toLowerCase() !== 'y')
    break;
}

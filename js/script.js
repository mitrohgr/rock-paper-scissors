let humanScore = 0;
let computerScore = 0;

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
}

function getComputerChoice() {
  let computerChoice;
  const value = getRandomIntInclusive(0, 2);
  switch (value) {
    case 0:
      computerChoice = "Rock";
      break;
    case 1:
      computerChoice = "Paper";
      break;
    case 2:
      computerChoice = "Scissors";
      break;
  }
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice;
  let userInput = prompt("Choose between rock, paper, or scissors");
  if (userInput === null || userInput === undefined) {
    inputIsInvalid = true;
    return;
  }
  let modUserInput = userInput.toLowerCase();
  if (modUserInput === "rock" || modUserInput === "paper" || modUserInput === "scissors") {
    humanChoice = userInput;
  } else {
    inputIsInvalid = true;
    return;
  }
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  let newHumanChoice = humanChoice.toLowerCase();
  let newComputerChoice = computerChoice.toLowerCase();
  console.log(`You chose ${humanChoice}, Computer chose ${computerChoice}.`);
  if (newHumanChoice === newComputerChoice) {
    console.log("It's a draw!");
  } else if (newHumanChoice === "rock") {
    if (newComputerChoice === "paper") {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
      computerScore++;
    } else if (newComputerChoice === "scissors") {
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
      humanScore++;
    }
  } else if (newHumanChoice === "paper") {
    if (newComputerChoice === "scissors") {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
      computerScore++;
    } else if (newComputerChoice === "rock") {
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
      humanScore++;
    }
  } else if (newHumanChoice === "scissors") {
    if (newComputerChoice === "rock") {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
      computerScore++;
    } else if (newComputerChoice === "paper") {
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
      humanScore++;
    }
  }
}

let inputIsInvalid = false;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

if (inputIsInvalid) {
  console.log("You entered an invalid input.");
  console.log("Please choose between Rock, Paper, or Scissors.")
} else {
  playRound(humanSelection, computerSelection);
}

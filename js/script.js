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
  let humanChoice = prompt("Choose between Rock, Paper, or Scissors");
  return humanChoice;
}

function isInputValid(humanInput) {
  if (humanInput === undefined || humanInput === null) {
    return false;
  }
  let temp = humanInput.toLowerCase();
  if (!(temp === "rock" || temp === "paper" || temp === "scissors")) {
    return false;
  }
  return true;
}


function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  
  function playRound(humanChoice, computerChoice) {
    let newHumanChoice = humanChoice.toLowerCase();
    let newComputerChoice = computerChoice.toLowerCase();
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

  function declareWinner() {
    if (humanScore > computerScore) {
      console.log(`Final score: You ${humanScore}, Computer ${computerScore}`);
      console.log(`Congratulations! You are the winner!`);
    } else if (humanScore < computerScore) {
      console.log(`Final score: You ${humanScore}, Computer ${computerScore}`);
      console.log(`Bad luck! Computer is the winner!`);
    } else {
      console.log(`Final score: You ${humanScore}, Computer ${computerScore}`);
      console.log(`Stalemate! It's a draw!`);
    }
  }

  for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    if (!isInputValid(humanSelection)) {
      console.error("You entered an invalid input.");
      continue;
    }
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  declareWinner();
}

playGame();

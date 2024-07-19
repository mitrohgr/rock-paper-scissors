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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  let newHumanChoice = humanChoice.toLowerCase();
  let newComputerChoice = computerChoice.toLowerCase();
  if (newHumanChoice === newComputerChoice) {
    result.textContent = "It's a draw!";
  } else if (newHumanChoice === "rock") {
    if (newComputerChoice === "paper") {
      result.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
      computerScore++;
    } else if (newComputerChoice === "scissors") {
      result.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
      humanScore++;
    }
  } else if (newHumanChoice === "paper") {
    if (newComputerChoice === "scissors") {
      result.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
      computerScore++;
    } else if (newComputerChoice === "rock") {
      result.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
      humanScore++;
    }
  } else if (newHumanChoice === "scissors") {
    if (newComputerChoice === "rock") {
      result.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
      computerScore++;
    } else if (newComputerChoice === "paper") {
      result.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
      humanScore++;
    }
  }
}

let isGameOver = false;

const container = document.querySelector(".container");

const buttons = document.querySelectorAll(".btn");

const score = document.createElement("div");
score.setAttribute("class", "score");

const result = document.createElement("div");
result.setAttribute("class", "result");

const winner = document.createElement("div");
winner.setAttribute("class", "winner");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    if (isGameOver) {
      return;
    }

    const humanSelection = button.textContent;
    const computerSelection = getComputerChoice();
    
    playRound(humanSelection, computerSelection);

    score.textContent = `Score: You ${humanScore}, Computer ${computerScore}`;

    container.appendChild(result);
    container.appendChild(score);

    if (humanScore === 5 || computerScore === 5) {
      isGameOver = true;
      declareWinner();
    }
  });
});

function declareWinner() {
  if (humanScore === 5 || computerScore === 5) {
    if (humanScore === 5) {
      winner.textContent = "Congratulations! YOU won!";
    } else if (computerScore === 5) {
      winner.textContent = "Try again! COMPUTER won!";
    }
  }
  container.appendChild(winner);
}

const reset = document.querySelector(".reset");

reset.addEventListener("click", () => {
  isGameOver = false;
  
  humanScore = 0;
  computerScore = 0;

  result.textContent = "";
  score.textContent = "";
  winner.textContent = "";
});

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
      computerChoice = "rock";
      break;
    case 1:
      computerChoice = "paper";
      break;
    case 2:
      computerChoice = "scissors";
      break;
  }
  return computerChoice;
}

console.log(getComputerChoice());

function getHumanChoice() {
  let humanChoice;
  let userInput = prompt("Choose between rock, paper, or scissors");
  if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
    humanChoice = userInput;
  } else {
    alert("You can only enter either rock, paper, or scissors.");
  }
  return humanChoice;
}

console.log(getHumanChoice());

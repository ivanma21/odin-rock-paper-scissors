console.log('Hello Coglionazzo!');

function getComputerChoice() {

  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) return 'rock';
  else if (randomNumber === 1) return 'paper';
  else return 'scissors';
}

function getHumanChoice() {

  const yourChoice = prompt("Choose brotha");
  return yourChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

  console.log(`Computer chooses '${computerChoice}'`);
  console.log(`You choose '${humanChoice}'`);

  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    return "Tie. You suck anyways.";
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return `Hey, you won! Lucky bum. (${humanChoice} beats ${computerChoice})`;
  } else {
    computerScore++;
    return `Computer won. You suck. (${computerChoice} beats ${humanChoice})`;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

const result = playRound(humanSelection, computerSelection);

console.log(result);
console.log(`Scores -> Human: ${humanScore} | Computer: ${computerScore}`);

function playGame() {
     for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        console.log(result);
        console.log(`Score: Human ${humanScore} | Computer ${computerScore}`);
   }
     if (humanScore > computerScore) {
          return "Yeah... You... Won...";
     }
     else if (computerScore > humanScore) {
          return "BOOM!!! COMPUTER WON BABY, GO FREAKIN CRY IN THE CORNER, WHOOOOO OH FUCK YOU";
     }
     else if (computerScore === humanScore) {
          return "Tie. You know you still suck, right?";
     }
}


console.log(playGame());

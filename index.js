function getComputerSelection() {
  const array = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function getPlayerSelection() {
  let playerSelection;
  const rock = document.querySelector(".rock");
  rock.addEventListener("click", () => {
    playRound("rock", getComputerSelection());
  });
  const paper = document.querySelector(".paper");
  paper.addEventListener("click", () => {
    playRound("paper", getComputerSelection());
  });
  const scissors = document.querySelector(".scissors");
  scissors.addEventListener("click", () => {
    playRound("scissors", getComputerSelection());
  });
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    alert("The game is a Tie");
    return;
  }
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    alert(`You win! You choose ${playerSelection} and the computer chooses ${computerSelection}`);
    playerScore++;
  } else {
    alert(`You lose! You choose ${playerSelection} and the computer chooses ${computerSelection}`);
    computerScore++;
  }
}

getPlayerSelection();

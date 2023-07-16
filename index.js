function getComputerSelection() {
  const array = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function getPlayerSelection() {
  let playerSelection;
  const rock = document.querySelector(".rock");
  rock.addEventListener("click", () => {
    game("rock");
  });
  const paper = document.querySelector(".paper");
  paper.addEventListener("click", () => {
    game("paper");
  });
  const scissors = document.querySelector(".scissors");
  scissors.addEventListener("click", () => {
    game("scissors");
  });
}

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
  } else {
    alert(`You lose! You choose ${playerSelection} and the computer chooses ${computerSelection}`);
  }
}

function game(playerSelection) {
  let computerSelection = getComputerSelection();
  console.log(playerSelection);
  console.log(computerSelection);

  playRound(playerSelection, computerSelection);
}

getPlayerSelection();

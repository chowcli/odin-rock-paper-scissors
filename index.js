function getComputerChoice() {
  let computerChoice = Math.random();
  if (computerChoice <= 0.33) return (computerChoice = "Rock");

  if (computerChoice <= 0.66) return (computerChoice = "Paper");

  return (computerChoice = "Scissors");
}

function playRound(playerSelection, computerSelection) {
  playerChoice = playerSelection.toLowerCase();
  computerChoice = computerSelection.toLowerCase();

  if (playerChoice === computerChoice) {
    alert("The game is a Tie");
    return;
  }
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    alert(`You win! ${playerSelection} beats ${computerSelection}`);
  } else {
    alert(`You lose! ${computerSelection} beats ${playerSelection}`);
  }
}

function game() {
  let playerSelection;
  let computerSelection;

  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("Pick Rock, Paper, or Scissors", "");
    computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);
  }
}

game();

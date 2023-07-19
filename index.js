// game
function getComputerChoice() {
  const array = ["ROCK", "PAPER", "SCISSORS"];
  let choice = Math.floor(Math.random() * array.length);
  return (computer = array[choice]);
}

function checkWinner() {
  if (player === computer) {
    return (winner = "tie");
  } else if (
    (player === "ROCK" && computer === "SCISSORS") ||
    (player === "PAPER" && computer === "ROCK") ||
    (player === "SCISSORS" && computer === "PAPER")
  ) {
    return (winner = "player");
  } else {
    return (winner = "computer");
  }
}

function updateScore() {
  if (checkWinner() === "tie") {
    return;
  } else if (checkWinner() === "player") {
    p_score += 1;
  } else {
    c_score += 1;
  }
}

function checkSumScore() {
  if (p_score === 5 || c_score === 5) return true;

  return false;
}

function declareWinner() {
  if (p_score === 5) return "You win this round!";
  else if (c_score === 5) {
    return "You lose! The computer win this round.";
  }
}

function endGame() {
  if (checkSumScore() === true) {
    choiceBtns.forEach((button) => (button.disabled = true));
  }
}

// UI
const playerChoice = document.querySelector(".playerChoice");
const playerScore = document.querySelector(".playerScore");
const computerChoice = document.querySelector(".computerChoice");
const computerScore = document.querySelector(".computerScore");
const resultText = document.querySelector(".resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");

let player;
let computer;
let winner;
let p_score = 0;
let c_score = 0;

choiceBtns.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    getComputerChoice();
    playerChoice.textContent = `Player choice: ${player}`;
    computerChoice.textContent = `Computer choice: ${computer}`;

    updateScore();
    playerScore.textContent = `${p_score}`;
    computerScore.textContent = `${c_score}`;

    resultText.textContent = declareWinner();
    endGame();
  })
);

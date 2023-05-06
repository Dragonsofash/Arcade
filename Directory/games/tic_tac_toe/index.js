// Grabbing all the DOM elements
const p1Name = document.getElementById("p1Name");
const p1Score = document.getElementById("p1Score");
const p2Name = document.getElementById("p2Name");
const p2Score = document.getElementById("p2Score");
const gameMode = document.querySelector("#modeSelect");
const resetbtn = document.getElementById("reset");
const results = document.getElementById("results");
const board = document.getElementById("board");
const cells = document.querySelectorAll(".cell");

// Initializing Objects(Players)
const player1 = { name: p1Name.value, score: 0, move: "X" };
const player2 = { name: p2Name.value, score: 0, move: "O" };
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let currentPlayer = player1;
let cellsPlayed = [];

// Callback Functions
function gameStart() {
  // Choose game mode
  gameMode.addEventListener("change", function (gameMode) {
    if (gameMode.value === "vsComp") {
      singlePlayer();
    }
  });
  // Adds a Reset button
  resetbtn.addEventListener("click", reset);
  // Add event listeners to each cell
  cells.forEach((cell) => cell.addEventListener("click", boxClicked));
  // Clears the board for each new game
  reset();
}

function singlePlayer() {
  p2Name.placeholder = "Computer";
}

function boxClicked(event) {
  const id = event.target.id;
  // Checking if move is available
  if (cells[id].innerText === "") {
    cells[id].innerText = currentPlayer.move;
    cells[id].classList.add(currentPlayer === player1 ? "player1" : "player2");

    // checking for win/draw
    const winner = checkForWin();

    if (winner) {
      declareWinner(winner);
      return;
    }

    if (checkForDraw(cells)) {
      alert("It's a draw! Try again.");
      return;
    }

    // Changing Turns
    changeTurn();
    // If it changes to computer's turn
    if (gameMode.value == "vsComp" && currentPlayer == player2) {
      computerMove();
    }
  }
}

function computerMove() {
  let availableCells = [];
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].innerText === "") {
      availableCells.push(cells[i]);
    }
  }
  let randomCell =
    availableCells[Math.floor(Math.random() * availableCells.length)];
  randomCell.innerText = currentPlayer.move;
  randomCell.classList.add("player2");

  // checking for win/draw
  const winner = checkForWin();
  if (winner) {
    declareWinner(winner);
    return;
  }

  if (checkForDraw(cells)) {
    alert("It's a draw! Try again.");
    return;
  }

  // Changing Turns
  changeTurn();
}

function changeTurn() {
  if (currentPlayer === player1) {
    currentPlayer = player2;
  } else {
    currentPlayer = player1;
  }
}

function checkForWin() {
  for (let i = 0; i < winningCombos.length; i++) {
    const [a, b, c] = winningCombos[i];
    if (
      cells[a].innerText !== "" &&
      cells[a].innerText === cells[b].innerText &&
      cells[b].innerText === cells[c].innerText
    ) {
      return cells[a].innerText;
    }
  }

  if (cellsPlayed === cells.length) {
    announce.textContent = "It's a draw!";
    return true;
  }
  return false;
}

function checkForDraw(cells) {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].innerText == "") {
      return false;
    }
  }
  return true;
}

function declareWinner(winner) {
  if (winner === player1.move) {
    player1.score++;
    p1Score.innerText = player1.score;
    alert("Player 1 wins!");
  } else if (winner === player2.move) {
    player2.score++;
    p2Score.innerText = player2.score;
    alert("Player 2 wins!");
  }

  // if the game has not ended, change turns
  changeTurn();
}

function reset() {
  cells.forEach((cell) => {
    cell.innerText = "";
    cell.classList.remove("player1");
    cell.classList.remove("player2");
  });
  currentPlayer = player1;
  cellsPlayed = [];
  results.innerText = "";
}

// Running the game
gameStart();

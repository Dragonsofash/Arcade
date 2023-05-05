// Grabbing all the DOM elements
const p1Name = document.getElementById("p1Name");
const p1Score = document.getElementById("p1Score");
const p2Name = document.getElementById("p2Name");
const p2Score = document.getElementById("p2Score");
const gameMode = document.getElementById("modeSelect");
const resetbtn = document.getElementById("reset");
const board = document.getElementById("board");
const cells = Array.from(document.getElementsByClassName("cell"));

// Initializing Objects(Players)
const player1 = { name: p1Name, score: p1Score, move: "X" };
const player2 = { name: p2Name, score: p2Score, move: "O" };
const gamePlay = { players: [player1, player2], spaces: cells, }
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
resetbtn.addEventListener("click", reset);

// Callback Functions
function gameStart() {
  currentPlayer = player1;
  cells = [null, null, null, null, null, null, null, null, null];
  cells.forEach((cell) =>
    cell.addEventListener("click", boxClicked, { once: true })
  );
}

function modeSelector(selector) {
  If(gameMode.innerText == "Single Player");
  vsCompupter();
}

function vsCompupter() {
  return player2.name.innerText == "Computer";
}

function boxClicked(event) {
  const id = event.target.id;
  // Checking if move is available
  if (cells[id] != id) {
    cells[id] = currentPlayer;
    event.target.innerText = currentPlayer.move;
    // Changing Turns
    changeTurn();
  }
}


function changeTurn(currentPlayer) {
  if (currentPlayer == player1) {
    currentPlayer = player2;
  } else {
    currentPlayer = player1;
  }
}

function checkForWin() {
  for (const condition of winningCombos) {
    let [a, b, c] = condition;

    if (
      cells[a] &&
      cells[a] == cells[b] &&
      cells[a] == cells[c]
    ) {
      return [a, b, c];
      declareWinner();
    }
  }
  return false;
}

function declareWinner() {
  prompt("${currentPlayer.name} has won");
  currentPlayer.score += 1;
}

function checkForDraw(cells) {
  for (let i = 0; i < cells.lenght; i++) {
    if (cells[i] == null) {
      return true;
    }
  }
  return false;
}

function reset() {
  gameStart();
}

// Running the game
gameStart();
boxClicked();
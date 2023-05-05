// Dividing and Importing code for organization
import {
  update as updateSnake,
  draw as drawSnake,
  snakeSpeed,
  getSnakeHead,
  snakeIntersection,
} from "./snake.js";
import { update as updateEgg, draw as drawEgg } from "./egg.js";
import { outsideGrid } from "./grid.js";

// Initializing game start state
let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("gameboard");

function main(currentTime) {
  // Checking for gameOver = True
  if (gameOver) {
    if (confirm("You lost. Press ok to restart.")) {
      window.location = "/Directory/games/snake/index.html";
    }
    return;
  }

  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / snakeSpeed) return;

  lastRenderTime = currentTime;
  // Continually updating the board
  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateEgg();
  checkDeath();
}

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawEgg(gameBoard);
}

// Defining conditions for gameOver
function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}

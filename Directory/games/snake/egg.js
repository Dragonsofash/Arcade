// Retrieving information from snake position and random grid function
import { onSnake, expandSnake } from "./snake.js";
import { randGridPos } from "./grid.js";

// Initializing a random egg position for game start
let egg = getRandEggPos();
const expansionRate = 1;

// Tells the snake to add a segment if it has touched an egg
export function update() {
  if (onSnake(egg)) {
    expandSnake(expansionRate);
    egg = getRandEggPos();
  }
}

// Creating the egg
export function draw(gameBoard) {
  const eggEl = document.createElement("div");
  // eggEl.src = '/Directory/games/snake/images/egg.png'
  eggEl.style.gridRowStart = egg.y;
  eggEl.style.gridColumnStart = egg.x;
  eggEl.classList.add("egg");
  gameBoard.appendChild(eggEl);
}

// Creating new eggs
function getRandEggPos() {
  let newEggPos;
  while (newEggPos == null || onSnake(newEggPos)) {
    newEggPos = randGridPos();
  }
  return newEggPos;
}

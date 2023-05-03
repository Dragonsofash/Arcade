import { onSnake, expandSnake } from "./snake.js";
import { randGridPos } from "./grid.js";

let egg = getRandEggPos();
const expansionRate = 1;

export function update() {
  if (onSnake(egg)) {
    expandSnake(expansionRate);
    egg = getRandEggPos();
  }
}

export function draw(gameBoard) {
  const eggEl = document.createElement("div");
  eggEl.style.gridRowStart = egg.y;
  eggEl.style.gridColumnStart = egg.x;
  eggEl.classList.add("egg");
  gameBoard.appendChild(eggEl);
}

function getRandEggPos() {
  let newEggPos;
  while (newEggPos == null || onSnake(newEggPos)) {
    newEggPos = randGridPos();
  }
  return newEggPos;
}

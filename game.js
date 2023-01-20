import {
  update as updateSnake,
  draw as drawSnake,
  getSnakeHead,
  snakeIntersection,
} from './snake.js';
import { update as updateFood, draw as drawFood } from './food.js';
import { empty } from './edit.js';
import { outsideGrid } from './grid.js';

var SNAKE_SPEED = 5;
var slider = document.querySelector('.slider');
var sliderValue = document.querySelector('.slider-value');

slider.oninput = () => {
  SNAKE_SPEED = slider.value;
  sliderValue.innerText = slider.value;
  console.log(SNAKE_SPEED);
};

let lastRenderTime = 0;
let gameOver = false;

const gameBoard = document.getElementById('game-board');

function main(currentTime) {
  if (gameOver) {
    if (confirm('You lost. Press ok to restart.')) {
      window.location = '/';
    }
    return;
  }
  window.requestAnimationFrame(main);
  const secondSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondSinceLastRender < 1 / SNAKE_SPEED) return;

  lastRenderTime = currentTime;

  update();
  draw();
}
window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
  checkDeath();
}
function draw() {
  empty(gameBoard);
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}

import { upArrow, downArrow, leftArrow, rightArrow } from './editDirection.js';

let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

window.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowUp':
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: -1 };
      break;
    case 'ArrowDown':
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: 1 };
      break;
    case 'ArrowLeft':
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: -1, y: 0 };
      break;
    case 'ArrowRight':
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: 1, y: 0 };
      break;
  }
});

upArrow.addEventListener('click', (e) => {
  if (lastInputDirection.y !== 0) {
    return;
  }
  inputDirection = { x: 0, y: -1 };
});
downArrow.addEventListener('click', (e) => {
  if (lastInputDirection.y !== 0) {
    return;
  }
  inputDirection = { x: 0, y: 1 };
});
leftArrow.addEventListener('click', (e) => {
  if (lastInputDirection.x !== 0) {
    return;
  }
  inputDirection = { x: -1, y: 0 };
});
rightArrow.addEventListener('click', (e) => {
  if (lastInputDirection.x !== 0) {
    return;
  }
  inputDirection = { x: 1, y: 0 };
});

export function getInputDirection() {
  lastInputDirection = inputDirection;
  return inputDirection;
}

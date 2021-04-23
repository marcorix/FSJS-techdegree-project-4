/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const qwerty = document.getElementById('qwerty');
const startBtn = document.getElementById('btn__reset');
let game;

startBtn.addEventListener('click', () => {
  game = new Game();
  game.resetGame();
  game.startGame();
});

qwerty.addEventListener('click', (e) => {
  game.handleInteraction(e);
});

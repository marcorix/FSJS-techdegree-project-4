/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const qwerty = document.getElementById('qwerty');
const startBtn = document.getElementById('btn__reset');
let game;

// Starts new game on click
startBtn.addEventListener('click', () => {
  game = new Game();
  game.resetGame();
  game.startGame();
});

// Set a listener to the entire div
qwerty.addEventListener('click', (e) => {
  // Call the method only if a button is clicked
  if (e.target.tagName === 'BUTTON') {
    game.handleInteraction(e.target);
  }
});

// Enable the computer keyboard
window.addEventListener('keydown', (e) => {
  // get the letter of the key pressed
  const keyLetter = e.key;
  const qwertyKeys = document.querySelectorAll('.key');
  qwertyKeys.forEach((key) => {
    if (key.textContent === keyLetter && key.disabled === false) {
      game.handleInteraction(key);
    }
  });
});

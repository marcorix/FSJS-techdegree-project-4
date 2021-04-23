/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
const screenOverlay = document.getElementById('overlay');
const hearts = document.querySelectorAll('img');
const ul = document.querySelector('#phrase ul');
const keys = document.querySelectorAll('.key');

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      'better late than never',
      'no pain no gain',
      'she is in the pink',
      'it is raining cats and dogs',
      'all i need is love',
    ];
    this.activePhrase = null;
  }

  getRandomPhrase() {
    const length = this.phrases.length;
    const index = Math.floor(Math.random() * length);
    return { phrase: this.phrases[index] };
  }

  startGame() {
    screenOverlay.style.display = 'none';
    const randomPhrase = this.getRandomPhrase();
    this.activePhrase = new Phrase(randomPhrase);
    this.activePhrase.addPhraseToDisplay();
  }

  checkForWin() {
    const hiddenLetters = document.querySelectorAll('.hide');
    if (hiddenLetters.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  removeLife() {
    hearts[hearts.length - 1 - this.missed].src = 'images/lostHeart.png';
    this.missed++;

    if (this.missed === 5) {
      this.gameOver(false);
    }
  }

  gameOver(gameWon) {
    screenOverlay.style.display = 'flex';
    const gameOverMessage = document.getElementById('game-over-message');
    if (gameWon) {
      gameOverMessage.textContent = 'You Won!';
      screenOverlay.classList.replace('start', 'win');
    } else {
      gameOverMessage.textContent = 'You Lose...';
      screenOverlay.classList.replace('start', 'lose');
    }
  }

  handleInteraction(e) {
    if (e.target.tagName === 'BUTTON') {
      const letterKey = e.target;
      letterKey.disabled = true;

      // check if the letter selected is in the phrase
      if (this.activePhrase.checkLetter(letterKey.textContent)) {
        letterKey.classList.add('wrong');
        this.activePhrase.showMatchedLetter(letterKey.textContent);
      } else {
        letterKey.classList.add('chosen');
        this.removeLife();
      }

      // Check for winners
      if (this.checkForWin()) {
        this.gameOver(true);
      }
    }
  }

  resetGame() {
    ul.innerHTML = '';

    keys.forEach((key) => key.classList.remove('chosen', 'wrong'));
    keys.forEach((key) => (key.disabled = false));

    hearts.forEach((img) => (img.src = 'images/liveHeart.png'));
  }
}

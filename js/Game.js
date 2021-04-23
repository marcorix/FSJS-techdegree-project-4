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
      {
        phrase: 'better late than never',
      },
      {
        phrase: 'no pain no gain',
      },
      {
        phrase: 'she is in the pink',
      },
      {
        phrase: 'it is raining cats and dogs',
      },
      {
        phrase: 'all i need is love',
      },
    ];
    this.activePhrase = null;
  }

  // this method returns a random number
  getRandomNumber(max) {
    let randomNumber = Math.floor(Math.random() * max);
    return randomNumber;
  }

  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    const randomNumber = this.getRandomNumber(this.phrases.length);
    const randomPhrase = this.phrases[randomNumber];

    return randomPhrase;
  }

  /**
   * Begins game by selecting a random phrase and displaying it to user
   */
  startGame() {
    // Hide the overlay
    screenOverlay.style.display = 'none';
    // Get a random phrase and initialize a new Phrase object as a Game property
    const randomPhrase = this.getRandomPhrase();
    this.activePhrase = new Phrase(randomPhrase.phrase);

    // Add the phrase to the display
    this.activePhrase.addPhraseToDisplay();
  }

  /**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
  checkForWin() {
    const hiddenLetters = document.querySelectorAll('.hide');
    const gameWon = hiddenLetters.length === 0 ? true : false;
    return gameWon;
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

  handleInteraction(keyButton) {
    //
    keyButton.disabled = true;

    // check if the letter selected is in the phrase
    if (this.activePhrase.checkLetter(keyButton.textContent)) {
      keyButton.classList.add('wrong');
      this.activePhrase.showMatchedLetter(keyButton.textContent);
    } else {
      keyButton.classList.add('chosen');
      this.removeLife();
    }

    // Check for winners
    if (this.checkForWin()) {
      this.gameOver(true);
    }
  }

  resetGame() {
    ul.innerHTML = '';

    keys.forEach((key) => key.classList.remove('chosen', 'wrong'));
    keys.forEach((key) => (key.disabled = false));

    hearts.forEach((img) => (img.src = 'images/liveHeart.png'));
  }
}

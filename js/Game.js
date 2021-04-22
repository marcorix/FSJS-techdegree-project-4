/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

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
    document.getElementById('overlay').style.display = 'none';
    const randomPhrase = this.getRandomPhrase();
    const phrase = new Phrase(randomPhrase);
    this.activePhrase = phrase;
    phrase.addPhraseToDisplay();
  }
}

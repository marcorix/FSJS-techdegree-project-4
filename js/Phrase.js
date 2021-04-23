/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  /**
   * Display phrase on game board
   */
  addPhraseToDisplay() {
    // create an array of characters from the phrase
    const characters = this.phrase.split('');

    let HTML = ``;

    // Creates a li for each characters
    characters.forEach((element) => {
      if (element !== ' ') {
        HTML += `<li class="hide letter ${element}">${element}</li>`;
      } else {
        HTML += `<li class="space"> </li>`;
      }
    });

    // Adds the HTML in the ul
    const ul = document.querySelector('#phrase ul');
    ul.innerHTML = HTML;
  }

  /**
   * Checks if passed letter is in phrase
   * @param (string) letter - Letter to check
   */
  checkLetter(letter) {
    const containsLetter = this.phrase.indexOf(letter) > -1 ? true : false;
    return containsLetter;
  }

  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */
  showMatchedLetter(letter) {
    // get all the li with a class name corresponding to the passed letter
    const letters = document.getElementsByClassName(letter);

    if (letters !== []) {
      // Replace the "hide" class name with "show"
      for (let i = 0; i < letters.length; i++) {
        const element = letters[i];
        element.classList.replace('hide', 'show');
      }
    }
  }
}

/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.phrase.toLowerCase();
  }

  addPhraseToDisplay() {
    // create an array of characters
    const charactersPhrase = this.phrase.split('');

    let phrase = ``;
    charactersPhrase.forEach((element) => {
      if (element !== ' ') {
        phrase += `<li class="hide letter ${element}">${element}</li>`;
      } else {
        phrase += `<li class="space"> </li>`;
      }
    });

    const ul = document.querySelector('#phrase ul');
    ul.innerHTML = phrase;
  }
}

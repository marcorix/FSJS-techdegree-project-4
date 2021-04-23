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

    let phraseHtml = ``;
    charactersPhrase.forEach((element) => {
      if (element !== ' ') {
        phraseHtml += `<li class="hide letter ${element}">${element}</li>`;
      } else {
        phraseHtml += `<li class="space"> </li>`;
      }
    });

    const ul = document.querySelector('#phrase ul');
    ul.innerHTML = phraseHtml;
  }

  checkLetter(letter) {
    if (this.phrase.indexOf(letter) > -1) {
      return true;
    } else {
      return false;
    }
  }

  showMatchedLetter(letter) {
    const letters = document.getElementsByClassName(letter);

    if (letters !== []) {
      for (let i = 0; i < letters.length; i++) {
        const element = letters[i];
        element.classList.replace('hide', 'show');
      }
    }
  }
}

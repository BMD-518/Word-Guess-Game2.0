'use strict';

// >>>>> GAME OBJECT
let game = {
  // >>>>> words to play
  angels: [
    'adam',
    'lilith',
    'sachiel',
    'shamshel',
    'ramiel',
    'gaghiel',
    'israfel',
    'sandalphon',
    'matarael',
    'sahaquiel',
    'ireul',
    'leliel',
    'bardiel',
    'zeruel',
    'arael',
    'armisael',
    'tabris',
    'lilin',
  ],

  // >>>>> CREATE ARRAY OF ALPHABET
  alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
  // console.log(alphabet[0]);

  gameIstarted: false,

  // >>>>> DOM DISPLAY VARIABLES
  directions: document.getElementById('game-directions'),
  word: document.getElementById('current-word'),

  // >>>>> GUESSES MADE
  guesses: 0,

  // >>>>> GUESSES REMAINING
  remainingGuesses: 10,
  remainingLetters: this.alphabet,
  // >>>>> GAME OBJECT METHODS
  showWord: function () {
    this.word.style.display = 'flex';
    this.directions.style.display = 'none';
  },
  getAngel: function (array, current) {
    current = array[0];
    console.log(current);
    this.word.textContent = current;
    this.showWord();
  },
};
// set word in play to array of characters

// PSEUDOCODE GAME OBJECT METHODS:
// begin game function
// display currentAngel as underscore characters
// capture user input (as lower case character, regardless of case)
// show guessed letters as having been pressed
// compare user guess to elements in currentAngel array

game.getAngel(game.angels);
// console.log(game.remainingLetters);

'use strict';

// >>>>> DOM DISPLAY VARIABLES
let directions = document.getElementById('game-directions');
let word = document.getElementById('current-word');

// >>>>> GAME OBJECT
let game = {
  // array of characters
  evaCharacters: {
    shinji: { picture: './', song: '' },
    rei: { picture: './', song: '' },
    asuka: { picture: './', song: '' },
    misato: { picture: './', song: '' },
    ritsuko: { picture: './', song: '' },
  },

  // initial variables
  currentCharacter: null,
  nameArray: [],
  userGuess: null,
  matchingLetters: [],
  guessedLetters: [],
  attemptsMade: 0,
  remainingAttempts: 0,
  // initiliaze game

  // write methods for game
  startGame: function () {
    let characterKeys = Object.keys(this.evaCharacters); // list of character names by plugging object keys into characterKeys variable

    // console.log(characterKeys);
    this.currentCharacter =
      characterKeys[Math.floor(Math.random() * characterKeys.length)]; // select random word from characterKeys, store it into currentCharacter variable.
    // console.log(this.currentCharacter);

    this.nameArray = this.currentCharacter.split(''); // convert characterKeys to an array of letters
    console.log(this.nameArray);
  },
};
game.startGame();

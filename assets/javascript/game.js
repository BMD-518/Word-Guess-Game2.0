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

  // >>>>> GAME METHODS
  // RUN GAME
  startGame: function () {
    let characterNames = Object.keys(this.evaCharacters); // list of character names by plugging object key values into characterNames variable

    // console.log(characterNames);
    this.currentCharacter =
      characterNames[Math.floor(Math.random() * characterNames.length)]; // select random word from characterNames, store it into currentCharacter variable.
    // console.log(this.currentCharacter);

    this.nameArray = this.currentCharacter.split(''); // convert characterNames to an array of letters
    console.log(this.nameArray);
    this.updateWordText(this.nameArray);
  },

  // UPDATE MATCHED LETTERS

  // UPDATING DOM
  updateWordText: function () {
    let wordText = ''; // empty string value
    // LOOP THROUGH ARRAY FOR GUESSED LETTERS
    for (let i = 0; i < this.nameArray.length; i++) {
      const element = this.nameArray[i];
      if (this.matchingLetters.indexOf(element) !== -1) {
        wordText += element;
      } else {
        wordText += ' _ ';
      }
    }
    document.getElementById('current-word').textContent = wordText;
  },
};
game.startGame();

// EVENT LISTENER FUNCTION
document.onkeydown = function (e) {
  // console.log(e.key);
  if (e.key.length === 1 && !/[^a-zA-Z]/.test(e.key)) {
    // alphabetic key validation using event.key
    // console.log('yup');
    game.userGuess = e.key.toUpperCase(); // assign game.userGuess to value of event.key
    document.getElementById('current-word').style.display = 'flex';
    document.getElementById('game-directions').style.display = 'none';
  } else {
    alert('Use keys a-z only!');
  }
};

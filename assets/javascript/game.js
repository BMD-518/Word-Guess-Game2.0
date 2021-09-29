'use strict';

// >>>>> DOM DISPLAY VARIABLES
let directions = document.getElementById('game-directions');
let word = document.getElementById('current-word');
let tries = document.getElementById('attempts-made');
let triesLeft = document.getElementById('remaining-attempts');

// >>>>> GAME OBJECT
let game = {
  // ARRAY OF CHARACTERS
  evaCharacters: {
    shinji: { picture: './', song: '' },
    rei: { picture: './', song: '' },
    asuka: { picture: './', song: '' },
    misato: { picture: './', song: '' },
    ritsuko: { picture: './', song: '' },
  },

  // INITIAL VARIABLES
  currentCharacter: null,
  nameArray: [],
  userGuess: null,
  matchingLetters: [],
  guessedLetters: [],
  totalAttempts: 0,
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
    this.updateWordElement(this.nameArray); // Display initial blank characters
    this.updateAttempts(); // Display guess counts
  },

  // UPDATE DOM
  updateDom: function (guess) {
    // update attempt count
    this.updateAttemptsData(guess);

    // update matched letters

    // update nameArray with updateWordElement (char or _.)
    this.updateWordElement(guess);
  },

  // UPDATE ATTEMPTS/REMAINING ATTEMPTS
  updateAttempts: function () {
    this.remainingAttempts = this.nameArray.length + 5;
    this.totalAttempts = this.totalAttempts;

    // ***** maybe move below line into another function, ISSUE: posting number of attempts before game actually starts. another issue being how the beginning of the game is actually initiated!!!!!
    triesLeft.textContent = 'Remaining Attempts: ' + this.remainingAttempts;
    tries.textContent = 'Attempts Made: ' + this.totalAttempts;
  },
  // HANDLE USER INPUT (WRONG GUESSES)
  updateAttemptsData: function (guess) {
    if (
      // check that guess is in neither guessedLetters or nameArray arrays
      this.guessedLetters.indexOf(guess) === -1 &&
      this.nameArray.indexOf(guess) === -1
    ) {
      this.guessedLetters.push(guess); //push guess into guessedLetters
      this.remainingAttempts--; // decrease remaining guesses by one

      // update dom data
      document.getElementById(guess).classList.add('incorrect');
      // document.getElementById('remaining').textContent =
    } else {
      for (let i = 0; i < this.nameArray.length; i++) {
        const element = this.nameArray[i];
        if (guess === element && this.matchingLetters.indexOf(guess) === -1) {
          this.matchingLetters.push(guess);
          document.getElementById(guess).classList.add('correct');
        }
      }
    }
  },

  // HANDLE USER INPUT (RIGHT GUESSES)

  // UPDATE WORD DISPLAY
  updateWordElement: function () {
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
    document.getElementById('current-word').textContent =
      wordText.toUpperCase();
  },
};

game.startGame();

// EVENT LISTENER FUNCTION
document.onkeydown = function (e) {
  // console.log(e.key);
  if (e.key.length === 1 && !/[^a-zA-Z]/.test(e.key)) {
    // alphabetic key validation using event.key
    // console.log('yup');
    illuminate(e.key);
    game.userGuess = e.key.toLowerCase(); // assign game.userGuess to value of event.key
    game.updateDom(game.userGuess); // pass to function to update dom

    // create function to handle all display: 'none' settings
    word.style.display = 'flex'; // Show current word
    directions.style.display = 'none'; // Hide directions
  } else {
    alert('Use keys a-z only!');
  }
};

// ILLUMINATE KEYS PRESSED FUNCTION
let illuminate = function (char) {
  document.getElementById(char).classList.add('pressed');
  setTimeout(function () {
    document.getElementById(char).classList.remove('pressed');
  }, 250);
  //
};

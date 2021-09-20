// words to play
const angels = [
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
];
let gameIsStarted = false;

let directions = document.getElementById('game-directions');
let word = document.getElementById('current-word');

// directions.style.display = 'none';
word.style.display = 'none';

let game = {
  // guesses made
  guesses: 0,
  // guesses remaining
  remainingGuesses: 10,
  // letters guessed
  remainingLetters: [],
  currentAngel: '',
  test: function (array) {
    currentAngel = array[0];
    console.log(currentAngel);
  },
};
game.test(angels);

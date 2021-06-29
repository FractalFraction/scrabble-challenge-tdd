// Load required modules to run the unit tests.
const Scrabble = require("../src/scrabble.js");
const assertEqual = require("../src/testing-framework");

//Initialise variables
let inputWord, expectedScore, actualScore;

// Setup 
console.log('Assigning an input to a word');
inputWord = 'word';
console.log('Creating a new instance of a Scrabble Class object');
const scrabbleWord = new Scrabble(inputWord);

// Exercise 
expectedScore = scrabbleWord.score();

// Verify
expectedScore = '' ;actualScore = scrabbleWord.score();

console.log(assertEqual(expectedScore,actualScore));

/* Imports */
// import { getRandomItem } from './utils.js';

/* State */
const gameState = 'guess';

/* Actions */
function loadPage() {
    displayShells();
}

/* Components */
/* Component */
let guess = 'guess-3';
// get DOM
const shellOne = document.getElementById('shell-1');
const shellTwo = document.getElementById('shell-2');
const shellThree = document.getElementById('shell-3');
const pearlOne = document.getElementById('pearl-1');
const pearlTwo = document.getElementById('pearl-2');
const pearlThree = document.getElementById('pearl-3');

const guessDiv = document.getElementById('guesses');
const resultDiv = document.getElementById('results');
const playAgainBtn = document.getElementById('play-again-button');
const guessOne = document.getElementById('guess-1');
const guessTwo = document.getElementById('guess-2');
const guessThree = document.getElementById('guess-3');
const playAgain = document.getElementById('play-again-button');
const winsDisplay = document.getElementById('wins-display');
const lossDisplay = document.getElementById('losses-display');
const totalDisplay = document.getElementById('total-display');
// display
function displayShells() {
    shellOne.classList.remove('reveal');
    shellTwo.classList.remove('reveal');
    shellThree.classList.remove('reveal');
    pearlOne.classList.add('hidden');
    pearlTwo.classList.add('hidden');
    pearlThree.classList.add('hidden');
    resultDiv.classList.add('hidden');
}
// event listeners

guessOne.addEventListener('click', () => {
    guess = 'guess-1';
    console.log('hi');
});
guessTwo.addEventListener('click', () => {
    guess = 'guess-2';
});
guessThree.addEventListener('click', () => {
    guess = 'guess-3';
});

/* Run page load code */
loadPage();
displayShells();

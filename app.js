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

// display
function displayShells() {
    console.log('running');
    if (gameState === 'guess') {
        shellOne.classList.remove('reveal');
        shellTwo.classList.remove('reveal');
        shellThree.classList.remove('reveal');
        resultDiv.classList.add('hidden');
    } else {
    }
}

// event listeners

/* Run page load code */
loadPage();

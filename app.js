/* Imports */
// import { getRandomItem } from './utils.js';

/* State */
let gameState = 'guess';
let guess = 'guess-3';

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
    makePlay('shell-1');
});
guessTwo.addEventListener('click', () => {
    makePlay('shell-2');
});
guessThree.addEventListener('click', () => {
    makePlay('shell-3');
});

/* Run page load code */
loadPage();
displayShells();

function makePlay(playerChoice) {
    gameState = 'results';
    guess = playerChoice;
    displayChoice();
}

function displayChoice() {
    if (gameState === 'results') {
        if (guess === 'shell-1') {
            shellOne.classList.add('reveal');
        } else if (guess === 'shell-2') {
            shellTwo.classList.add('reveal');
        } else if (guess === 'shell-3') {
            shellThree.classList.add('reveal');
        }
    }
}

/* Imports */
import { getRandomItem } from './utils.js';

/* State */
let gameState = 'guess';
let guess = 'guess-3';
let comChoiceArray = ['guess-1', 'guess-2', 'guess-3'];
let comChoice = getRandomItem(comChoiceArray);

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
    guessDiv.classList.remove('hidden');
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

playAgainBtn.addEventListener('click', () => {
    displayShells();
});

/* Run page load code */
loadPage();
displayShells();

function makePlay(playerChoice) {
    gameState = 'results';
    guess = playerChoice;
    comChoice = getRandomItem(comChoiceArray);
    displayChoice();
    displayComChoice();
}

function displayChoice() {
    if (gameState === 'results') {
        guessDiv.classList.add('hidden');
        resultDiv.classList.remove('hidden');
        if (guess === 'shell-1') {
            shellOne.classList.add('reveal');
        } else if (guess === 'shell-2') {
            shellTwo.classList.add('reveal');
        } else if (guess === 'shell-3') {
            shellThree.classList.add('reveal');
        }
    }
}

function displayComChoice() {
    if (gameState === 'results') {
        if (comChoice === 'guess-1') {
            shellOne.classList.add('reveal');
            pearlOne.classList.remove('hidden');
        } else if (comChoice === 'guess-2') {
            shellTwo.classList.add('reveal');
            pearlTwo.classList.remove('hidden');
        } else if (comChoice === 'guess-3') {
            shellThree.classList.add('reveal');
            pearlThree.classList.remove('hidden');
        }
    }
}

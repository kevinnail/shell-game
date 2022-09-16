/* Imports */
import { getRandomItem } from './utils.js';

/* State */
let gameState = 'guess';
let guess = '';

// computer shell choice
let comChoiceArray = ['shell-1', 'shell-2', 'shell-3'];
let comChoice = getRandomItem(comChoiceArray);

// scoreboard
let playerWins = 0;
let playerLosses = 0;

/* Actions */
function loadPage() {
    displayShells();
}

function makePlay(playerChoice) {
    gameState = 'results';
    guess = playerChoice;
    comChoice = getRandomItem(comChoiceArray);
    displayChoice();
    displayComChoice();
    checkWinner(guess, comChoice);
    displayScoreboard();
}
/* Components */
/* Component */

// get DOM
// shells and pearls
const shellOne = document.getElementById('shell-1');
const shellTwo = document.getElementById('shell-2');
const shellThree = document.getElementById('shell-3');
const pearlOne = document.getElementById('pearl-1');
const pearlTwo = document.getElementById('pearl-2');
const pearlThree = document.getElementById('pearl-3');

// guesses and result display elements
const guessDiv = document.getElementById('guesses');
const resultDiv = document.getElementById('results');

// buttons
const playAgainBtn = document.getElementById('play-again-button');
const guessOne = document.getElementById('guess-1');
const guessTwo = document.getElementById('guess-2');
const guessThree = document.getElementById('guess-3');

// scoreboard
const winsDisplay = document.getElementById('wins-display');
const lossDisplay = document.getElementById('losses-display');
const totalDisplay = document.getElementById('total-display');

// "You found it"/ "Not here" message to player
const displayOne = document.getElementById('display-1');
const displayTwo = document.getElementById('display-2');
const displayThree = document.getElementById('display-3');

// display
function displayShells() {
    gameState = 'guess';
    shellOne.classList.remove('reveal');
    shellTwo.classList.remove('reveal');
    shellThree.classList.remove('reveal');
    pearlOne.classList.add('hidden');
    pearlTwo.classList.add('hidden');
    pearlThree.classList.add('hidden');
    resultDiv.classList.add('hidden');
    guessDiv.classList.remove('hidden');
    displayOne.textContent = '';
    displayTwo.textContent = '';
    displayThree.textContent = '';
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
        if (comChoice === 'shell-1') {
            shellOne.classList.add('reveal');
            pearlOne.classList.remove('hidden');
        } else if (comChoice === 'shell-2') {
            shellTwo.classList.add('reveal');
            pearlTwo.classList.remove('hidden');
        } else if (comChoice === 'shell-3') {
            shellThree.classList.add('reveal');
            pearlThree.classList.remove('hidden');
        }
    }
}

function checkWinner(playerChoice, comChoice) {
    resultDiv.classList.remove('hidden');
    switch (playerChoice) {
        case 'shell-1':
            if (comChoice === playerChoice) {
                displayOne.textContent = 'Found it!';
                playerWins++;
            } else {
                displayOne.textContent = 'Not here!!';
                playerLosses++;
            }
            break;
        case 'shell-2':
            if (comChoice === playerChoice) {
                displayTwo.textContent = 'Found it!';
                playerWins++;
            } else {
                displayTwo.textContent = 'Not here!!';
                playerLosses++;
            }
            break;
        case 'shell-3':
            if (comChoice === playerChoice) {
                displayThree.textContent = 'Found it!';
                playerWins++;
            } else {
                displayThree.textContent = 'Not here!!';
                playerLosses++;
            }
            break;
    }
}

function displayScoreboard() {
    if (gameState === 'guess') {
        winsDisplay.textContent = 0;
        lossDisplay.textContent = 0;
        totalDisplay.textContent = 0;
    } else {
        winsDisplay.textContent = playerWins;
        lossDisplay.textContent = playerLosses;
        totalDisplay.textContent = playerWins + playerLosses;
    }
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

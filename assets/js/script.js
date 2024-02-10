//Adding strict statement as suggested by JSHint
"use strict";

// Import words and hints from seperate js-file
import { words, hints } from "./words.js";

//Declare variables
let currentAttempts = 0;
const MAX_ATTEMPTS = 2;

let wordsPlayed = 0;
const MAX_WORDS = 20;

let originalWord;
let randomWord;
let randomHint;

/* Copies of the arrays to that they don't get depleted */
let wordsCopy = [...words];
let hintsCopy = [...hints];


/* Function to generate a random word and 
*corresponding hint from the words array */

function RandomWordAndHint() {

    /* Generating a random word and hint from the arrays with Math.random and Math.floor (ref. see README) */

    let randomIndex = Math.floor(Math.random() * wordsCopy.length);

    /* Remove the used/choosen word and corresponding hint 
    *from the array so it doesn't load twice
    /* Using the splice */

    randomWord = wordsCopy[randomIndex];
    randomHint = hintsCopy[randomIndex];

    wordsCopy.splice(randomIndex, 1);
    hintsCopy.splice(randomIndex, 1);

    originalWord = randomWord;

    return { randomWord, randomHint };
}

console.log(RandomWordAndHint());

//Function to scramble the letters in the word
//Using split and join, and Fisher-Yates shuffle algorythm

function scrambleWord(word) {
    let characters = word.split('');

    //Fisher-Yates shuffle
    for (let i = characters.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [characters[i], characters[j]] = [characters[j], characters[i]];
    }
    return characters.join('');
}

// Function to start game 

function startGame() {
    /* Hiding play-again button */
    document.getElementById('play-again').style.display = 'none';
    document.getElementById('game-end').innerText = '';
    document.getElementById('player-input').value = '';
    enableCheckButton();
    resetNewWordButton();

    currentAttempts = 0;

    /* Get a new word */
    let { randomWord } = RandomWordAndHint();
    let scrambledWord = scrambleWord(randomWord);

    /* Updating the html with generated word with 
    *getElement and template literals */
    document.getElementById('scrambled-word').innerText = `${scrambledWord}`;

    /* Incrementing the words played */
    wordsPlayed++;

    /* If the words played has reached the maxno.*/
    if (wordsPlayed > MAX_WORDS) {
        endGame();

        document.getElementById('new-word').disabled = true;
        disableCheckButton();

        /* Displaying play again button after game has ended */
        document.getElementById('play-again').style.display = 'block';
    }
}

/* Function to initialise game --> start game */

function initialiseGame() {
    alert('Ready to play? Two tries for each word and twenty words in each game. How many can you get right? Click OK and the first word will load. GOOD LUCK ');
    startGame();
}
document.addEventListener("DOMContentLoaded", function () {

    //EventListeners for buttons
    document.getElementById('check-answer').addEventListener('click', checkAnswer);
    document.getElementById('new-word').addEventListener('click', startGame);
    document.getElementById('play-again').addEventListener('click', resetGame);
    initialiseGame();
});

/* Separate function to handle the game in-round/attempts */

function handleRound() {

    if (currentAttempts < MAX_ATTEMPTS) {
        alert('That is incorrect! Try again!');
        currentAttempts++;
        document.getElementById('hint').textContent = randomHint;
       

    } else if (currentAttempts >= MAX_ATTEMPTS) {
        alert(`Incorrect! The correct answer is: ${originalWord}`);
        disableCheckButton();
        changeButtonColor();
        document.getElementById('player-input').value = '';
    }

    if (wordsPlayed >= MAX_WORDS && currentAttempts >= MAX_ATTEMPTS) {
        endGame();

        document.getElementById('new-word').disabled = true;
        disableCheckButton();

        /* Displaying play again button after game has ended */
        document.getElementById('play-again').style.display = 'block';
    }
}

/* Change the colour of the New word button 
*(adapted from Stackoverflow, ref. in README) */
function changeButtonColor() {
    let button = document.getElementById('new-word');
    let newColor = 'var(--orange)';
    let textColor = 'var(--dark-blue)';

    button.style.background = newColor;
    button.style.color = textColor;
}

/* Function to reset button colour and the hint 
*(adapted from Stackoverflow, ref. in README) */

function resetNewWordButton() {
    document.getElementById('new-word').style.background = 'var(--dark-blue)';
    document.getElementById('new-word').style.color = '#ffffff';
    document.getElementById('hint').textContent = '';
}

/* Functions to disable and enable check answer button 
*(adapted from Stackoverflow, ref. in README) */

function disableCheckButton() {
    document.getElementById('check-answer').disabled = true;
}

function enableCheckButton() {
    document.getElementById('check-answer').disabled = false;
}

/* Checking the players answer by comparing the original word with player 
*input(Adapted from Love Maths and www.geeksforgeeks.org) */

function checkAnswer() {
    document.getElementById('hint').textContent = randomHint;

    /* Check player input against original word
    *Let player know answer is correct, else back to handleRound()
    *Provide correct answer on second attempt
    *Adapted from Love Maths */
    let playerInput = document.getElementById('player-input').value.toLowerCase();
    let isCorrect = playerInput === originalWord.toLowerCase();

    if (isCorrect) {
        alert('Congratulations, you got it right!');
        keepScore();
        document.getElementById('player-input').value = '';
        changeButtonColor();
        disableCheckButton();
        currentAttempts = 0;

    } else {
        handleRound();
        currentAttempts++;
    }

    if (wordsPlayed >= MAX_WORDS && currentAttempts < MAX_ATTEMPTS) {
        endGame();

        document.getElementById('new-word').disabled = true;
        disableCheckButton();

        /* Displaying play again button after game has ended */
        document.getElementById('play-again').style.display = 'block';
    }
}

/* Gets the currect score from the DOM 
*and increments it (Adapted from Love Maths) */
function keepScore() {
    let currentScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++currentScore;
}

/* Function to handle end of game (adapted from above function) */
function endGame() {
    let currentScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('game-end').innerText = (`Game End! Your score is: ${currentScore}`);
    document.getElementById('scrambled-word').innerText = ('Thank you for playing!');
    document.getElementById('hint').textContent = '';
}

/* Reseting when the game has ended so a new game can be 
*started by clicking play-again button */
function resetGame() {
    document.getElementById('score').innerText = '0';
    wordsPlayed = 0;
    currentAttempts = 0;
    document.getElementById('new-word').disabled = false;
    document.getElementById('new-word').style.background = 'var(--dark-blue)';
    document.getElementById('player-input').value = '';
    wordsCopy = [...words];
    hintsCopy = [...hints];
    startGame();
}

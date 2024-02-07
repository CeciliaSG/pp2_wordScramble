// Import words and hints from seperate js-file
import { words, hints } from "./words.js";

//Declare variables
let currentAttempts = 0;
const MAX_ATTEMPTS = 2;

let wordsPlayed = 0;
const MAX_WORDS = 3;

let originalWord;
let randomWord;
let randomHint;

//EventListeners
document.getElementById('check-answer').addEventListener('click', checkAnswer);
document.getElementById('new-word').addEventListener('click', startGame);
document.getElementById('play-again').addEventListener('click', resetGame);

/* Add function to generate a random word and corresponding hint from the words array */

function generateRandomWordAndHint() {

    /* Copy of the arrays */
    let wordsCopy = [...words];
    let hintsCopy = [...hints];

    console.log("Original words:", wordsCopy);
    console.log("Original hints:", hintsCopy);

    /* Generating a random word and hint from the array */

    let randomIndex = [Math.floor(Math.random() * wordsCopy.length)];
    //let randomHintIndex = [Math.floor(Math.random() * hintsCopy.length)];

    console.log("Word index:", randomIndex);
    console.log("Hint index:", randomIndex);

    //Remove the used/choosen word and correspongind hint from the array so it doesn't load twice
    //Using the splice method.

    let randomWord = wordsCopy[randomIndex];
    let randomHint = hintsCopy[randomIndex];

    console.log('1', randomWord);
    console.log('1', randomHint);

    wordsCopy.splice(randomIndex, 1);
    hintsCopy.splice(randomIndex, 1);


    originalWord = randomWord;

    return { word: randomWord, hint: randomHint };
}

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

// Function to start game, calling generateRandomWordAndHint() and scrambleWord(). 

function startGame() {
    /* Hiding play-again button */
    document.getElementById('play-again').style.display = 'none';
    document.getElementById('game-end').innerText = '';
    enableCheckButton();
    resetNewWordButton();

    currentAttempts = 0;

    /* Get a new word only if the game is not over */
    let { word: randomWord, hint: randomHint } = generateRandomWordAndHint();
    let scrambledWord = scrambleWord(randomWord);


    //Updating the html with generated word with getElement and template literals
    document.getElementById('scrambled-word').innerText = `${scrambledWord}`;

    /* Incrementing the words played */
    wordsPlayed++;

    /* If the words played has reached the maxno. */
    if (wordsPlayed > MAX_WORDS) {
        endGame();

        document.getElementById('new-word').disabled = true;

        /* Displaying play again button after game has ended */
        document.getElementById('play-again').style.display = 'block';
    }
}

/* Function to initialise game --> start game */

function initialiseGame() {
    alert('Ready to play? Two tries for each word and twenty words in each game. How many can you get right? GOOD LUCK ')
    startGame();
}
document.addEventListener("DOMContentLoaded", function () {
    initialiseGame();
});

//Separate function to handle the game in-round/attempts

function handleRound() {
    document.getElementById('player-input').value = '';

    if (currentAttempts < MAX_ATTEMPTS) {
        alert('That is incorrect!');
        currentAttempts++;
        document.getElementById('hint').textContent = randomHint;

    } else if (currentAttempts >= MAX_ATTEMPTS) {
        alert(`Incorrect! The correct answer is: ${originalWord}`);
        changeButtonColor();

        /* This not working */
    } else if (currentAttempts >= MAX_ATTEMPTS && wordsPlayed >= MAX_WORDS){
        endGame();
    }
}

/* Change the colour of the New word button */
function changeButtonColor() {
    let button = document.getElementById('new-word');
    let newColor = 'var(--orange)';

    // Check how to write this better
    button.style.background= newColor;
}

/* Function to reset button colour and hint */

function resetNewWordButton() {
    document.getElementById('new-word').style.background = 'var(--dark-blue)';
    document.getElementById('hint').textContent = '';
}

/* Functions to disable and enable check answer button */

function disableCheckButton() {
    document.getElementById('check-answer').disabled = true;
}

function enableCheckButton() {
    document.getElementById('check-answer').disabled = false;
}

/* Checking the players answer by comparing newWord with player input */

function checkAnswer() {

    originalWord = randomWord;
    document.getElementById('hint').textContent = randomHint;

    //Check player input against original word
    // Let player know answer is incorrect 
    //Provide correct answer on second attempt
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
}

/* Gets the currect score from the DOM and increments it */
function keepScore() {
    let currentScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++currentScore;
}

/* Function to handle end of game */
function endGame() {
    let currentScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('game-end').innerText = (`Game End! Your score is: ${currentScore}`);
}

/* Reseting when the game has ended so a new game can be played */
function resetGame() {
    document.getElementById('score').innerText = '0';
    wordsPlayed = 0;
    currentAttempts = 0;
    document.getElementById('new-word').disabled = false;
    document.getElementById('new-word').style.background = 'var(--dark-blue)';
    startGame();
}

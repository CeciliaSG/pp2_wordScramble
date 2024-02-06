// Import words from seperate js-file
import words from "./words.js";
import { leaderboard } from "./leaderboardData.js";

//Declare variables
let currentAttempts = 0;
const MAX_ATTEMPTS = 3;

let wordsPlayed = 0;
const MAX_WORDS = 3;

let originalWord;
let randomWord;

//EventListeners
document.getElementById('check-answer').addEventListener('click', checkAnswer);
document.getElementById('new-word').addEventListener('click', startGame);
document.getElementById('play-again').addEventListener('click', resetGame);

//Add funtion to generate a random word from the words array

function generateRandomWord() {
    let randomIndex = [Math.floor(Math.random() * words.length)];

    //Remove the used/choosen words from the array so it doesn't load twice
    //Using the splice method.

    randomWord = words[randomIndex];
    words.splice(randomIndex, 1);

    originalWord = randomWord;

    console.log(randomWord);
    console.log(originalWord);

    return randomWord;
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

// Function to initiate game, calling generateRandomWord() and scrambleWord(). 

function startGame() {
    document.getElementById('play-again').style.display = 'none';
    document.getElementById('result').innerText = '';
    enableCheckButton();
    resetCheckButtonColor();

    currentAttempts = 0;

    /* Get a new word only if the game is not over */
    let randomWord = generateRandomWord();
    let scrambledWord = scrambleWord(randomWord);

    //Updating the html with getElement and template literals
    document.getElementById('scrambled-word').innerText = `${scrambledWord}`;

    /* Incrementing the words played */
    wordsPlayed++;

    /* If the words played has reached the maxno. */

    if (wordsPlayed > MAX_WORDS) {
        endGame();

        document.getElementById('new-word').disabled = true;

        /* Play again button */
        document.getElementById('play-again').style.display = 'block';
    }
}

function initialiseGame() {
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
        //document.getElementById('result').innerText = 'That is incorrect!';
        currentAttempts++;
       
    } else if (currentAttempts >= MAX_ATTEMPTS) {
        alert(`Incorrect! The correct answer is: ${originalWord}`);
        // document.getElementById('result').innerText = `Incorrect! The correct answer is: ${originalWord}`;
        changeButtonColor();
    }
}

function changeButtonColor() {
    let button = document.getElementById('new-word');
    let currentColor = window.getComputedStyle(button).getPropertyValue('var(--orange)');
    let newColor = 'var(--orange)';

    /*if(newColor === 'var(--orange)') {
        currentColor = '';
    } */
    // Check how to write this better
    button.style.backgroundColor = newColor;
}

function resetCheckButtonColor(){
    document.getElementById('new-word').style.background = 'var(--dark-blue)';
}

function disableCheckButton(){
    document.getElementById('check-answer').disabled = true;
}

function enableCheckButton(){
    document.getElementById('check-answer').disabled = false;
}

//Checking the players answer by comparing newWord with player input

function checkAnswer() {

    let originalWord = randomWord;

    //Check player input against original word
    // Let player know answer is incorrect 
    //Provide correct answer on third attempt
    let playerInput = document.getElementById('player-input').value.toLowerCase();
    let isCorrect = playerInput === originalWord.toLowerCase();

    console.log(originalWord);
    console.log(playerInput);

    if (isCorrect) {
        alert('Congratulations, you got it right!');
        //document.getElementById('result').innerText = 'Congratulations, you got it right!';
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

// Function to handle end of game
function endGame() {
    let currentScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('result').innerText = (`Game End! Your score is: ${currentScore}`);
    console.log("Inside endGame function");
}

/* Reseting the when it is ended */
function resetGame() {
    document.getElementById('score').innerText = '0';
    wordsPlayed = 0;
    currentAttempts = 0;
    document.getElementById('new-word').disabled = false;
    document.getElementById('new-word').style.background = 'var(--dark-blue)';
    startGame();
}

/* Leaderboard */
function displayLeaderboard(data) {
    let table = document.getElementById('leaderboardBody');

    table.innerHTML = '';

    for (let i = 0; i < data.length; i++) {
        let row = `<tr>
        <th>${data[i].name}</th>
         <th>${data[i].score}</th>
         </tr>`;

        table.innerHTML += row;
    }
}
displayLeaderboard(leaderboard);

function addPlayerToLeaderBoard(playerName, initialsScore = 0) {
    leaderboard.push({ name: playerName, score: initialsScore });
}

addPlayerToLeaderBoard('NewPlayer', 30);

console.log(leaderboard);

// Import words and hints from seperate js-file
import { words, hints } from "./words.js";

//import { leaderboard } from "./leaderboardData.js";

//Declare variables
let currentAttempts = 0;
const MAX_ATTEMPTS = 3;

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

    /* Copies of the arrays */
    let wordsCopy = [...words];
    let hintsCopy = [...hints];

    let randomWordIndex = [Math.floor(Math.random() * wordsCopy.length)];
    let randomHintIndex = [Math.floor(Math.random() * hintsCopy.length)];

    //Remove the used/choosen word and correspongind hint from the array so it doesn't load twice
    //Using the splice method.

    randomWord = wordsCopy[randomWordIndex];
    randomHint = hintsCopy[randomHintIndex];
    wordsCopy.splice(randomWordIndex, 1);
    hintsCopy.splice(randomHintIndex, 1);

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
    document.getElementById('play-again').style.display = 'none';
    document.getElementById('result').innerText = '';
    enableCheckButton();
    resetNewWordButton();

    currentAttempts = 0;

    /* Get a new word only if the game is not over */
    let { word: randomWord, hint: randomHint } = generateRandomWordAndHint();
    let scrambledWord = scrambleWord(randomWord);
    console.log('2', randomHint);

    //Updating the html with gnerated word with getElement and template literals
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

/* Function to initialise game --> start game */

function initialiseGame() {
    alert('Ready to play? Three tries for each word and twenty words in each game. How many can you get right? GOOD LUCK ')
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
    button.style.backgroundColor = newColor;
}

/* Function to reset button colour and hint */

function resetNewWordButton() {
    document.getElementById('new-word').style.background = 'var(--dark-blue)';
    document.getElementById('hint').textContent = '';
}

/* Functions to disable and enable chack answer button */

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

/* Function to handle end of game */
function endGame() {
    let currentScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('result').innerText = (`Game End! Your score is: ${currentScore}`);
    console.log("Inside endGame function");
}

/* Reseting when the game has ended */

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

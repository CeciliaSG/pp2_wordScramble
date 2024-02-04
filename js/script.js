
// Import words from seperate js-file
import words from "./words.js";

//Declare variables
let currentAttempts = 0;
let maxAttempts = 1;
let attemptsRemaining = maxAttempts;

let wordsPlayed = 0;
let maxWords = 3;

let originalWord;
let randomWord;

//EventListeners
document.getElementById('check-answer').addEventListener('click', checkAnswer);
document.getElementById('new-word').addEventListener('click', startGame);
document.getElementById('play-again').addEventListener('click', startGame);

//Add funtion to generate a random word from the words array

function generateRandomWord() {
    let randomIndex = [Math.floor(Math.random() * words.length)];

    //Remove the used/choosen words from the array so it doesn't load twice
    //Using the splice method. Searched Stack Overflow for solution. 
    //Splice not working. Need to find solution. 
    //Probably has to do with import of words.

    randomWord = words.splice(randomIndex, 1)[0];
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

    /*Get a new word only if the game is not over */
    let randomWord = generateRandomWord();
    let scrambledWord = scrambleWord(randomWord);

    //Updating the html with getElement and template literals
    document.getElementById('scrambled-word').innerText = `${scrambledWord}`;

    /* Incrementing the words played */
    wordsPlayed++;

    if (wordsPlayed === maxWords -1) {
        endGame();
        /* Play again button */
        document.getElementById('play-again').style.display = 'block';

    }

}

startGame();

//Separate function to handle the game in-round/attempts

function handleRound() {
    document.getElementById('player-input').value = '';

    if (currentAttempts < maxAttempts) {
        alert('That is incorrect!');
        //document.getElementById('result').innerText = 'That is incorrect!';
        currentAttempts++;
    } else if (currentAttempts === maxAttempts) {
        alert(`Incorrect! The correct answer is: ${originalWord}`);
        // document.getElementById('result').innerText = `Incorrect! The correct answer is: ${originalWord}`;
    }
}

/*function startNewRound() {
    currentAttempts = 0;

    //Get a new word
    let randomWord = generateRandomWord();
    let scrambledWord = scrambleWord(randomWord);

    //Updating the html with getElement and template literals
    document.getElementById('scrambled-word').innerText = `${scrambledWord}`;
    //let playerInput = document.getElementById('player-input');

    //Should clear the result for the next round
    //This is not working
    document.getElementById('result').innerText = '';
} */

//Checking the players answer by comparing newWord with player input

function checkAnswer() {

    let originalWord = randomWord;

    //Check player input against original word
    // Let player know answer is incorrect 
    //Provide correct answer on third attempt
    //let newWord = document.getElementById('scrambled-word').innerText;
    let playerInput = document.getElementById('player-input').value.toLowerCase();
    let isCorrect = playerInput === originalWord.toLowerCase();

    console.log(originalWord);
    console.log(playerInput);

    if (isCorrect) {
        alert('Congratulations you got it right!');
        //document.getElementById('result').innerText = 'Congratulations you got it right!';
        keepScore();
        document.getElementById('player-input').value = '';
    } else
        handleRound();
}

/* Gets the currect score from the DOM and increments it */
function keepScore() {
    let currentScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++currentScore;
}

// Function to handle end of game
function endGame() {
    let currentScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('result').innerText = (`Game over! Your score is: ${currentScore}`);
    console.log("Inside endGame function");
}


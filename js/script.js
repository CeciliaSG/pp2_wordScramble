
// Import words from seperate js-file
import words from "./words.js";

//Declare variables
let currentAttempts = 0;
let maxAttempts = 3;

//Add funtion to generate a random word from the words array

function generateRandomWord() {
    let randomIndex = words[Math.floor(Math.random() * words.length)];

    //Remove the used/choosen words from the array so it doesn't load twice
    //Using the splice method. Searched Stack Overflow for solution. 
    //Splice not working. Need to find solution. 
    //Probably has to do with import of words.

    let randomWord = words.splice(randomIndex, 1)[0];

    return randomWord;
}
let randomWord = generateRandomWord();

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

let scrambled = scrambleWord(randomWord);

// Function to initiate game, calling generateRandomWord() and scrambleWord(). 

function startGame() {

    //Get a new word
    let newWord = generateRandomWord();
    let scrambled = scrambleWord(newWord);

    //Updating the html with getElement and template literals

    document.getElementById('scrambled-word').innerText = `${scrambled}`;
    let playerInput = document.getElementById('player-input');

    //Should clear the result for the next round
    document.getElementById('result').innerText = '';

    //Clear input field after each round
    playerInput.value = '';
}

startGame();

//Checking the players answer by comparing newWord with users input

function checkAnswer() {

    //Solution from stack overflow

    let newWord = document.getElementById('scrambled-word').innerText.split(': ')[1];

    //Check player input against original word
    // let player know answer is incorrect 
    //Provide correct answer on third attempt
    let scrambled = document.getElementById('scrambled-word').innerText;
    let playerInput = document.getElementById('player-input').value.toLowerCase();

    if (playerInput === newWord) {
        document.getElementById('result').innerText = 'Congratulations you got it right!';

    } else if (currentAttempts < maxAttempts - 1) {
        document.getElementById('result').innerText = 'incorrect';
        currentAttempts++;
    } else {
        document.getElementById('result').innerText = `Incorrect! The correct answer is: ${newWord}`;
        
        startGame();
    }

}

document.getElementById('check-answer').addEventListener('click', checkAnswer);
document.getElementById('new-word').addEventListener('click', startGame);

startGame();

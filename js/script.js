
// Import words from seperate js-file
import words from "./words.js";

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

    //Clear input field after each round

    playerInput.value = '';
}

startGame();

//Checking the players answer by comparing newWord with users input

function checkAnswer() {

    //Solution from stack overflow

    let newword = document.getElementById('scrambled-word').innerText.split(': ')[1];

    let scrambledWordText = document.getElementById('scrambled-word').innerText;
    console.log(scrambledWordText);

}

checkAnswer();

// Import words from seperate js-file
import words from "./words.js"

//Add funtion to gnerate a random word from the word array

function generateRandomWord(){
   let randomWord = words[Math.floor(Math.random() * words.length)];
   return randomWord;
}

console.log(generateRandomWord());

function scrambleWord(){

}

function startGame(){

}

function checkAnswer(){
    
}
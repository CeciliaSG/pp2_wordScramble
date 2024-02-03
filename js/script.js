
// Import words from seperate js-file
import words from "./words.js"

let words=[];

//Add funtion to gnerate a random word from the word array

function generateRandomWord(){
    return words[Math.floor(Math.random() * words.length)];
    
    console.log(generateRandomWord());
}

function scrambleWord(){

}

function startGame(){

}

function checkAnswer(){
    
}
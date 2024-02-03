
// Import words from seperate js-file
import words from "./words.js"

//Add funtion to generate a random word from the word array

function generateRandomWord(){
   let randomIndex = words[Math.floor(Math.random() * words.length)];

    //Remove the used/choosen words from the array so it doesn't load twice
   //Using the splice method. Searched Stack Overflow for solution

   let randomWord = words.splice(randomIndex, 1)[0];
   return randomWord;
}
generateRandomWord();



function scrambleWord(){

}

function startGame(){

}

function checkAnswer(){
    
}
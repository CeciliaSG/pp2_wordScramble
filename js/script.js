
// Import words from seperate js-file
import words from "./words.js"

//Add funtion to generate a random word from the word array

function generateRandomWord(){
   let randomIndex = words[Math.floor(Math.random() * words.length)];

    //Remove the used/choosen words from the array so it doesn't load twice
   //Using the splice method. Searched Stack Overflow for solution. 
   //Splice not working. Need to find solution.

   let randomWord = words.splice(randomIndex, 1)[0];

    console.log(words);
    console.log("Remaining words:", words);
    console.log("Number of words after:", words.length);

   return randomWord;
}
generateRandomWord();
console.log("Remaining words:", words);
console.log("Number of words after:", words.length);



function scrambleWord(){

}

function startGame(){

}

function checkAnswer(){
    
}
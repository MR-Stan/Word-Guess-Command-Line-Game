const Letter = require("./letter.js");

// constructor used to define current word being guessed
function Word(word) {
    // stores word
    this.word = word;
    // array of letters in word
    this.letters = [];
    // returns a string representation of the word
    this.splitString() {
        let newLetter = "";
        // splits word into array of letters in word
        let letterArray = this.word.split("");
        for (let i = 0; i < letterArray.length; i++) {
            newLetter = new Letter(letterArray[i]);
            // adds letters to array
            this.letters.push(newLetter);
            console.log(this.letters);
        }
    }
    // takes a character as an argument and calls the guess function on each letter object
    this.makeGuess(guess) {
        // forEach letter in this.letters call checkCharacter(guess) method in letter file
    }
}


module.exports = Word;


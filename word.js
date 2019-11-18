const Letter = require(".letter.js");

// constructor used to define current word being guessed
function Word(word) {
    // 
    this.word = word;
    // array of letters in word
    this.letters = [];
    // returns a string representation of the word
    this.makeString() {

    }
    // takes a character as an argument and calls the guess function on each letter object
    this.makeGuess(guess) {
        // forEach letter in this.letters call checkCharacter(guess) method in letter file
    }
}


module.exports = Word;
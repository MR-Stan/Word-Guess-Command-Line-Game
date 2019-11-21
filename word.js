const Letter = require("./letter.js");

// constructor used to define current word being guessed
function Word(word) {
    // stores word
    this.word = word;
    // array of letters in word
    this.letters = [];
    // returns a string representation of the word
    this.splitString = function () {
        let newLetter = "";
        // splits word into array of letters in word
        let letterArray = this.word.split("");
        for (let i = 0; i < letterArray.length; i++) {
            newLetter = new Letter(letterArray[i]);
            // adds letters to array
            this.letters.push(newLetter);
            console.log(newLetter);
        }
        // return newLetter ???
    }
    // takes a character as an argument and calls the guess function on each letter object
    this.makeGuess = function (guess) {
        // forEach letter in this.letters call checkCharacter(guess) method in letter file
        this.letters.forEach(letter => {
            letter.checkLetter(guess);
        });
    }

    this.updateDisplay = function () {
        let displayedWord = "";
        this.letters.forEach(letter => {
            displayedWord += letter.getCharacter() + " ";
        });
        return displayedWord;
    }

}

module.exports = Word;


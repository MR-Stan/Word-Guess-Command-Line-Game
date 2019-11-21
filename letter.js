// constructor
class Letter {
    constructor(letter) {
        // stores character
        this.letter = letter;
        // stores whether or not this letter has been guessed
        this.isGuessed = false;
        // returns underlying character if letter has been guessed
        // or underscore if not
        this.getCharacter = function () {
            if (this.isGuessed) {
                return this.letter;
            }
            else if (!this.isGuess) {
                return "_";
            }
            else {
                console.log("Error");
            }
        }
        // takes character as argument and checks it against the 
        // underlying character, updating the boolean if correct
        this.checkCharacter = function (char) {
            if (char === this.letter) {
                this.isGuessed = true;
                console.log("your guess matches")
            }
            else {
                console.log("Your guess does not match");
            }
        }
    }
}

module.exports = Letter;
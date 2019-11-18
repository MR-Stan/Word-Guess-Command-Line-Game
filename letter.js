// constructor
function Letter(letter) {
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
        else {
            return "_";
        }
    }
    // takes character as argument and checks it against the 
    // underlying character, updating the boolean if correct
    this.checkCharacter = function (char) {
        if (char === this.letter) {
            this.isGuessed = true;
        }
    }
}

module.exports = Letter;
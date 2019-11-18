// constructor
function Letter(letter) {
    // stores character
    this.letter = letter;
    // stores whether or not this letter has been guessed
    this.isGuessed = false;
    // returns underlying character if lett has been guessed
    // or underscore if not
    this.getCharacter = function () {

    }
    // takes character as argument and checks it against the 
    // underlying character, updating the boolean if correct
    this.checkCharacter = function (char) {

    }
}

module.exports = Letter;
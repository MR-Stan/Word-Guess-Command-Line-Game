// word.js contains constructor function
const Word = require("./word.js");

// npm inquirer
const inquirer = require("inquirer");

// holds words that have been chosen, used to prevent repeats
let chosenWordsArr = [];

// current word to be guessed
let chosenWord = "";

// constructed chosen word
let currentWord = "";

// 
let letterCheckArr = [];

// number of guesses determined by length of chosen word
let guesses = 0;

// array of words to be guesses
let wordsArr = [
    "fish", "dog", "cat", "antelope", "squirrel",
    "opossum", "turkey", "chicken", "cow", "beaver",
    "pizza", "tacos", "asparagus", "steak", "shrimp",
    "enchiladas", "spaghetti", "apples", "bananas"
];

// entry point
function initialize() {
    console.log("**********************");
    console.log("Welcome to Word Guess!");
    console.log("**********************");
    play();
}

// game play
function play() {
    // if a word has been chosen
    if (chosenWord) {
        // number of guesses is equal to the word length plus two
        guesses = chosenWord.length + 2;
        // if the chosen word equals the constructed word - this should only happen when this word has already been guessed i.e. repeated
        if (chosenWord === currentWord.word) {
            // empty the chosen word so that a new word will be selected 
            chosenWord = "";
            // when the function is run again
            play();
        }
        else {
            // contruct currentWord from the chosen word
            currentWord = new Word(chosenWord);
            // split the word into an array of letters
            currentWord.splitString();
            // initiate guess loop - user enters letters to guess word
            guess();
        }
    }
    // if a word hasn't been chosen and there are unchosen words remaining
    else if (!chosenWord && chosenWordsArr.length < wordsArr.length) {
        // choose a word
        chosenWord = findWord();
        // runs through play again to see if the chosen word is a new word
        play();
    }
    // all of the words have been guessed
    else {
        console.log("You've guessed all of the words!")
        console.log("--------------------------------")
        playAgain();
    }

}

// finds word that hasn't been picked yet
function findWord() {
    // picks random word in words array
    let index = Math.floor(Math.random() * wordsArr.length);
    let newWord = wordsArr[index];
    // if the randomly selected word hasn't been chosen already
    if (chosenWordsArr.includes(newWord)) {
        // try again
        return findWord();
    }
    else {
        // add the word to chosen words
        chosenWordsArr.push(newWord);
        // current word is updated to newWord
        return newWord;
    }
}

// prompt to play again after all words guessed
function playAgain() {
    inquirer.prompt([
        {
            name: "replay",
            type: "list",
            message: "Guess another word?",
            choices: ["Yes", "No"]
        }
    ]).then(data => {
        // if user chooses to play again
        if (data.replay === "Yes") {
            // remove all chosen words
            chosenWordsArr = [];
            play();
        }
        // end game
        else {
            console.log("<('.')>");
            process.exit();
        }
    });
}

// when the user guesses
function guess() {
    // empty the array
    letterCheckArr = [];
    inquirer.prompt([
        {
            type: "input",
            name: "guess",
            message: currentWord.updateDisplay() + "\n----------------------" + "\nPick a letter!" + "\nGuesses Remaining: " + guesses + "\n"
        }
    ]).then(data => {
        currentWord.letters.forEach(letter => {
            letter.checkCharacter(data.guess);
            letterCheckArr.push(letter.getCharacter());
        });
        guesses--;
        if (guesses === 0) {
            console.log("You ran out of guesses!")
            playAgain();
        }
        else {
            checkWin();
        }
    });
}

// check if won
function checkWin() {
    if (letterCheckArr.includes("_")) {
        guess();
    }
    else {
        console.log("Nice job! You guessed the word.")
        playAgain();
    }
}

initialize();

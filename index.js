const Word = require("./word.js");
const inquirer = require("inquirer");

// once a choice is made, push to chosen
let chosenWordsArr = [];
let currentWord = "";

let wordsArr = [
    "fish", "dog", "cat", "antelope", "squirrel",
    "opossum", "turkey", "chicken", "cow", "beaver",
    "pizza", "tacos", "asparagus", "steak", "shrimp",
    "enchiladas", "spaghetti", "apples", "bananas"
];

// first run
function initialize() {
    console.log("Welcome! Press any letter key to being.");
    play();
}

// needs to be independent of times played
function play() {
    currentWord = false;
    if (chosenWordsArr.length < wordsArr.length) {
        currentWord = findWord();
        console.log("Current Word: " + currentWord)
    }
    else {
        console.log("You've guessed all of the words!")
        playAgain();
    }
    if (currentWord) {
        let localWord = new Word(currentWord);
        localWord.splitString();
        play();
    }
}

// finds word that hasn't been picked yet
function findWord() {
    // picks random word in words array
    let index = Math.floor(Math.random() * wordsArr.length);
    let newWord = wordsArr[index];
    console.log("New word: " + newWord);
    // if the randomly selected word hasn't been chosen already
    if (chosenWordsArr.includes(newWord)) {
        // try again
        //return findWord();
        console.log(true);
    }
    else {
        // add the word to chosen words
        chosenWordsArr.push(newWord);
        // current word is updated to newWord
        return newWord;
        console.log(false);

    }
}

// 
function playAgain() {
    inquirer.prompt([
        {
            name: "replay",
            type: "list",
            message: "Play again?",
            choices: ["Yes", "No"]
        }
    ]).then(data => {
        if (data.replay === "Yes") {
            initialize();
        } else {
            console.log("<('.')>");
        }
    });
}

// is this in word.js?
function guess() {
    let letterCheckArr = [];
    inquirer.prompt([
        {
            name: "guess",
            message: word.updateDisplay() + "\nPick a letter!"
        }
    ]).then(data => {
        letter.checkCharacter(data.guess);
        letterCheckArr.push(letter.getCharacter());
    });
    checkWin();
}

// check if won
function checkWin() {
    if (letterCheckArr.includes("_")) {
        guess();
    }
    else {
        console.log("No blanks remaining");
    }
}

initialize();

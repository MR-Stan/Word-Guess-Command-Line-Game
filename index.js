const Word = require("./word.js");
const inquirer = require("inquirer");

// once a choice is made, push to chosen
let chosenWordsArr = [];
let currentWord = "";
let werd = "";
let letterCheckArr = [];

let wordsArr = [
    "fish", "dog", "cat", "antelope", "squirrel",
    "opossum", "turkey", "chicken", "cow", "beaver",
    "pizza", "tacos", "asparagus", "steak", "shrimp",
    "enchiladas", "spaghetti", "apples", "bananas"
];

// first run
function initialize() {
    console.log(chosenWordsArr);
    console.log("Welcome!");
    play();
}



// needs to be independent of times played
function play() {
    if (currentWord) {
        if (currentWord === werd.word) {
            currentWord = "";
            play();
        }
        else {
            werd = new Word(currentWord);
            werd.splitString();
            guess();
        }
    }
    else if (!currentWord && chosenWordsArr.length < wordsArr.length) {
        currentWord = findWord();
        play();
    }
    else {
        console.log("You've guessed all of the words!")
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
        console.log("ChosenWordArr: " + chosenWordsArr);
        return newWord;
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
            chosenWordsArr = [];
            play();
        } else {
            console.log("<('.')>");
        }
    });
}

// 
function guess() {
    letterCheckArr = [];
    inquirer.prompt([
        {
            type: "input",
            name: "guess",
            message: werd.updateDisplay() + "\nPick a letter!"
        }
    ]).then(data => {
        werd.letters.forEach(letter => {
            letter.checkCharacter(data.guess);
            letterCheckArr.push(letter.getCharacter());
        });
        checkWin();
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

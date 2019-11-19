const Word = require("./word.js");
const inquirer = require("inquirer");

// once a choice is made, push to chosen
let chosenWords = [];
let currentWord = "";

let wordsArr = [
    "fish", "dog", "cat", "antelope", "squirrel",
    "opossum", "turkey", "chicken", "cow", "beaver",
    "pizza", "tacos", "asparagus", "steak", "shrimp",
    "enchiladas", "spaghetti", "apples", "bananas"
];

// first run
initialize() => {
    console.log("Welcome! Press any letter key to being.");
    play();
}

// independent of times played
play() => {
    if (chosenWords.length < wordsArr.length) {
        currentWord = findWord();
    }
    else {
        console.log("You've guessed all of the words!")
        playAgain();
    }
}

// finds word that hasn't been picked yet
findWord() => {
    // picks random word in words array
    let newWord = wordsArr[Math.floor(Math.random() * wordsArr.length)];
    // if the randomly selected word hasn't been chosen already
    if (!chosenWords.includes(newWord)) {
        // add the word to chosen words
        chosenWords.push(newWord);
        // current word is updated to newWord
        return newWord;
    }
    else {
        // try again
        return findWord();
    }
}

playAgain() => {

}



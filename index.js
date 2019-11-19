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

// needs to be independent of times played
play() => {
    currentWord = false;
    if (chosenWords.length < wordsArr.length) {
        currentWord = findWord();
    }
    else {
        console.log("You've guessed all of the words!")
        playAgain();
    }
    if (currentWord) {
        let localWord = new Word(currentWord);
        localWord.splitString();
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

// 
playAgain() => {
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
guess() => {
    // inquirer prompt - pick a letter
    // need to create new Letter and call letter.checkCaracter(w/e was picked)

}


initialize();

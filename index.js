const Word = require("./word.js");
const inquirer = require("inquirer");

// once a choice is made, push to chosen
let chosen = [];

let words = [
    "fish", "dog", "cat", "antelope", "squirrel",
    "opossum", "turkey", "chicken", "cow", "beaver",
    "pizza", "tacos", "asparagus", "steak", "shrimp",
    "enchiladas", "spaghetti", "apples", "bananas"
];

// first run
initialize() => {
    inquirer.prompt([
        {
            name: "welcome",
            type: "list",
            message: "Welcome! To play, you must first answer a couple of questions. Will you?",
            choices: ["Yes", "No"]
        },
        {
            name: "welcome",
            type: "list",
            message: "Welcome! To play, you must first answer a couple of questions. Will you?",
            choices: ["Yes", "No"]
        }
    ])
        .then(data => {

        })
}

// independent of times played
play() => {

}

playAgain() => {

}



#! /usr/bin/env node


import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 10 + 1);

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: " number",
        message: " Please Guess a number between 1-10:",
    }
]);

if(answers.userGuessedNumber == randomNumber) {
    console.log ("Congratulatins you Guessed right Number");
    
}
 else {
    console.log("You Guessed Wrong Number");
    
}
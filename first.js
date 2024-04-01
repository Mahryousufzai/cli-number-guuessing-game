#! /usr/bin/env node 
import inquirer from "inquirer";
console.log("welcom to code with mahryousufzai -CLI number Guessing Game");
// hum typscript ko bolenge ke jb bhi mera number guessing wala game run ho tw 
// mjhe ek random number generate karke dena
//Math.floor= iska kaam ye hota hai ke 
//jo hamari decimle points ke andar value hoti hain
// unko wo roundabout krke deta hai
const randomNumber = Math.floor(Math.random() * 5 + 1);
//       math.random= ye ek random number generate karta hai
// or main isko number bhi dunga ke tum is number
// tak value generate karke dena
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter your guess number(Number limit from 1 to 5):",
    },
]);
//ye user se input lene ke liye hum ek object banate hain ✌
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations you guess a correct number");
}
else {
    console.log("sorry you guess a wrong number");
}

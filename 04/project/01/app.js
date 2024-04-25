const userGuess = Math.floor(Number(prompt("Enter number beginning from 0 to 10")))
const dynamicNumber = Math.floor(Math.random() * 10);

let msg = "";

if (userGuess > dynamicNumber) msg = "Guess too high";
else if (userGuess < dynamicNumber) msg = "Guess too low";
else msg = "Correct";

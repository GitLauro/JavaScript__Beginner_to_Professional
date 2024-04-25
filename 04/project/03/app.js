const arr = ["Rock", "Paper", "Scissors"];
const computerRandom = Math.floor(Math.random() * 2);
const userRandom = Math.floor(Math.random() * 2);

let msg = "";

if (userRandom === computerRandom) msg = "No Victor: Draw";
else if (userRandom === 0 && computerRandom === 1) msg = "Rock overpowered by Paper: Loser";
else if (userRandom === 0 && computerRandom === 2) msg = "Rock overpowers Scissors: Victor";
else if (userRandom === 1 && computerRandom === 0) msg = "Papar overpowers Rodk: Victor";
else if (userRandom === 1 && computerRandom === 2) msg = "Paper overpowered by Scissors: Loser";
else if (userRandom === 2 && computerRandom === 0) msg = "Scissors overpowered by Rock: Loser";
else if (userRandom === 2 && computerRandom === 1) msg = "Scissors shears Paper: Victor";

console.log(msg);

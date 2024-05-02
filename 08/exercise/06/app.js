console.log(Math.PI);
console.log(Math.ceil(5.7), Math.floor(5.7), Math.trunc(5.7));
console.log(Math.random());
console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 10 + 1));
console.log(Math.floor(Math.random() * 100 + 1));

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

for (let i = 0; i <= 100; i++) {
    console.log(random(1, 100));
}

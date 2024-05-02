const word1 = "word";

function wordScramble(word) {
    const length = word.length;
    let str = "";
    for (let i = 0; i < length; i++) {
	const index = Math.floor(Math.random() * word.length);
	str += word.charAt(index);
	word = word.substr(0, index) + word.substr(index + 1);
	console.log(str, word);
    }
    return str;
}

let word2 = wordScramble(word1);
console.log(word2);

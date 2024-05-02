const sentence = "this will be capitalized";

function transform(sentence) {
    const newSentence = [];
    let arr = sentence.split(" ");
    console.log(arr);
    arr.forEach((ele) => {
	let firstChar = ele.slice(0, 1);
	let remainingChar = ele.slice(1, ele.length);
	console.log(`${ele} ${firstChar.toUpperCase()}${remainingChar}`);
	newSentence.push(`${firstChar.toUpperCase()}${remainingChar}`);
    });
    console.log(newSentence);
    const finalSentence = newSentence.join(" ");
    return finalSentence;
}

const finalSentence = transform(sentence);
console.log(finalSentence);

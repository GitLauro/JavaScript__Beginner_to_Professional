var endDate = "May 02 2030";

function countdown() {
    const total = Date.parse(endDate) - new Date();
    console.log(total);
    const dys = Math.floor(total / (1000 * 60 * 60 * 24));
    const hrs = Math.floor(total / (1000 * 60 * 60) % 24);
    const mns = Math.floor(total / (1000 / 60) % 60);
    const sec = Math.floor(total / (1000) % 60);
    return {
	dys,
	hrs,
	mns,
	sec
    };
}

function update() {
    let obj = countdown();
    let out = "";
    for (const property in obj) {
	out += (`${property}: ${obj[property]} `);
    }
    setTimeout(update, 1000);
}

update();

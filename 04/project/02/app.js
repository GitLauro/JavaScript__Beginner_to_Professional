const name = prompt("Enter name of supposed friend");
let msg = "";
switch (name.toLowerCase()) {
case "bill":
    msg = "Befriended since 20";
    break;
case "steven":
    msg = "Befriended since 200";
    break;
case "tommy":
    msg = "Befriended since 2000";
    break;
default:
    msg = `${name} is not on your friends list`;
}

console.log(msg);

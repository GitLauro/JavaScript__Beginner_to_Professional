const date = new Date();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const day = date.getDate();
const year = date.getFullYear();
const month = date.getMonth();

console.log(date, day, year, month, months[month - 1]);

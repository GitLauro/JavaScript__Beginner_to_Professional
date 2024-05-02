const arr1 = ["a", "e", "i", "o", "u"];
const str1 = "I Love JavaScript";
let str2 = str1.toLowerCase();

arr1.forEach((ele, index) => {
    console.log(`${ele} `)
    str2 = str2.replaceAll(ele, index);
});

console.log(str2);

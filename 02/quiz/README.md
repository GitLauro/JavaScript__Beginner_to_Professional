# Self-check quiz
1. What data type is the following variable?
```
const c = "5";
```
String

2. What data type is the following variable?
```
const c = 91;
```
Number

3. Which one is generally better, line 1 or line 2?
```
let empty1 = undefined; //line 1
let empty2 = null; //line 2
```
Line 2

4. What is the console output for the following?
```
let a = "Hello";
a = "world";
console.log(a);
```
"world"

5. What will be logged to the console?
```
let a = "world";
let b = `Hello ${a}!`;
console.log(b);
```
"Hello world!"

6. What is the value of a?
```
let a = "Hello";
a = prompt("world");
console.log(a);
```
Various: dependent upon user entered string

7. What is the value of b output to the console?
```
let a = 5;
let b = 70;
let c = "5";
b++;
console.log(b);
```
71

8. What is the value of result?
```
let result = 3 + 4 * 2 / 8;
```
4

9. What is the value of total and total2?
```
let firstNum = 5;
let secondNum = 10;
firstNum++;
secondNum--;
let total = ++firstNum + secondNum;
console.log(total);
let total2 = 500 + 100 / 5 + total--;
console.log(total2);
```
16
536

10. What is logged to the console here?
```
const a = 5;
const b = 10;
console.log(a > 0 && b > 0);
console.log(a == 5 && b == 4);
console.log(true ||false);
console.log(a == 3 || b == 10);
console.log(a == 3 || b == 7);
```
true
false
true
true
false
# Self-check quiz
1. Which method will decode the following?
var c = "http://www.google.com?id=1000&n=500";
var e = encodeURIComponent(c);
a. decodeURIComponent(e)
b. e.decodeUriComponent()
c. decoderURIComponent(c)
d. decoderURIComponent(e)

d

2. What will be output into the console from the following syntax?
```
const arr = ["hi","world","hello","hii","hi","hi World","Hi"];
console.log(arr.lastIndexOf("hi"));
```
4

3. What is the result of the below code in the console?
```
const arr = ["Hi","world","hello","Hii","hi","hi World","Hi"];
arr.copyWithin(0, 3, 5);
console.log(arr);
```

```
["Hii", "hi", "hello", "Hii", "hi", "hi World", "Hi"];
```


4. What is the result of the below code in the console?
```
const arr = ["Hi","world","hello","Hii","hi","hi World","Hi"];
const arr2 = arr.filter((element,index)=>{
const ele2 = element.substring(0, 2);
return (ele2 == "hi");
});
console.log(arr2);
```
["hi", "hi World"];
```
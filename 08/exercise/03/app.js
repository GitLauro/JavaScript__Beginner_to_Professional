const arr1 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const arr2 = arr1.map(function(value) {return value * 2});
const arr3 = arr1.map((value) => value * 2);
console.log(arr2, arr3);

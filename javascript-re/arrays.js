// arrays.js
// Array methods in JavaScript

let nums = [1, 2, 3, 4, 5];
let doubled = nums.map(n => n * 2);
// console.log(doubled); // [2, 4, 6, 8, 10]
// Explanation: map creates a new array with each value doubled.

let evens = nums.filter(n => n % 2 === 0);
// console.log(evens); // [2, 4]
// Explanation: filter returns only even numbers.

let sum = nums.reduce((acc, n) => acc + n, 0);
// console.log(sum); // 15
// Explanation: reduce sums all numbers in the array.

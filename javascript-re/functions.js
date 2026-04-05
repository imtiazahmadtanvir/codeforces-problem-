// functions.js
// Functions in JavaScript

// Function declaration
function greet(name) {
  return "Hello, " + name;
}
// console.log(greet("Bob")); // Hello, Bob
// Explanation: Function returns greeting string.

// Function expression
const add = function(x, y) {
  return x + y;
};
// console.log(add(2, 3)); // 5
// Explanation: Function expression assigned to variable.

// Arrow function
const square = n => n * 2;
// console.log(square(4)); // 8
// Explanation: Arrow function returns n * 2.

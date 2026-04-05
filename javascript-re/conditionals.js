// conditionals.js
// Conditional statements in JavaScript

let age = 18;
if (age >= 18) {
  // console.log("Adult"); // Adult
} else {
  // console.log("Minor");
}
// Explanation: if block runs because age is 18.

// Ternary operator
let result = (age >= 18) ? "Adult" : "Minor";
// console.log(result); // Adult
// Explanation: Ternary returns 'Adult' because age is 18.

// switch statement
let color = "red";
switch (color) {
  case "red":
    // console.log("Color is red"); // Color is red
    break;
  case "blue":
    // console.log("Color is blue");
    break;
  default:
    // console.log("Unknown color");
}
// Explanation: 'red' matches the first case.

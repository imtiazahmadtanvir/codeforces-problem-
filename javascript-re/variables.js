// variables.js
// Variable declarations and scope in JavaScript

// let: block-scoped, can be updated but not redeclared in the same scope
let a = 5;
a = 10;
// console.log(a); // 10
// Explanation: 'a' is updated to 10 because let allows reassignment.

// const: block-scoped, cannot be updated or redeclared
const pi = 3.14;
// pi = 3.15; // Error: Assignment to constant variable
// console.log(pi); // 3.14
// Explanation: 'pi' is constant, so its value cannot be changed.

// var: function-scoped, can be redeclared and updated
var b = 7;
var b = 8;
// console.log(b); // 8
// Explanation: 'var' allows redeclaration and reassignment.

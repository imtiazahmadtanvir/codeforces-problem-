// JavaScript Recap

// 1. Variable Declarations
// let: can be changed, cannot be redeclared in the same scope
let a = 5;
a = 10;
// console.log(a); // 10
// Explanation: 'a' is updated to 10 because let allows reassignment.

// const: cannot be changed or redeclared
const pi = 3.14;
// pi = 3.15; // Error: Assignment to constant variable
// console.log(pi); // 3.14
// Explanation: 'pi' is constant, so its value cannot be changed.

// var: function-scoped, can be redeclared and updated
var b = 7;
var b = 8;
// console.log(b); // 8
// Explanation: 'var' allows redeclaration and reassignment.

// 2. Data Types
// String
let str = "Hello";
// console.log(str); // Hello
// Number
let num = 42;
// console.log(num); // 42
// Boolean
let isTrue = true;
// console.log(isTrue); // true
// Null
let empty = null;
// console.log(empty); // null
// Undefined
let notSet;
// console.log(notSet); // undefined
// BigInt
let big = 12345678901234567890n;
// console.log(big); // 12345678901234567890n
// Symbol
let sym1 = Symbol("id");
let sym2 = Symbol("id");
// console.log(sym1 === sym2); // false
// Explanation: Each Symbol is unique, even with the same description.

// 3. Objects and Arrays
let obj = { name: "Alice", age: 25 };
// console.log(obj.name); // Alice
// Explanation: Access object properties with dot notation.

let arr = [1, 2, 3];
// console.log(arr[0]); // 1
// Explanation: Arrays are zero-indexed.

// 4. Type Conversion
let n = "5";
let sum = Number(n) + 2;
// console.log(sum); // 7
// Explanation: String '5' is converted to number before addition.

// 5. Operators
let x = 10;
let y = 3;
let add = x + y; // 13
let mul = x * y; // 30
let div = x / y; // 3.333...
let mod = x % y; // 1
// console.log(add, mul, div, mod);
// Explanation: Standard arithmetic operations.

// 6. Comparison Operators
// console.log(5 == '5'); // true
// console.log(5 === '5'); // false
// Explanation: == compares value, === compares value and type.

// 7. Conditionals
let age = 18;
if (age >= 18) {
	// console.log("Adult"); // Adult
} else {
	// console.log("Minor");
}
// Explanation: if block runs because age is 18.

// 8. Loops
for (let i = 0; i < 3; i++) {
	// console.log(i); // 0, 1, 2
}
// Explanation: for loop runs 3 times, i from 0 to 2.

// 9. Functions
function greet(name) {
	return "Hello, " + name;
}
// console.log(greet("Bob")); // Hello, Bob
// Explanation: Function returns greeting string.

// 10. Array Methods
let nums = [1, 2, 3];
let doubled = nums.map(n => n * 2);
// console.log(doubled); // [2, 4, 6]
// Explanation: map creates a new array with each value doubled.

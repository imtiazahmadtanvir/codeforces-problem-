
console.log("hello woorld");

// let vaiable value is changeable but cannot be redeclared
let x = 10;
x = 20;

console.log(x);
let a =4;
let c = 5;

let s= a+c;

console.log(s);

//const variable value is not changeable and cannot be redeclared

const pi=3.134;

console.log(pi);

//1. Primitive Data Types
// Primitive data types are the most basic data types in JavaScript. They represent single values and are immutable, meaning their values cannot be changed once created. 
// The Seven primary primitive data types in JavaScript are:
//  string, number,bignt, boolean, null, and undefined,Symbol.

//Symbol is a primitive data type (like string, number, boolean) introduced in ES6.

//2. Non-primitive Data Types
// Non-primitive data types, also known as reference types, are objects and derived data types. They can store collections of values or more complex entities. The two key non-primitive data types in JavaScript are:
// Below is a list of Non-primitive data types are objects and arrays.

// Object: An object is a collection of properties, where each property is defined as a key-value pair. Objects can store multiple values and can be used to represent real-world entities.
// Array: An array is an ordered collection of values, which can be of different data types. Arrays are used to store lists of items and provide various methods for manipulating the data they contain.

//JS types 
// String,
// Number,
// Bigint=large integer values,
// bolean= true/false,
// object
// null =A primitive value representing object absence
// undefined =	A primitive variable with no assigned value
// symobol = A unique and primitive identifier and immutable data type


//string example
let color ="red";
let l ="hello i am imtiaz ahmad tanvir";

//number example
let  length =32;
let age =24;

//bigint example 
// n is used to define bigint
let largeInt = 9007199254741991n;
console.log(largeInt);
//answer: 9007199254741991n


//Object example
let obj={name:"imtiaz",age:24,city:"dhaka"};
console.log(obj);
//answer: {name: 'imtiaz', age: 24, city: 'dhaka'}


//object convert into array keys
let keys=Object.keys(obj);
console.log(keys);
//answer: ['name', 'age', 'city']


//object convert into array values
let array=Object.values(obj);
console.log(array);


//object convert into string
let string=JSON.stringify(obj);
console.log(string);
//answer: {"name":"imtiaz","age":24,"city":"dhaka"}


//string to object
let obj2=JSON.parse(string);
console.log(obj2);

//object Date example
let date =new Date("2024-06-01");
console.log(date);

//array to object
let obj1=Object.fromEntries(
    Object.entries(array)
);
console.log(obj1);

// Array object
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);

// Symbol Example
let m = Symbol();
let n = Symbol();
console.log(m == n);
//answer: false
//Even though they look the same, they are never equal.



//js operator
// Operators are for Mathematical and Logical Computations
// The Assignment Operator = assigns values

// The Addition Operator + adds values

// The Multiplication Operator * multiplies values

// The Comparison Operator > compares values



// JavaScript Arithmetic Operators
//    Operator	Description
//     +	    Addition
//     -	    Subtraction
//     *	    Multiplication
//     **	    Exponentiation
//     /	    Division
//     %	    Modulus (Division Remainder)
//     ++	    Increment
//     --	    Decrement

// js arithmetic,js assignment,js comparison,js logical operators ect.


// JavaScript Conditionals
    // Conditional Statements
    // Conditional Statements allow us to perform different actions for different conditions.

    // Conditional statements run different code depending on true or false conditions.

    // Conditional statements include:

    // if
    // if...else
    // if...else if...else
    // switch
    // ternary (? :)

    // if (condition) {
    //             // code to execute if the condition is true
    // } else {                    

    // }


//     The else if Statement
// Use else if to specify a new condition to test, if the first condition is false.

// Syntax
// if (condition1) {
//   // code to execute if condition1 is true
// } else if (condition2) {
//   // code to execute if the condition1 is false and condition2 is true
// } else {
//   // code to execute if the condition1 is false and condition2 is false
// }
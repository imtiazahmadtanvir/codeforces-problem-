

# JavaScript Concepts for Interviews (Detailed)


## 1. Variables and Data Types
**Definition:** Variables store data values. JavaScript uses dynamic typing, so variables can hold any type.
- `let`: Block-scoped, can be updated but not redeclared in the same scope. Use for variables that change.
- `const`: Block-scoped, cannot be updated or redeclared. Use for constants.
- `var`: Function-scoped, can be updated and redeclared. Avoid in modern code due to hoisting issues.

**Primitive types:**
- String: Text data (e.g., "hello")
- Number: Numeric data (e.g., 42, 3.14)
- Boolean: true/false
- Null: Intentional absence of value
- Undefined: Variable declared but not assigned
- BigInt: Large integers (e.g., 123n)
- Symbol: Unique identifiers

**Reference types:**
- Object: Key-value pairs
- Array: Ordered list
- Function: Callable object

**Why use:** To store and manipulate data in your program.

**Example:**
```js
let name = "Alice";
const pi = 3.14;
let arr = [1, 2, 3];
let obj = { key: "value" };
```


## 2. Operators
**Definition:** Operators perform operations on variables and values.
- Arithmetic: +, -, *, /, %, ** (math operations)
- Assignment: =, +=, -=, etc. (assign values)
- Comparison: ==, ===, !=, !==, >, <, >=, <= (compare values)
- Logical: &&, ||, ! (combine or invert booleans)

**Why use:** To compute, compare, and assign values.

**Example:**
```js
let a = 5, b = 2;
a += b; // 7
let isEqual = (a === 7); // true
```


## 3. Conditionals
**Definition:** Conditional statements control the flow of code based on conditions.
- `if`, `else if`, `else`: Run code blocks based on boolean expressions.
- `switch`: Multi-way branch based on value.
- Ternary operator: Short form for if-else.

**Why use:** To make decisions in your code.

**Example:**
```js
if (a > b) {
	// ...
} else {
	// ...
}
let result = (a > b) ? "A" : "B";
```


## 4. Loops
**Definition:** Loops repeat code multiple times.
- `for`: Loop with counter.
- `while`: Loop while condition is true.
- `do-while`: Like while, but runs at least once.
- `for...of`: Iterate over array values.
- `for...in`: Iterate over object keys.

**Why use:** To process collections or repeat actions.

**Example:**
```js
for (let i = 0; i < arr.length; i++) {
	// ...
}
for (let val of arr) {
	// ...
}
```


## 5. Functions
**Definition:** Functions are reusable blocks of code that perform a task.
- Function declaration: `function foo() {}`
- Function expression: `const foo = function() {}`
- Arrow function: `const foo = () => {}`
- Parameters: Inputs to a function
- Return: Output from a function
- Default/rest/spread: Flexible argument handling

**Why use:** To organize, reuse, and modularize code.

**Example:**
```js
function add(x, y) { return x + y; }
const sub = function(x, y) { return x - y; };
const mul = (x, y) => x * y;
```


## 6. Objects and Arrays
**Definition:**
- Objects: Collections of key-value pairs. Used to model real-world entities.
- Arrays: Ordered lists of values. Used to store sequences.
- Destructuring: Extract values from objects/arrays easily.
- Array methods: map, filter, reduce, forEach, find, etc.

**Why use:** To structure and manipulate complex data.

**Example:**
```js
let person = { name: "Bob", age: 25 };
let { name, age } = person;
let nums = [1, 2, 3];
let doubled = nums.map(n => n * 2);
```


## 7. Scope and Hoisting
**Definition:**
- Scope: Where variables are accessible (global, function, block).
- Hoisting: Declarations are moved to the top of their scope before code runs.

**Why use:** To control variable visibility and avoid conflicts.

**Example:**
```js
console.log(x); // undefined (var is hoisted)
var x = 5;
```


## 8. Closures (Detailed)
**Definition:**
A closure is a function that remembers the variables from its outer (enclosing) scope even after that scope has finished executing.

**Why use:**
- To create private variables
- To maintain state between function calls
- For callbacks and event handlers

**How it works:**
When a function is created inside another function, the inner function has access to the outer function's variables, even after the outer function returns.

**Example:**
```js
function makeCounter() {
	let count = 0; // 'count' is private to makeCounter
	return function() {
		count++;
		return count;
	};
}
const counter = makeCounter();
counter(); // 1
counter(); // 2
// Each call to counter() increments and remembers 'count'
```

**Use-cases:**
- Data privacy (emulating private variables)
- Function factories (customized functions)
- Event handlers and callbacks that need to remember state

**Another Example:**
```js
function multiplier(factor) {
	return function(x) {
		return x * factor;
	};
}
const double = multiplier(2);
double(5); // 10
```


## 9. The `this` Keyword
**Definition:**
`this` refers to the object that is executing the current function.
- In a method, `this` is the object before the dot.
- In a function (non-method), `this` is undefined in strict mode, or the global object otherwise.
- In arrow functions, `this` is inherited from the parent scope.

**Why use:** To access properties and methods of the current object.

**Example:**
```js
const obj = {
	value: 10,
	getValue() { return this.value; }
};
obj.getValue(); // 10
```


## 10. Prototypes and Inheritance
**Definition:**
JavaScript uses prototype-based inheritance. Objects can inherit properties and methods from other objects via their prototype.
- `Object.create(proto)`: Create a new object with the given prototype.
- `class` and `extends`: ES6+ syntax for defining classes and inheritance.

**Why use:** To share behavior and structure between objects.

**Example:**
```js
function Animal(name) { this.name = name; }
Animal.prototype.speak = function() { return this.name + ' makes a noise'; };
let dog = new Animal('Dog');
dog.speak(); // 'Dog makes a noise'
```


## 11. ES6+ Features
**Definition:**
Modern JavaScript (ES6 and later) introduced many new features:
- `let`/`const`: Block-scoped variables
- Arrow functions: Shorter function syntax
- Template literals: String interpolation with backticks
- Destructuring: Unpack values from arrays/objects
- Spread/rest: Expand or collect elements
- Classes: Syntactic sugar for prototypes
- Modules: Import/export code
- Promises, async/await: Asynchronous programming

**Why use:** To write cleaner, more expressive, and maintainable code.

**Example:**
```js
const greet = (name = 'Guest') => `Hello, ${name}!`;
let arr2 = [...arr, 4, 5];
```


## 12. Asynchronous JavaScript
**Definition:**
JavaScript is single-threaded, but async code lets you perform tasks (like network requests) without blocking the main thread.
- Callbacks: Functions passed as arguments to run after a task completes.
- Promises: Objects representing future completion/failure of an async operation.
- async/await: Syntactic sugar for working with promises in a synchronous style.

**Why use:** To handle time-consuming operations (I/O, timers, APIs) efficiently.

**Example:**
```js
function fetchData(cb) { setTimeout(() => cb('done'), 100); }
fetchData(data => console.log(data));

function fetchPromise() { return Promise.resolve('done'); }
fetchPromise().then(console.log);

async function fetchAsync() { return 'done'; }
(async () => { console.log(await fetchAsync()); })();
```


## 13. Error Handling
**Definition:**
Mechanisms to handle runtime errors gracefully.
- `try`: Block to wrap code that may throw errors.
- `catch`: Block to handle errors.
- `finally`: Block that always runs after try/catch.
- `throw`: Manually trigger an error.

**Why use:** To prevent crashes and provide meaningful error messages.

**Example:**
```js
try {
	throw new Error('Oops');
} catch (e) {
	console.log(e.message);
}
```


## 14. DOM Manipulation (Browser)
**Definition:**
The DOM (Document Object Model) represents the structure of web pages. JavaScript can select, modify, and react to elements and events.
- Selecting: `getElementById`, `querySelector`, etc.
- Modifying: Change text, attributes, styles
- Events: Respond to user actions (click, input, etc.)

**Why use:** To create interactive web pages.

**Example:**
```js
// document.getElementById('id').textContent = 'Hello';
// document.querySelector('.class').addEventListener('click', () => {});
```


## 15. JSON
**Definition:**
JSON (JavaScript Object Notation) is a lightweight data format for storing and exchanging data.
- `JSON.stringify`: Convert object to JSON string
- `JSON.parse`: Convert JSON string to object

**Why use:** To send/receive data between client and server.

**Example:**
```js
let obj = { a: 1 };
let str = JSON.stringify(obj);
let parsed = JSON.parse(str);
```

---

---

Review these concepts, their definitions, use-cases, and code examples to prepare thoroughly for JavaScript interviews!

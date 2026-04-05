
# JavaScript Closures: Detailed Explanation

## What is a Closure?
A closure is a function that retains access to its outer (enclosing) function’s variables even after the outer function has finished executing.

## Why Use Closures?
- To create private variables (data hiding)
- To maintain state between function calls
- For function factories (customized functions)
- For callbacks and event handlers that need to remember state

## How Do Closures Work?
When a function is defined inside another function, the inner function forms a closure. It “remembers” the variables from the outer function’s scope, even after the outer function returns.

## Example 1: Private Counter
```js
function makeCounter() {
	let count = 0; // 'count' is private to makeCounter
	return function() {
		count++;
		return count;
	};
}
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```
**Explanation:**
- Each call to counter() increments and remembers 'count'.
- The variable count is not accessible from outside, only through the returned function.

## Example 2: Function Factory
```js
function multiplier(factor) {
	return function(x) {
		return x * factor;
	};
}
const double = multiplier(2);
console.log(double(5)); // 10
const triple = multiplier(3);
console.log(triple(5)); // 15
```
**Explanation:**
- Each returned function remembers the factor it was created with.
- double always multiplies by 2, triple by 3.

## Example 3: Callback with Closure
```js
function delayedGreeting(name) {
	setTimeout(function() {
		console.log('Hello, ' + name);
	}, 1000);
}
delayedGreeting('Alice'); // After 1 second: Hello, Alice
```
**Explanation:**
- The callback function inside setTimeout remembers the value of name from its outer scope.

## Summary
- Closures allow functions to access variables from their creation context, not just their invocation context.
- They are essential for data privacy, maintaining state, and writing modular, reusable code in JavaScript.

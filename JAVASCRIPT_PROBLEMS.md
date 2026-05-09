# Common JavaScript Problems

A comprehensive guide to the most common issues JavaScript developers encounter.

---

## 1. Hoisting Confusion

Variables and functions declared with `var` and `function` are hoisted to the top of their scope, but initialization happens at runtime.

```javascript
console.log(x); // undefined (not an error!)
var x = 5;

console.log(foo()); // "Hello" (works!)
function foo() { return "Hello"; }
```

**Solution:** Use `let` and `const` instead of `var` for block-scoped variables.

---

## 2. this Binding Issues

`this` depends on how a function is called, not where it's defined.

```javascript
const obj = {
  name: "John",
  greet: function() { console.log(this.name); }
};
obj.greet(); // "John"

const greet = obj.greet;
greet(); // undefined (this is global/undefined)
```

**Solution:** Use arrow functions or `.bind()` to maintain context.

```javascript
const obj = {
  name: "John",
  greet: () => { console.log(this.name); } // Arrow function
};
```

---

## 3. Closure Gotchas

Variables are shared across closures created in loops.

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Prints: 3, 3, 3 (not 0, 1, 2!)
```

**Solution:** Use `let` instead of `var`, or create a closure.

```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Prints: 0, 1, 2 ✓
```

---

## 4. Type Coercion

JavaScript's automatic type conversion can be unexpected.

```javascript
"5" + 3    // "53" (string concatenation)
"5" - 3    // 2 (numeric subtraction)
0 == false // true (loose equality)
0 === false // false (strict equality)
```

**Solution:** Always use strict equality (`===`) and avoid relying on type coercion.

```javascript
"5" + 3 === "53" // true
"5" - 3 === 2 // true
0 === false // false ✓
```

---

## 5. Async/Await & Promise Confusion

Not awaiting promises or handling rejections properly.

```javascript
async function fetchData() {
  return await fetch('/api/data'); // Easy to forget await
}

// Without try-catch, errors are unhandled
async function getData() {
  const data = await fetch('/api/data');
}
```

**Solution:** Always use `try-catch` with async/await.

```javascript
async function getData() {
  try {
    const data = await fetch('/api/data');
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}
```

---

## 6. Array/Object Reference Issues

Arrays and objects are passed by reference, not by value.

```javascript
const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2.push(4);
console.log(arr1); // [1, 2, 3, 4] - both changed!
```

**Solution:** Use `.slice()`, spread operator `[...]`, or `Object.assign()` to create copies.

```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // Shallow copy
arr2.push(4);
console.log(arr1); // [1, 2, 3] ✓

const obj1 = { a: 1 };
const obj2 = { ...obj1 }; // Shallow copy
```

---

## 7. NaN and typeof Issues

```javascript
typeof NaN // "number" (confusing!)
NaN === NaN // false
isNaN("hello") // true (converts to NaN first)
Number.isNaN("hello") // false (more reliable)
```

**Solution:** Use `Number.isNaN()` for strict checking.

```javascript
Number.isNaN(NaN) // true ✓
Number.isNaN("hello") // false ✓
```

---

## 8. Null vs Undefined

```javascript
null == undefined // true (loose equality)
null === undefined // false (strict equality)
typeof null // "object" (historical bug!)
typeof undefined // "undefined"
```

**Solution:** Use strict equality and handle both cases separately.

```javascript
const value = null;
if (value === null) { /* ... */ }
if (value === undefined) { /* ... */ }
```

---

## 9. Scope Issues with var

`var` is function-scoped, not block-scoped like `let` and `const`.

```javascript
if (true) {
  var x = 1;
  let y = 2;
}
console.log(x); // 1 (leaked to global scope!)
console.log(y); // ReferenceError ✓
```

**Solution:** Always use `let` or `const` instead of `var`.

```javascript
if (true) {
  const x = 1;
  const y = 2;
}
console.log(x); // ReferenceError (correct behavior)
```

---

## 10. Event Listener Memory Leaks

Not removing event listeners can cause memory leaks.

```javascript
const handler = () => { /* ... */ };
element.addEventListener('click', handler);

// Later...
element.removeEventListener('click', handler); // Same function reference required!
```

**Solution:** Store handler references and remove them when needed.

```javascript
const handler = (e) => { console.log('clicked'); };
element.addEventListener('click', handler);

// When done:
element.removeEventListener('click', handler);
```

---

## 11. Mutating Default Parameters

```javascript
const addToArray = (item, array = []) => {
  array.push(item);
  return array;
};

const result1 = addToArray(1); // [1]
const result2 = addToArray(2); // [1, 2] - same array!
```

**Solution:** Avoid relying on mutable default parameters or create new objects.

```javascript
const addToArray = (item, array) => {
  const newArray = array ? [...array] : [];
  newArray.push(item);
  return newArray;
};
```

---

## 12. Comparing Objects/Arrays

```javascript
[1, 2, 3] === [1, 2, 3] // false (different references)
{a: 1} === {a: 1} // false (different references)
```

**Solution:** Compare properties or use utility libraries.

```javascript
JSON.stringify([1, 2, 3]) === JSON.stringify([1, 2, 3]) // true
// Or use deep comparison libraries like lodash
```

---

## Best Practices Summary

✅ **DO:**
- Use `const` by default, `let` if reassignment needed
- Use `===` instead of `==`
- Use arrow functions for consistent `this` binding
- Always use `try-catch` with async/await
- Create copies when modifying objects/arrays
- Use `Number.isNaN()` for NaN checks
- Remove event listeners when done
- Use strict mode: `"use strict"`

❌ **DON'T:**
- Use `var` - use `let`/`const` instead
- Rely on type coercion
- Forget to await promises
- Mutate global objects
- Leave event listeners attached
- Nest callbacks too deeply (use async/await instead)
- Ignore error handling

---

## Useful Tools & Resources

- **ESLint**: Catches common mistakes automatically
- **TypeScript**: Prevents many type-related errors
- **Lodash**: Utility library for safe operations
- **Jest**: Testing framework to catch bugs
- **Prettier**: Code formatter for consistency


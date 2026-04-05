// error-handling.js
// Error handling in JavaScript

try {
  throw new Error("Something went wrong!");
} catch (e) {
  // console.log(e.message); // Something went wrong!
  // Explanation: Error is caught and message is shown.
}

// ReferenceError example
try {
  // console.log(notDefinedVar);
} catch (e) {
  // console.log(e.name); // ReferenceError
  // Explanation: notDefinedVar is not declared, so ReferenceError is thrown.
}

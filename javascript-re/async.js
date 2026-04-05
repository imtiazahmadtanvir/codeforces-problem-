// async.js
// Asynchronous JavaScript: callbacks, promises, async/await

// Callback example
function fetchDataCallback(callback) {
  setTimeout(() => {
    callback("Data loaded");
  }, 100);
}
// fetchDataCallback(data => {
//   console.log(data); // Data loaded
// });
// Explanation: Callback runs after timeout.

// Promise example
function fetchDataPromise() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Promise resolved");
    }, 100);
  });
}
// fetchDataPromise().then(data => {
//   console.log(data); // Promise resolved
// });
// Explanation: Promise resolves after timeout.

// async/await example
async function fetchDataAsync() {
  return "Async/Await result";
}
// (async () => {
//   const data = await fetchDataAsync();
//   console.log(data); // Async/Await result
// })();
// Explanation: await pauses execution until promise resolves.


// --- More about Asynchronous Functions ---

// Why use asynchronous functions?
// - To avoid blocking the main thread (UI or other code) while waiting for slow operations (like network requests, timers, file I/O).
// - To handle tasks that take an unknown amount of time without freezing your app.

// 1. Callback Example (classic style)
function getUserDataCallback(userId, callback) {
  setTimeout(() => {
    callback({ id: userId, name: "Alice" });
  }, 200);
}
// getUserDataCallback(1, user => {
//   console.log(user); // { id: 1, name: 'Alice' }
// });
// Explanation: The callback runs after 200ms, simulating a delayed response (like from a server).

// Drawback: Callbacks can lead to "callback hell" if you nest many of them.

// 2. Promise Example (modern style)
function getUserDataPromise(userId) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id: userId, name: "Bob" });
    }, 200);
  });
}
// getUserDataPromise(2).then(user => {
//   console.log(user); // { id: 2, name: 'Bob' }
// });
// Explanation: Promises make it easier to chain async actions and handle errors.

// 3. Async/Await Example (most modern and readable)
async function showUserData(userId) {
  const user = await getUserDataPromise(userId);
  // console.log(user); // { id: userId, name: 'Bob' }
}
// showUserData(3);
// Explanation: async/await lets you write async code that looks like synchronous code, making it easier to read and maintain.

// Error handling with Promises and async/await
function getUserDataWithError(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === 0) reject(new Error("User not found"));
      else resolve({ id: userId, name: "Eve" });
    }, 200);
  });
}
// getUserDataWithError(0)
//   .then(user => console.log(user))
//   .catch(err => console.log(err.message)); // User not found

// (async () => {
//   try {
//     const user = await getUserDataWithError(0);
//     console.log(user);
//   } catch (err) {
//     console.log(err.message); // User not found
//   }
// })();
// Explanation: Promises and async/await allow for clean error handling using .catch or try/catch.

// Summary:
// - Use callbacks for simple, single async actions (older style).
// - Use Promises for chaining and better error handling.
// - Use async/await for the most readable and maintainable async code.

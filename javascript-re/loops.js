// loops.js
// Looping in JavaScript

// for loop
for (let i = 0; i < 3; i++) {
  // console.log(i); // 0, 1, 2
}
// Explanation: for loop runs 3 times, i from 0 to 2.

// while loop
let j = 0;
while (j < 3) {
  // console.log(j); // 0, 1, 2
  j++;
}
// Explanation: while loop runs as long as j < 3.

// do-while loop
let k = 0;
do {
  // console.log(k); // 0, 1, 2
  k++;
} while (k < 3);
// Explanation: do-while runs at least once, then checks condition.

// for...of loop
let arr = [10, 20, 30];
for (let val of arr) {
  // console.log(val); // 10, 20, 30
}
// Explanation: for...of iterates over array values.

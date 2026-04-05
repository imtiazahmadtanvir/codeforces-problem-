

// Find Maximum in Array (Method 1: Math.max)
// Return the largest number in an array
function findMax(arr) {
	// Math.max(...arr) spreads the array and returns the largest value
	return Math.max(...arr);
}

// Find Maximum in Array (Method 2: Loop)
function findMaxLoop(arr) {
	// Initialize max with the first element
	let max = arr[0];
	// Loop through the array and update max if a larger value is found
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
}

// Test the functions
console.log(findMax([1, 2, 3]));      // Output: 3
console.log(findMaxLoop([1, 2, 3]));  // Output: 3
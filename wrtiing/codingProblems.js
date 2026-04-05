// 30 Common Coding Problems for Software Engineer Trainee Positions

// 1. Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}
// console.log(reverseString('hello')); // 'olleh'

// 2. Check for Palindrome
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}
// console.log(isPalindrome('madam')); // true

// 3. Find Maximum in Array
function findMax(arr) {
    return Math.max(...arr);
}
// console.log(findMax([1, 2, 3])); // 3

// 4. Sum of Array Elements
function arraySum(arr) {
    return arr.reduce((a, b) => a + b, 0);
}
// console.log(arraySum([1, 2, 3])); // 6

// 5. Fibonacci Sequence
function fibonacci(n) {
    let seq = [0, 1];
    for (let i = 2; i < n; i++) {
        seq.push(seq[i-1] + seq[i-2]);
    }
    return seq.slice(0, n);
}
// console.log(fibonacci(5)); // [0, 1, 1, 2, 3]

// 6. Factorial of a Number
function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}
// console.log(factorial(5)); // 120

// 7. Count Vowels in a String
function countVowels(str) {
    return (str.match(/[aeiou]/gi) || []).length;
}
// console.log(countVowels('hello')); // 2

// 8. Find Duplicate Elements in Array
function findDuplicates(arr) {
    return arr.filter((item, idx) => arr.indexOf(item) !== idx);
}
// console.log(findDuplicates([1,2,2,3,3,4])); // [2,3]

// 9. Remove Duplicates from Array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
// console.log(removeDuplicates([1,2,2,3])); // [1,2,3]

// 10. Check Prime Number
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
// console.log(isPrime(7)); // true

// 11. Find Second Largest Number
function secondLargest(arr) {
    let unique = [...new Set(arr)].sort((a,b) => b-a);
    return unique[1];
}
// console.log(secondLargest([1,2,3,4])); // 3

// 12. Sum of Digits
function sumDigits(n) {
    return n.toString().split('').reduce((a,b) => a + Number(b), 0);
}
// console.log(sumDigits(123)); // 6

// 13. Reverse an Array
function reverseArray(arr) {
    return arr.reverse();
}
// console.log(reverseArray([1,2,3])); // [3,2,1]

// 14. Find Missing Number
function findMissing(arr, n) {
    let sum = n*(n+1)/2;
    return sum - arr.reduce((a,b) => a+b,0);
}
// console.log(findMissing([1,2,4,5],5)); // 3

// 15. Check Anagram
function isAnagram(a, b) {
    return a.split('').sort().join('') === b.split('').sort().join('');
}
// console.log(isAnagram('listen','silent')); // true

// 16. Find Intersection of Arrays
function intersection(a, b) {
    return a.filter(x => b.includes(x));
}
// console.log(intersection([1,2,3],[2,3,4])); // [2,3]

// 17. Find Largest Word in String
function largestWord(str) {
    return str.split(' ').reduce((a,b) => a.length > b.length ? a : b);
}
// console.log(largestWord('I love programming')); // 'programming'

// 18. Capitalize First Letter of Each Word
function capitalizeWords(str) {
    return str.replace(/\b\w/g, c => c.toUpperCase());
}
// console.log(capitalizeWords('hello world')); // 'Hello World'

// 19. Count Occurrences of Character
function countChar(str, char) {
    return str.split(char).length - 1;
}
// console.log(countChar('hello','l')); // 2

// 20. Find GCD of Two Numbers
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}
// console.log(gcd(12, 8)); // 4

// 21. Check Armstrong Number
function isArmstrong(n) {
    let digits = n.toString().split('');
    let sum = digits.reduce((a,b) => a + Math.pow(Number(b), digits.length), 0);
    return sum === n;
}
// console.log(isArmstrong(153)); // true

// 22. Find All Even Numbers in Array
function evenNumbers(arr) {
    return arr.filter(x => x % 2 === 0);
}
// console.log(evenNumbers([1,2,3,4])); // [2,4]

// 23. Find All Substrings of a String
function allSubstrings(str) {
    let subs = [];
    for(let i=0;i<str.length;i++){
        for(let j=i+1;j<=str.length;j++){
            subs.push(str.slice(i,j));
        }
    }
    return subs;
}
// console.log(allSubstrings('abc')); // ['a','ab','abc','b','bc','c']

// 24. Check if Array is Sorted
function isSorted(arr) {
    for(let i=1;i<arr.length;i++){
        if(arr[i]<arr[i-1]) return false;
    }
    return true;
}
// console.log(isSorted([1,2,3])); // true

// 25. Find First Non-Repeated Character
function firstNonRepeated(str) {
    for(let c of str) {
        if(str.indexOf(c) === str.lastIndexOf(c)) return c;
    }
    return null;
}
// console.log(firstNonRepeated('aabbcde')); // 'c'

// 26. Rotate Array by K Steps
function rotateArray(arr, k) {
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
}
// console.log(rotateArray([1,2,3,4,5],2)); // [4,5,1,2,3]

// 27. Find Sum of All Odd Numbers
function sumOdd(arr) {
    return arr.filter(x => x % 2 !== 0).reduce((a,b) => a+b,0);
}
// console.log(sumOdd([1,2,3,4])); // 4

// 28. Check if Two Arrays are Equal
function arraysEqual(a, b) {
    return a.length === b.length && a.every((v,i) => v === b[i]);
}
// console.log(arraysEqual([1,2,3],[1,2,3])); // true

// 29. Find the Power of a Number
function power(x, y) {
    return Math.pow(x, y);
}
// console.log(power(2,3)); // 8

// 30. Find the Median of an Array
function median(arr) {
    arr = arr.slice().sort((a,b) => a-b);
    let mid = Math.floor(arr.length/2);
    return arr.length % 2 !== 0 ? arr[mid] : (arr[mid-1]+arr[mid])/2;
}
// console.log(median([1,2,3,4,5])); // 3

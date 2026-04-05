
// Function to check if a string is a palindrome
// A palindrome is a word that reads the same forwards and backwards (e.g., 'madam')
function ispalindrome(str){
    // Reverse the string by splitting into an array, reversing, and joining back
    let rev = str.split('').reverse().join('');
    // Compare the original string with the reversed string
    if(str == rev){
        return true; // It's a palindrome
    }else{
        return false; // Not a palindrome
    }
}

// Test the function with the word 'madam'
let text = ispalindrome('madam');
console.log(text); // Output: true
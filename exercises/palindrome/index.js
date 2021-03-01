// Given a str, return true if the string is a palindrome or false if it is not 
// Palindrome: str that form the same word if it is reversed (includes spaces & punctuation)
// E.g.: palindrome("abba") === true
// E.g.: palindrome("abcdefg") === false

// SOLUTION 1: 
function palindrome(str) {
    let reversedStr = str.split("").reverse().join("")
    return str === reversedStr
}

// SOLUTION 2:
// function palindrome(str) {
    
// }

// SOLUTION 3:
// function palindrome(str) {
    
// }

module.exports = palindrome;

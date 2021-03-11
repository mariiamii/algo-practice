/* Directions:
Given a str, return true if the string is a palindrome or false if it is not 
Palindrome: str that form the same word if it is reversed (includes spaces & punctuation)
palindrome("abba") === true
palindrome("abcdefg") === false
*/

// SOLUTION 1: 
function palindrome(str) {
    let reversedStr = str.split("").reverse().join("")
    return str === reversedStr
}

// SOLUTION 2:
function palindrome(str) {
    return str.split("").every((char, i) => char === str[str.length - i - 1])
}

/* Explanation:
.every(): used to do a boolean check on every element in an arr
str.length-i ensures the decrementing loop
Note: not the best solution b/c it's needlessly comparing twice as much as it needs to
*/

module.exports = palindrome;

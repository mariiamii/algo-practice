// Given a str, return true if the string is a palindrome or false if it is not 
// Palindrome: str that form the same word if it is reversed (includes spaces & punctuation)
// E.g.: palindrome("abba") === true
// E.g.: palindrome("abcdefg") === false

function palindrome(str) {
    reversedStr = str.split("").reduce((newStr, char) => char + newStr, "")
    if (str === reversedStr)
        return true
    else
        return false
}

module.exports = palindrome;

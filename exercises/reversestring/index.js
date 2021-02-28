// Given a str, return a new str w/ the reversed order of characters
// E.g.: reverse("apple") === "elppa"

// SOLUTION 1: built-in fn's
function reverse(str) {
    return str.split("").reverse().join("")
}
reverse("apple")
// Explanation:
// .split() returns substrings into a new arr: ["a","p","p","l","e"]
// .reverse() reverses an arr: ["e","l","p","p","a"]
// .join() returns a string of concatenated arr elements: elppa

// SOLUTION 2: decrementing for loop
function reverse(str) {
    let newStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
    }
    return newStr
}
reverse("apple")
// Explanation:
// i = 5-1 = 4; "" + apple[4] = "e"
// i = 4-1 = 3; "" + apple[3] = "el"
// i = 3-1 = 2; "" + apple[2] = "elp"
// i = 2-1 = 1; "" + apple[1] = "elpp"
// i = 1-1 = 0; "" + apple[0] = "elppa"

// SOLUTION 2.1: ES6 syntax
function reverse(str) {
    let newStr = ""
    for (let character of str) {
        newStr = character + newStr // note: not the same as newStr = newStr + character (incrementing)
    }
    return newStr
}
reverse("apple")

// SOLUTION 3: built-in fn's w/ ES6
function reverse(str) {
    return str.split("").reduce((newStr, char) => char + newStr, "")
}
reverse("apple")
// Explanation:
// str.split("") turns the str into an arr of elements ["a", "p", "p", "l", "e"]
// .reduce(): executes a reducer fn (that you provide) on each element of the arr, returning a single value
// "" is the starting initial value; newStr
// char + newStr = "a" + "" = "a"
// char + newStr = "p" + "a" = "pa"
// char + newStr = "p" + "pa" = "ppa"
// char + newStr = "l" + "ppa" = "lppa"
// char + newStr = "e" + "lppa" = "elppa"

// SOLUTION 4: recursion
function reverse(str) {
    if (str === "")
        return ""
    else
        return reverse(str.substr(1)) + str.charAt(0)
}
reverse("hello")
// Explanation:
// substr(): returns the characters in a str beg at the specified *location* through the specified # of characters
// charAt(): returns the character at the specified *index* from a str

// 1) reverse("hello") returns reverse("hello".substr(1)) + str.charAt(0) => reverse("ello") + "h" = "olle" + "h"
// 2) reverse("ello") returns reverse("ello".substr(1)) + str.charAt(0) => reverse("llo") + "e" = "oll" + "e"
// 3) reverse("llo") returns reverse("llo".substr(1)) + str.charAt(0) => reverse("lo") + "l" = "ol" + "l"
// 4) reverse("lo") returns reverse("lo".substr(1)) + str.charAt(0) => reverse("o") + "l" = "o" + "l"
// 5) reverse("o") returns reverse("o".substr(1)) + str.charAt(0) => reverse("") + "o" = "o"

// The method hits the if condition and the most highly nested call returns immediately

module.exports = reverse;

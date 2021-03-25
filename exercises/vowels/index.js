/* Directions:
Write a fn that returns the # of vowels used in a string. Vowels are the characters 'a', 'e', 'i', 'o', and 'u'.

vowels('Hi There!') --> 3
vowels('Why do you ask?') --> 4
vowels('Why?') --> 0
*/

// SOLUTION 1: iteration
function vowels(str) {
        let checker = ["a", "e", "i", "o", "u"]
        let arr = []

    for (let char of str.toLowerCase()) {
        for (let i = 0; i < checker.length; i++) {
            if (char === checker[i]) {
                arr.push(char)
            }
        }
    }

    return arr.length
}

// SOLUTION 1.1: iteration w/ count
function vowels(str) {
    let checker = ["a", "e", "i", "o", "u"]
    let count = 0

    for (let char of str.toLowerCase()) {
        if (checker.includes(char)) {
            count++
        }
    }

    return count
}

// SOLUTION 2: regular expression


module.exports = vowels;

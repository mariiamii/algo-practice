/* Directions:
Write a fn that returns the # of vowels used in a string. Vowels are the characters 'a', 'e', 'i', 'o', and 'u'.

vowels('Hi There!') --> 3
vowels('Why do you ask?') --> 4
vowels('Why?') --> 0
*/

// SOLUTION 1: iteration
function vowels(str) {
    let vowels = ["a", "e", "i", "o", "u"]
    let arr = []

    for (let char of str.toLowerCase()) {
        for (let i = 0; i < vowels.length; i++) {
            if (char === vowels[i]) {
                arr.push(char)
            }
        }
    }

    return arr.length
}

/* Explanation

*/

// SOLUTION 2: regular expression

module.exports = vowels;

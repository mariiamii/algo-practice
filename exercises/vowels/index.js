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
        if (checker.includes(char)) { //.includes works on arr & str
            count++
        }
    }

    return count
}

// SOLUTION 2: regular expression (regex)
function vowels(str) {
    let matches = str.match(/[aeiou]/gi)
    return matches ? matches.length : 0
}

/* Explanation:
.match(): used to see if some possible thing in the w/in the () is included in the str

regex: /[aeiou]/gi
[]    =>  does a search for any characters (like aeiou) in a str
g     =>  does a global match (find all matches rather than stopping after the 1st match)
i     =>  does a case-insensitive search

.match() will return a null if no matches are found, and an array of all matches if matches are found
You need a ternary exp in the case that it's a null
*/

module.exports = vowels;

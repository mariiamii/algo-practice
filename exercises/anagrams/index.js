/* Directions:
Check to see if 2 provided strings are anagrams of each other
Anagram: a word, phrase, or name formed by rearranging the letters of another. Only consider characters, not spaces, punctuation, or capitalization

anagrams("rail safety", "fairy tales") --> True
anagrams("RAIL! SAFETY!", "fairy tales") --> True
anagrams("Hi there", "Bye there") --> False
*/

function anagrams(stringA, stringB) {
    let charMapA = buildCharMap(stringA)
    let charMapB = buildCharMap(stringB)

    if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
        return false
    } 

    for (let key in charMapA) {
        if (charMapA[key] !== charMapB[key]) { //values don't equal
            return false
        } else {
            return true
        }
    }
}

// Create a helper fn instead of 2 charMap loops; DRY:
function buildCharMap(str) {
    let charMap = {}

    for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1
    }

    return charMap
}

module.exports = anagrams;

/* Explanation:
str = "hey there!"
str.replace(/\s/g, " ") //=> "heythere"; \s is the regex for "whitespace", and g is the "global" flag, meaning match ALL \s (whitespaces)


*/
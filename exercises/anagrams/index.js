/* Directions:
Check to see if 2 provided strings are anagrams of each other
Anagram: a word, phrase, or name formed by rearranging the letters of another. Only consider characters, not spaces, punctuation, or capitalization

anagrams("rail safety", "fairy tales") --> True
anagrams("RAIL! SAFETY!", "fairy tales") --> True
anagrams("Hi there", "Bye there") --> False
*/

function anagrams(stringA, stringB) {
    let cleanerA = stringA.replace(/[^\w]/g, "").toLowerCase()
    let cleanerB = stringB.replace(/[^\w]/g, "").toLowerCase()

    let arrA = cleanerA.split("")
    let arrB = cleanerB.split("")

    let objA = {}
    let objB = {}

    arrA.forEach(char => {
        objA[char] = objA[char] + 1 || 1
    })

    arrB.forEach(char => {
        objB[char] = objB[char] + 1 || 1
    })

    if (arrA.length != arrB.length) {
        return false
    } else if (Object.keys(objA) === Object.keys(objB) && Object.values(objA) === Object.values(objB)) {
        return true
    } else {
        return false
    }
}

module.exports = anagrams;

/* Explanation:
str = "hey there!"
str.replace(/\s/g, " ") //=> "heythere"; \s is the regex for "whitespace", and g is the "global" flag, meaning match ALL \s (whitespaces)


*/
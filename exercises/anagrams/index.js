/* Directions:
Check to see if 2 provided strings are anagrams of each other.
Anagram: a word, phrase, or name formed by rearranging the letters of another. Only consider characters; not spaces, punctuation, or capitalization.

anagrams("rail safety", "fairy tales") --> True
anagrams("RAIL! SAFETY!", "fairy tales") --> True
anagrams("Hi there", "Bye there") --> False
*/

// SOLUTION 1:
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

// SOLUTION 2: regular expression (regex)
function anagrams(stringA, stringB) {
    return cleanStr(stringA) === cleanStr(stringB)
}

function cleanStr(str) {
    return str.replace(/\W/g, "").toLowerCase().split("").sort().join("")
}

/* Explanation (on RegEx); sources: https://regexr.com/ & https://www.w3schools.com/jsref/jsref_obj_regexp.asp & https://www.youtube.com/watch?v=rhzKDrUiJVk:
str = "hey there!"
str.replace(/[^\w]/g, "") //=> "heythere"

\w    =>  used to find a word character (a character from a-z, A-Z, 0-9, including the underscore)
[^]   =>  used to find any character NOT between the brackets, in this case, anything that isn't a word character (i.e. spaces & punctuation)
g     =>  does a global match (find all matches rather than stopping after the 1st match)
""    =>  replace all matches with empty str

Could've also just used \W:
.replace(/\W/g, "")
\W    =>  used to do a global search for non-word characters in a str
*/

module.exports = anagrams;

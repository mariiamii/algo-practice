/* Directions:
Given a str, return the character that is most commonly used in the str
maxChar("abcccccccd") === "c"
maxChar("apple 1231111") === "1"
*/

// SOLTUION 1:
function maxChar(str) {
    let charMap = {}
    let charsArr = str.split("")

    charsArr.forEach(char => {
        charMap[char] = charMap[char] + 1 || 1
    })

    return Object.keys(charMap).reduce((a, b) => charMap[a] > charMap[b] ? a : b)
}

// SOLUTION 2:
function maxChar(str) {
    let charMap = {}
    let max = 0
    let maxChar = ""

    for (let char of str) { //for...of is for iterating over arrays
        if (charMap[char]) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }

    for (let char in charMap) { //for...in is for iterating over objects
        if (charMap[char] > max) {
            max = charMap[char]
            maxChar = char
        }
    }

    return maxChar
}

/* Explanation:
1) Create a new obj
2) Iterate through the str
3) For every char, add the char to the new obj
4) Either assign it a value of 1 or if it already exists, increment the value by 1
5) Several ways to add the chars to the obj: 
    1) .forEach
    let charsArr = str.split("")
    
    charsArr.forEach(char => {
        charMap[char] = charMap[char] + 1 || 1
    })

    2) if...else w/in for...of
    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }

    3) Conditional w/in for...of
    for (let char of str) {
        charMap[char] = charMap[char] + 1 || 1 // why not ++ instead of charMap[char] + 1?
    }

    4) Ternary w/in for...of
    for (let char of str) {
        charMap[char] ? charMap[char]++ : charMap[char] = 1
    }
6) Iterate through charMap obj and return the char that is most frequently used
*/ 

module.exports = maxChar;

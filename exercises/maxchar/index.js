// Given a str, return the character that is most commonly used in the str
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let charMap = {}
    let charsArr = str.split("")

    charsArr.forEach(char => {
        charMap[char] = charMap[char]+1 || 1
    })

    // for (let char of str) {
        // works:
        // if (charMap[char]) {
        //     charMap[char]++
        // } else {
        //     charMap[char]=1
        // }

        // works:
        // charMap[char] = charMap[char]+1 || 1 // why not ++ instead of charMap[char]+1

        // ternary:
        // charMap[char] ? charMap[char]++ : charMap[char]=1
    // }
    console.log(charMap)
}
/* Explanation:
1) Create a new obj
2) Iterate through the str
3) For every char, add the char to the new obj
4) Either assign it a value of 1 or if it already exists, increment the value by 1
5) Several ways to add the chars to the obj: 1) split the str into an arr & use .forEach to loop over all the chars, 2) for of loop (like above)
*/ 

module.exports = maxChar;

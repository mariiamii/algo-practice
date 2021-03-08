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


module.exports = maxChar;

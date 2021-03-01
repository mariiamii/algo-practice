// Given an int, return an int that is the reverse ordering of #'s
// reverseInt(15) === 51
// reverseInt(-90) === -9
// reverseInt(500) === 5

function reverseInt(n) {
    let str = n.toString()
    let reversed = str.split("").reverse().join("")
    let parsed = parseInt(reversed)
    return Math.sign(n) * parsed
}
// reverseInt(-220)
// Explanation:
// .toString():
// .parseInt():
// Math.sign:


module.exports = reverseInt;

// str = n.toString()
// reversed = str.split("").reverse().join("")
// parsed = parseInt(reversed)
// return Math.sign(n) * parsed
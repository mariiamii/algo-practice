/* Directions:
Given an int, return an int that is the reverse ordering of #'s
reverseInt(15) === 51
reverseInt(-90) === -9
reverseInt(500) === 5
*/

function reverseInt(n) {
    let reversed = n.toString().str.split("").reverse().join("")
    return Math.sign(n) * parseInt(reversed)
}

/* Explanation:
.toString(): returns a str representing the object
.parseInt(): parses a str arg & returns an int
Math.sign(): returns either +/- 1, indicating the sign of a # passed into the arg
*/

module.exports = reverseInt;

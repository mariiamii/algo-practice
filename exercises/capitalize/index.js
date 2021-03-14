/* Directions:
Write a fn that accepts a str.  The fn should capitalize the 1st letter of each word in the str & then return the capitalized str

capitalize('a short sentence') --> 'A Short Sentence'
capitalize('a lazy fox') --> 'A Lazy Fox'
capitalize('look, it is working!') --> 'Look, It Is Working!'
*/

// SOLUTION 1:
function capitalize(str) {
    let capArr = []

    str.split(" ").forEach(word => {
        capArr.push(word[0].toUpperCase() + word.slice(1))
    })

    return capArr.join(" ")
}

// SOLUTION 2:
function capitalize(str) {
    let capStr = str[0].toUpperCase() //important b/c the below loop could not address the 1st word capitalization

    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === " ") { //if there's space to the left of the character
            capStr += str[i].toUpperCase() //then capitalize it and join it w/ capStr
        } else {
            capStr += str[i]
        }
    }

    return capStr
}

module.exports = capitalize;

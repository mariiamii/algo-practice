/* Directions:
Write a fn that accepts a str.  The fn should capitalize the 1st letter of each word in the str & then return the capitalized str

capitalize('a short sentence') --> 'A Short Sentence'
capitalize('a lazy fox') --> 'A Lazy Fox'
capitalize('look, it is working!') --> 'Look, It Is Working!'
*/

function capitalize(str) {
    let capitalizedArr = []

    for (let word of str.split(" ")) {
        let capitalizedWord = word[0].toUpperCase() + word.slice(1)
        capitalizedArr.push(capitalizedWord)
    }
    return capitalizedArr.join(" ")
}

module.exports = capitalize;

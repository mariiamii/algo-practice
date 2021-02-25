// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// let str = 'apple'

function reverse(str) {
    reversedStr = str.split('').reverse().join('')
    return reversedStr
    // .split(''): ['a','p','p','l','e']
    // .reverse(): ['e','l','p','p','a']
    // .join(''): elppa
}

module.exports = reverse;

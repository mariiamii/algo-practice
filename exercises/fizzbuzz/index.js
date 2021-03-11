/* Directions:
Console log #'s from 1 - n
For multiples of 3, print “fizz” instead of the #
For multiples of 5, print “buzz” instead of the #
For multiples of 3 and 5, print “fizzbuzz”

fizzBuzz(5);
1
2
fizz
4
buzz
*/

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz")
        } else if (i % 3 === 0) {
            console.log("fizz")
        } else if (i % 5 === 0) {
            console.log("buzz")
        } else {
            console.log(i)
        }
    }
}

module.exports = fizzBuzz;

/* Directions:
Write a fn that accepts a positive # N. The fn should console.log() a step shape w/ N levels using the # char. Make sure the step has spaces on the right hand side! Note: the # implies the # of lines

steps(2)
    '# ' //pay attention to the # of spaces after #
    '##'
steps(3)
    '#  '
    '## '
    '###'
steps(4)
    '#   '
    '##  '
    '### '
    '####'
*/

// SOLUTION 1: iteration
function steps(n) {
    for (let row = 0; row < n; row++) { //iterate through rows
        let stair = ""

        for (let column = 0; column < n; column++) { //iterate through columns
            if (column <= row) {
                stair += "#"
            } else {
                stair += " "
            }
        }

        console.log(stair) //console.log() must be inside the 1st for loop
    }
}

/* Explanation:
1) Iterate through rows (0-n)
    1) Create an empty str, "stair"
    2) Iterate through columns (0-n)
        1) If the current column is less than or equal to the current row
            Add a "#" to the "stair"
        2) Else
            Add a space to "stair"
    3) Console.log("stair")
*/

// SOLUTION 2: recursion
function () {

}

/* Explanation:
function printNumber(n) {
    if (n === 0) {
        return;
    }

    console.log(n)
    printNumber(n - 1)
}

printNumber(10)

1) Figure out the bare minimum pieces of info to represent your problem
2) Give reasonable defaults to the bare minimum pieces of info
3) Check the base case. Is there any work left to do? If not, return
4) Do some work. Call your fn again, making sure the arguments have changed in some fashion
*/


module.exports = steps;

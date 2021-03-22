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

// SOLUTION 1:
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

module.exports = steps;

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

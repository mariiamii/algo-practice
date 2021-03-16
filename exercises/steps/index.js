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
    
    for (let i = 0; i < n; i++) { //iterate through rows
        let stair = ""

        for () { //iterate through columns
            if () {
    
            } else {
                stair += "#"
            }

        }
    }
    console.log(stair)
}

module.exports = steps;

/* Explanation:
1) Iterate through rows (0-n)
    1) Create an empty str, "stair"
    2) Iterate through columns (0-n)
        1) If the current column is equal to or less than the current row
            Add a "#" to the "stair"
        2) Else
            Add a spcase to "stair"
    3) Console.log("stair")
*/
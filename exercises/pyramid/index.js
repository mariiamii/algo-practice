/* Directions:
Write a fn that accepts a positive number N. The fn should console.log() a pyramid shape with N levels using the # char. Make sure the pyramid has spaces on both the left *and* right hand sides.

pyramid(1)
    '#'
pyramid(2)
    ' # '
    '###'
pyramid(3)
    '  #  '
    ' ### '
    '#####'
*/

// SOLUTION 1:
function pyramid(n) {
    let midpoint = Math.floor((2 * n - 1) / 2)

    for (let row = 0; row < n; row++) {
        let level = ""

        for (let column = 0; column < 2 * n - 1; column++) {
            if (column >= midpoint - row && column <= midpoint + row) {
                level += "#"
            } else {
                level += " "
            }
        }

        console.log(level)
    }
}

// SOLUTION 2:


/* Explanation:
1) Iterate through rows (0 - n)
    1) Create an empty str, "level"
    2) Iterate through columns (0 - (2 * n - 1))
        1) If the current column should have a "#"
            Add a "#" to the "level"
        2) Else
            Add a space to "level"
    3) Console.log("level")
*/

module.exports = pyramid;

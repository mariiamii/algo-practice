/* Directions:
Write a fn that accepts an integer N & returns a NxN spiral (clock-wise) matrix.

matrix(2)
    [[1, 2],
    [4, 3]]
matrix(3)
    [[1, 2, 3],
    [8, 9, 4],
    [7, 6, 5]]
matrix(4)
    [[1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7]]
*/

function matrix(n) {
    let results = Array.from(Array(n), () => new Array())
    let counter = 1
    let startColumn = 0
    let endColumn = n - 1
    let startRow = 0
    let endRow = n - 1

    while (startColumn <= endColumn && startRow <= endRow) {
        // Top row
        for (let i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = counter
            counter++
        }
        startRow++

        // Right column
        for (let i = startRow; i <= endRow; i++) {
            results[i][endColumn] = counter
            counter++
        }
        endColumn--

        // Bottom row
        for (let i = endColumn; i >= startColumn; i--) {
            results[endRow][i] = counter
            counter++
        }
        endRow--

        // Left column
        for (let i = endRow; i >= startRow; i--) {
            results[i][startColumn] = counter
            counter++
        }
        startColumn++
    }

    return results
}

/* Explanation:
√1) Create an empty array of arrays called "results"
    let results = []

    for(let i = 0; i < n; i++) {
        results.push([])
    }
√2) Create a counter variable, starting at 1
√3) As long as (startColumn <= endColumn) AND (startRow <= endRow)
    √1) Loop from startColumn to endColumn
        √1) At results[startRow][i], assign counter variable
        √2) Increment counter
    √2) Increment startRow
    √3) Loop from startRow to endRow
        √1) At results[i][endColumn], assign counter variable
        √2) Increment counter
    √4) Decrement endRow
    ...repeat for other two sides
*/

module.exports = matrix;

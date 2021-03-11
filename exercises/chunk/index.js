// Given an arr & chunk size, divide the arr into many subarrays, where each subarray is of length size
// In the below eg, 2 is the # of elements per chunk, not the total # of chunks
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// SOLUTION 1:
function chunk(array, size) {
    let chunked = []
    
    array.forEach(ele => {
        let lastChunk = chunked[chunked.length - 1]

        if (!lastChunk || lastChunk.length === size) {
            chunked.push([ele])
        } else {
            lastChunk.push(ele)
        }
    })

    return chunked
}

/* Explanation:
1) Create an empty arr to hold the "chuncked" chunks
2) For each ele in the "unchunked" arr (iteration):
    1) Retrieve the last ele in "chunked"
    2) If the last ele does not exist, or if the last chunk's (sub-arr) length is equal to the chunk size, push a new chunk (sub-arr) into "chunked" w/ the current ele that you're iterating over
    3) Else, add the current ele into the chunk
*/

// SOLUTION 2:
function chunk(array, size) {
    let chunked = []
    let i = 0

    while (i < array.length) {
        chunked.push(array.slice(i, i += size))
    }

    return chunked
}

/* Explanation:
1) Create an empty arr to hold the "chuncked" chunks
2) Set "index" variable equal to 0
3) While index is less than array.length (iteration):
    1) .slice(startIndex, endIndex): returns a slice of the array (1st arg includes ele, 2nd arg does not include ele);makes a copy, not destroys original array. E.g. array.slice(0,2)
    2) Need to add "size" to "index" (i += size). E.g. array.slice(2,4)
    1) Push the slice into "chunked"
*/

module.exports = chunk;

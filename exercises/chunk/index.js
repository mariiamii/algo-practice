// Given an arr & chunk size, divide the arr into many subarrays, where each subarray is of length size
// In the below eg, 2 is the # of elements that go into each chunk, not the total # of chunks
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let chunked = []
    
    array.forEach(ele => {
        let lastEle = chunked[chunked.length - 1]

        if (!lastEle || lastEle.length === size) {
            chunked.push([ele])
        } else {
            lastEle.push(ele)
        }
    })
    
    return chunked
}

/* Explanation:
1) Create an empty arr to hold the "chuncked" chunks
2) For each ele in the "unchunked" arr (iteration):
    1) Retrieve the last ele in "chunked"
    2) If the last ele does not exist, or if the chunk's (sub-arr) length is equal to the chunk size, push a new chunk (sub-arr) into "chunked" w/ the current ele that you're iterating over
    3) Else, add the current ele into the chunk
*/

module.exports = chunk;

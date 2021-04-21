/* 
Runtime complexity: describes the performance/efficiency of an algorithm
- Means: how much more processing power/time is required to run an algorithm if you double the inputs?
- Used to compare dif solutions/algorithms to a given problem
- Given a problem -> solve it -> what is the runtime complexity of the solution you just did?

Common runtime complexities: 
1) Constant time: 1
No matter what input you give to the algo/how many elements you're working w/, it will always take the same amount of time to execute; the holy grail; most effecient

2) Logarithmic time: log(n)
Doubling the # of elements you're iterating over doesn't double the amount of time to execute; always assume that *searching* operations are log(n)

3) Linear time: n
Adding 1 element to the input set adds 1 unit of more time to execute; always assume that any iteration of elements in a collection of data is a linear time (e.g., for loop spanning from 0 to array.length)

4) Quasilinear time: n * log(n)
Adding 1 element to the input set adds 1 + a little bit of more time to execute; always assume that *sorting* operations are n*log(n)

5) Quadratic time: n ^ 2
Every element in a collection has to be compared to every other element; "the handshake problem" (a person enters a room full of people and therefore will need to shake everyone's hand)

6) Exponential time: 2 ^ n
If you add a *single* element to a collection, the processing power required doubles; ineffecient


Big "O" Notation: another way of referencing runtime complexity
- Given a problem -> solve it -> what is the "big O" of the solution you just did?

O(n)    ->  Linear
O(1)    ->  Constant
O(n^2)  ->  Quadratic

Identifying runtime complexity:

*/

//EX 1: Reverse string
function reverse(str) {
    let newStr = ""
    
    for (let character of str) {
        newStr = character + newStr
    }
    
    return newStr
}

/* Conclusion: 
abc -> cba
abcdefg -> gfedcba

Each additional character to the input str = an additional loop/step (1:1 relationship)
"N", or "linear" runtime
*/

//EX 2: Steps
function steps(n) {
    for (let row = 0; row < n; row++) {
        let stair = ""

        for (let column = 0; column < n; column++) {
            if (column <= row) {
                stair += "#"
            } else {
                stair += " "
            }
        }

        console.log(stair)
    }
}

/* Conclusion:
When n = 2, you have to do 4 things
When n = 3, you have to do 9 things
When n = 4, you have to do 16 things

As "n" is increased by 1, you have to do n*n things
"N^2", or "quadratic" runtime
*/

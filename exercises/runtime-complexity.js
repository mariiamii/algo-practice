/* 
Runtime complexity: describes the performance of an algorithm
- Means: how much more processing power/time is required to run an algorithm if you double the inputs?
- Used to compare dif solutions/algorithms to a given problem
- Given a problem -> solve it -> what is the runtime complexity of the solution you just did?

Common runtime complexities: 
1) Constant time: 1
No matter how many elements you're working with, the algorithm will always take the same amount of time

2) Logarithmic time: log(n)
You have this if doubling the number of elements you are iterating over doesn't double the amount of work. Always assume that searching operations are log(n)

3) Linear time: n
Iterating through all elements in a collection of data. If you see a for loop spanning from 0 to array.length, you probably have "n", or linear runtime

4) Quasilinear time: n * log(n)
You have this if doubling the number of elements you are iterating over doesn't double the amount of work. Always assume that any sorting operation is n*log(n)

5) Quadratic time: n ^ 2
Every element in a collection has to be compared to every other element. "The handshake problem"

6) Exponential time: 2 ^ n
If you add a *single* element to a collection, the processing power required doubles

EX 1: Reverse string
function reverse(str) {
    let newStr = ""
    
    for (let character of str) {
        newStr = character + newStr
    }
    
    return newStr
}

Conclusion: 
abc -> cba
abcdefg -> gfedcba

Each additional character to the input str = an additional loop/step (1:1 relationship)
"N", or "linear" runtime

EX 2: Steps
function steps(n) {
    for (let row = 0; row < n; row++)
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

Conclusion:
When n = 2, you have to do 4 things
When n = 3, you have to do 9 things
When n = 4, you have to do 16 things

As "n" is increased by 1, you have to do n*n things
"N^2", or "quadratic" runtime
*/

/* 
Runtime complexity: describes the performance of an algorithm
- Means: how much more processing power/time is required to run an algorithm if you double the inputs?
- Used to compare dif solutions/algorithms to a given problem
- Given a problem -> solve it -> what is the runtime complexity of the solution you just did?

Ex 1: Reverse string
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

Ex 2: Steps
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

As "n" is increased by 1, you have to do n*n/n^2 things
"Quadratic" runtime
*/
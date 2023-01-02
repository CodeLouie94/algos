/* 
Write a program that will calculate the number of trailing zeros in a factorial of a given number.

N! = 1 * 2 * 3 * ... * N

Be careful 1000! has 2568 digits...

For more info, see: http://mathworld.wolfram.com/Factorial.html

Examples
zeros(6) = 1
# 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

zeros(12) = 2
# 12! = 479001600 --> 2 trailing zeros
*/


function zeros(n) {
    // your code here  
    if (n == 0 && n == 1) {
        return 0
    }
    let total = 1
    for (let i = 1; i <= n; i++) {
        total *= i
    }
    total = total.toString()

    let pointer = total.length - 1
    let trail = 0
    while (total[pointer] == 0) {
        trail++
        pointer--
    }
    return trail
}

console.log(zeros(5))


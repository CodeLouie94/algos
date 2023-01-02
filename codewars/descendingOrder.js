/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

function descendingOrder(n) {
    if (n.toString().length === 1) {
        return n
    }
    let num = n.toString()
    let result = ""
    while (num.length > 0) {
        let highest = 0
        for (let i = 0; i < num.length; i++) {
            if (+num[i] > highest) {
                highest = +num[i]
            }
        }
        result += highest
        num = num.replace(highest.toString(), "")
    }
    return +result
}


//or

function descendingOrder(n) {
    return parseInt(String(n).split('').sort().reverse().join(''))
}
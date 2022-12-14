/**
 * Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
 */

function digitize(n) {
    let num = n.toString()
    if (num.length == 1) {
        return [+n]
    }
    let result = []
    for (let i = num.length - 1; i > -1; i--) {
        result.push(+num[i])
    }
    return result
}

//or

function digitize(n) {
    return String(n).split('').map(Number).reverse()
}
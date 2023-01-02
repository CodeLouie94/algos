// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x) {
    let result = 0
    let newArr = []
    for (let i = 0; i < x.length; i++) {
        if (typeof x[i] == "string") {
            newArr.push(Number(x[i]))
        } else {
            newArr.push(x[i])
        }
    }
    for (let j of newArr) {
        result += j
    }
    return result
}
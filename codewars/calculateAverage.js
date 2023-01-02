/**
 * Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
 */

function findAverage(array) {
    if (array.length < 1) {
        return 0
    }
    let avg = 0
    const formula = array.filter(num => avg += num)
    avg /= array.length
    return avg;
}
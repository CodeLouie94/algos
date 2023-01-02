/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
 */

function findShort(s) {
    let arr = s.split(" ")
    let smallestLength = arr[0].length
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length < smallestLength) {
            smallestLength = arr[i].length
        }
    }
    return smallestLength
}
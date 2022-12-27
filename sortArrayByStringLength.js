// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.


function sortByLength(array) {
    // Return an array containing the same strings, ordered from shortest to longest
    let table = {}
    let result = []
    for (let word of array) {
        table[word] = word.length
    }
    let currentLength = 0
    let currentWord

    while (result.length < array.length) {
        currentWord = Object.keys(table).find(key => table[key] === currentLength)
        if (currentWord !== undefined) {
            result.push(currentWord)
        }
        currentLength++
    }
    return result
};

//or

function sortByLength(array) {
    return array.sort((a, b) => a.length - b.length);
};
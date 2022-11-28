/**
 * Moving Zeros To The End
158541589% of 9,47252,732 of 116,731xcthulhu5 Issues Reported
JavaScript
Node v14.x
VIM
EMACS
Instructions
Output
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
 */


function moveZeros(arr) {
    let toAddZerosWith = arr.length
    arr = arr.filter(i => i !== 0)

    toAddZerosWith -= arr.length
    while (toAddZerosWith > 0) {
        arr.push(0)
        toAddZerosWith--
    }
    return arr
}

//or

var moveZeros = function (arr) {
    return arr.filter(function (x) { return x !== 0 }).concat(arr.filter(function (x) { return x === 0; }));
}

//or
function moveZeros(arr) {
    return arr.filter(i => i !== 0).concat(arr.filter(j => j === 0))
}
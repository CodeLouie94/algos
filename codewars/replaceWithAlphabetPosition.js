/**
 * Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
 */

function alphabetPosition(text) {
    let result = ""
    let table = {
        "a": 1, "k": 11, "u": 21,
        "b": 2, "l": 12, "v": 22,
        "c": 3, "m": 13, "w": 23,
        "d": 4, "n": 14, "x": 24,
        "e": 5, "o": 15, "y": 25,
        "f": 6, "p": 16, "z": 26,
        "g": 7, "q": 17,
        "h": 8, "r": 18,
        "i": 9, "s": 19,
        "j": 10, "t": 20,
    }

    for (let letter of text) {
        letter = letter.toLowerCase()
        if (table.hasOwnProperty(letter) == true) {
            result += table[letter]
            result += " "
        }
    }
    result = result.slice(0, -1)
    return result
}
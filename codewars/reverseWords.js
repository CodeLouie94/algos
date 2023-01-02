function reverseWords(str) {
    // Go for it
    let result = []
    let arr = str.split(" ")
    for (let word of arr) {
        word = word.split("").reverse().join("")
        result.push(word)
    }
    return result.join(" ")
}
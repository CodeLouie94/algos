/**
 * Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"
 */

function spinWords(string) {
    let wordArr = []
    let word = ""
    for (let i = 0; i < string.length; i++) {
        if (string[i] != " " && i != string.length-1) {
            word += string[i]
            
        } else if(string[i] == " ") {
            wordArr.push(word)
            word = ""
        }else if(i == string.length-1){
            word += string[i]
            wordArr.push(word)
            word = ""
        }
    }
    for(let j = 0; j<wordArr.length; j++){
        if(wordArr[j].length>=5){
            newWord = wordArr[j].split("")
            newWord.reverse()
            newWord = newWord.join("")
            wordArr[j] = newWord
        }
    }
    return wordArr.join(" ")
}


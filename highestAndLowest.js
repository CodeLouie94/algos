// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.


function highAndLow(numbers) {
    let highest = null
    let lowest = null
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] == "-") {
            let thisNegativeNum = parseInt(numbers[i] + numbers[i + 1])
            if (highest == null && lowest == null) {
                highest = thisNegativeNum
                lowest = thisNegativeNum
            } else {
                if (thisNegativeNum >= highest) {
                    highest = thisNegativeNum
                } if (thisNegativeNum <= lowest) {
                    lowest = thisNegativeNum
                }
            }
            i++
        }
        if(numbers[i] != "-" && numbers[i] != " "){
            let digitCount = 0
            let thisNum = parseInt(numbers[i])
            while(numbers[i] != " "){
                thisN
                thisNum += numbers[i]
                digitCount+1;
                i++
            }
        }





        if (numbers[i] != " " && numbers[i] != "-") {
            if (highest == null && lowest == null) {
                highest = parseInt(numbers[i])
                lowest = parseInt(numbers[i])
            } else {
                
                if (thisNum >= highest) {
                    highest = thisNum
                } if (thisNum <= lowest) {
                    lowest = parseInt
                }
            }
        }
    }
    result = String(highest) + " " + String(lowest)
    return result 
}


console.log(highAndLow("1 2 -3 4 5"))
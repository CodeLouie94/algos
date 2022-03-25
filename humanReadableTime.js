/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)
*/

function humanReadable(seconds) {
    let HH = ""
    let MM = ""
    let SS = ""
    let remainder = 0
    if (seconds / 3600 >= 1) {
        remainder = seconds % 3600;
        HH = Math.floor(seconds / 3600)
        HH = "" + HH
        if (HH.length == 1) {
            HH = "0" + HH
        }
    } else {
        HH = "00"
        remainder = seconds
    }
    if (remainder / 60 >= 1) {
        MM = Math.floor(remainder / 60)
        remainder = remainder % 60;
        MM = "" + MM
        if (MM.length == 1) {
            MM = "0" + MM
        }
    } else {
        MM = "00"
    }
    if (remainder == 0) {
        SS = "00"
    } else {
        SS = remainder
        SS = "" + SS
        if (SS.length == 1) {
            SS = "0" + SS
        }
    }
    return HH + ":" + MM + ":" + SS;
}


console.log(humanReadable(260465))
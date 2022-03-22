//Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
    let newStr = ""
    for(let i = 0; i < str.length; i++){
      if(str[i].toUpperCase() != "A" &&
        str[i].toUpperCase() != "E" &&
        str[i].toUpperCase() != "I" &&
        str[i].toUpperCase() != "O" &&
        str[i].toUpperCase() != "U"){
         newStr += str[i];
         }
    }
    str = newStr;
    return str;
  }

console.log(disemvowel("edrDHQQ"))
console.log(disemvowel("ABhUGDYvPflc PWQAZqexKtpIi MpAVXr OfiLatiAtzxugiOrUIw PAEreXCKyIpwSEAb MOuTsCZkvHe xazEJT"))
//TODO fill in comment template
/*
Description:  a program that takes a string as input and counts how many of each character are in that string.
Input: a string
Output: list of how many times a character is present in a string
Usage: node 5-character-count <string>
*/

// get input using getargs
const getargs = require("../modules/getargs");
let input = getargs.getStringArg();

if (!input) {
  console.log('node 5-character-count <string>')
}

else {
  let charCount = {};
  let characters = input.split('');

 for(let character of characters)/*shorthand of i statement*/{
   if(charCount[character]){
     charCount[character]++;
   }
   
   else{
     charCount[character] = 1;
   }

 }  

 
 let charArr = []

  for (let character in charCount) {
    let newElem = {char:character, count:charCount[character]};
    charArr.push(newElem)
  }

  charArr.sort(function (a,b){
    return a.count - b.count;
  })

  for(let i=0; i < charArr.length; i++){
    console.log(`${charArr[i].char}: ${charArr[i].count}`) 
  }

  
}


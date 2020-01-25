/*
Description:a program that counts from 1 to a given integer, printing out _fizz_ if the number is divisble by 3, _buzz_ if it is divisible by 5, and _fizzbuzz_ if it is divisible by both 3 and 5.
Input: Integer
Output: Prints out _fizz_ if the number is divisble by 3, _buzz_ if it is divisible by 5, and _fizzbuzz_ if it is divisible by both 3 and 5.
Usage: Node 1-fizzbuzz <integer> 
*/

// get input using getargs
const getargs = require("../modules/getargs")
let input = getargs.getIntegerArg()


if (isNaN(input) || !Number.isInteger(input)) {
  console.log("usage: node 1-fizzbuzz <integer>");
}
else {
  
  for (let i = 1; i<=input; i++) {
    
    if (i % 15 == 0) {
      console.log(`${i} fizzbuzz`);
    } else if (i % 3 == 0) {
      console.log(`${i} fizz`);
    } else if (i % 5 == 0) {
      console.log(`${i} buzz`);
    } else {
      console.log(`${i}`);
    }

  }
}
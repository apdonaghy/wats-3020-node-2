/*
Description: The same output as the FizzBuzz algorithm but as a function.
Input: integer
Output: Prints out _fizz_ if the number is divisble by 3, _buzz_ if it is divisible by 5, and _fizzbuzz_ if it is divisible by both 3 and 5.
Usage: Node 2-fizzbuzz <integer>
*/

const getargs = require("../modules/getargs")
let input = getargs.getIntegerArg()


function fizzbuzz(n){
  if(n % 15 == 0){
    return 'fizzbuzz';
   }
  else if(n % 3 == 0) {
    return 'fizz';
   }
  else if(n % 5 == 5){
    return 'buzz';
  }
  else {
    return ``;
  }
}


if (isNaN(input) || !Number.isInteger(input)) {
  console.log("usage: node 1-fizzbuzz <integer>");
}

else {
  for (let i = 1; i<=input; i++) {
    console.log(`${i} ${fizzbuzz(i)}`);
  }
}
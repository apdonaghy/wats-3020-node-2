//TODO fill in comment template
/*
Description: a program that takes a string as input and reverses it using JavaScript string methods.
Input: A string
Output: reversed string
Usage: Node 3-reverse-string <string>
*/

// get input using getargs
const getargs = require("../modules/getargs");
let input = getargs.getStringArg();


if(!input){
    console.log(`Node 3-reverse-string <string>`);
}

else {
    // uses string methods to reverse the string
    console.log(input.split('').reverse().join(''));
}
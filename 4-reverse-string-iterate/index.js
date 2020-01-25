//TODO fill in comment template
/*
Description: a program that takes a string as input and reverses it by iterating through the string, character by character."The old school way"
Input: a string
Output:reversed string
Usage: node 4-reverse-string-iterate <string>
*/

// get input using getargs
const getargs = require("../modules/getargs");
let input = getargs.getStringArg();

function reverseWithFullIteration(str) {
    let result = '';
    for (let i = str.length-1; i>=0; i--) {
        result += str[i];
    }
    return result;
}

function reverseWithHalfIteration(str) {
    // STRETCH TODO write a function that reverses the string but only iterates over half of the input string.
}


if (!input) {
    console.log('node 4-reverse-string-iterate <string>')
}
else {
    console.log("result with full iteration", reverseWithFullIteration(input));

    // STRETCH TODO output the result of your reverseWithHalfIteration function

}





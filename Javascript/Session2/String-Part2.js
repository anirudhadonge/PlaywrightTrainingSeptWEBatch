/**
 * String in Javascript
 * String is a sequence of characters
 * " " or ' ' or ` `
 * Concatination of strings
 * String methods
 * Lenght : property of string, Total number character used in the sentence or the string.
 * ToUpperCase
 * ToLowerCase
 * chatAt
 * indexOf
 * slice
 * replace
 * split
 * trim
 *  trimstart
 *  trimend
 * concat
 */

let myString = " Hello to all in Javascript World ";

// let splitString = myString.split(" ",4);
// console.log(splitString);

// console.log("display"+myString.trimStart()+"demo");
// console.log("display"+myString.trimEnd()+"demo");
// console.log("display"+myString.trim()+"demo");


let secondString = " and playwright";

let concatStr = myString.concat(secondString).concat(" with typescript").concat(" last string").concat(56);
console.log(concatStr);

// " Hello to all in Javascript World + secondString," with typescript"
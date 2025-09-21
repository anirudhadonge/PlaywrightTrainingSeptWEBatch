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


/**
 * Concatination of strings
 */

// let str1 = "Hello";
// let str2 = "World";
// console.log(str1+" "+str2);
// console.log(`${str1} ${str2}`); // Template literals

let myString = "Hello World";
console.log(myString.length);

console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
console.log(myString.charAt(6));
console.log(myString.indexOf("W")); // 6
console.log(myString.slice(2, 7)); //llo W

console.log(myString.replace("l", "j")); // Hello Javascript
console.log(myString.replaceAll("l", "j")); // Hejjo Worjd
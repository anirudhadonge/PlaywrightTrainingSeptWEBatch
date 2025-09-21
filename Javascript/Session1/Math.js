/**
 * Math.round() - Rounds a number to the nearest integer.
 * Math.ceil() - Rounds a number up to the next largest integer.
 * Math.floor() - Rounds a number down to the next smallest integer.
 * Math.trunc() - Removes the decimal part of a number, returning only the integer part.
 * Math.random() - Generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
 */


// let num = 4.5;
// console.log(Math.round(num)); // 5
// console.log(Math.ceil(num)); // 5
// console.log(Math.floor(num)); // 4
// console.log(Math.trunc(num)); // 4


//console.log(Math.random()); // 0.0 to 0.999999
let min= 0;
let max= 10;
console.log(Math.round(Math.random() * (max - min )) + min); // 1 to 10
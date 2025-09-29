/**
 * 2 ways in which you can declare an Array
 * let <variable> = [<values>]
 * 
 */

const fruits = ["Mango","Apple","Orange", "Banana", "Kiwi"];
  console.log(fruits);
  console.log(fruits.sort());


const numArray = [3,54,6,123,67,34];
console.log(numArray.sort((a, b) => a - b)); // Assending order
console.log(numArray.sort((a, b) => b - a)); // Descending order
// let fruits = new Array(3); //[ , , ]
// let fruits1 = [3];

// console.log(fruits1);
// console.log(fruits);
// fruits.push('Apple');
// fruits.push('banana');

// console.log(fruits);
/**
 * var, let, const
 * 
 */

// <Variable Declaration keyword> <Variable Name> = <Value>;

// var name = "John Doe"; // Global Scope

// console.log(name);

// let age = 25; // Block Scope

// console.log(age);


// if(true) {
//     var myNumber = 10; // Global Scope
//     let letNumber = 5; // Block Scope
//     console.log("Within the scope "+letNumber);

//     console.log("Within the scope "+myNumber);
// }

// console.log("Outside the scope "+myNumber);
// console.log("Outside the scope "+letNumber); // Error

const pi  // Block Scope
pi = 3.1416; // Error
console.log(pi);
// with Const you must assign value at the time of declaration
// pi = 3.14; // Error
// console.log(pi);
// you cannot reassign value to const variable
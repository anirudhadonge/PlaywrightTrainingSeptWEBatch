/**
 * Any numberical value is called a number.
 * it might be an integer or a floating point value.
 */
/**
 * toFixed() : // controls the digits after decimal point
 * toString() :
 * toPrecision() :// controls the total number of digits
 * toExponential() : 
 */

// let num1 = 10; // Integer
// console.log(typeof(num1));
// console.log(typeof(num1.toString()));

//let decNumber = 3.1416; // Floating point number
//console.log(typeof(decNumber.toFixed(3)));


// console.log(decNumber.toPrecision(2));


// let myNum = 2164478; // 2.165+10^6

// console.log(myNum.toPrecision(4));  

// let myexpo = 1.23456;
// console.log(myexpo.toExponential(2));
// console.log(myexpo.toExponential(4));
// console.log(myexpo.toExponential(6));
// console.log("----");
// console.log(myexpo.toPrecision(2));
// console.log(myexpo.toPrecision(4));
// console.log(myexpo.toPrecision(6));

// parsetInt() : converts a string to an integer
// parseFloat() : converts a string to a floating point number  
// isNan() : checks if the value is not a number
// isFinite() : checks if the value is a finite number
// Number() : converts a string to a number (integer or float)


// let num1 = "10.5 meters";
// console.log(parseInt(num1)); // 10
// console.log(parseFloat(num1)); // -10.5


//Nan : Not a number

// function myFunc(value1, value2) {
//     return value1 / value2;
// }

// console.log(myFunc(10, 2));
// console.log(myFunc(10, "h"));

// let num = "abc";

// console.log(isNaN(num));

// num = 10;
// console.log(isNaN(num));

// console.log(isFinite(10/0));
// console.log(isFinite(10/2));

//Number()
// let num1 = "10.5";
// console.log(typeof(num1));
// console.log(typeof(Number(num1)));

let num2 = "10.5"
console.log(typeof(Number(num2)));

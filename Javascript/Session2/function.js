/**
 * Function
 * 1. <function keyword> <function name> (<parameters>){
 * }
 * 2. let variableName = <function keyword> (<parameters>){
 * }
 * 3. Arrow functions ()=>{} // runtime 
 */

// Function or method

// Standalone block of code -- function
// when a block of code is inside an object -- it is called as a method.
// function display() {
//   console.log("its a demo function");
// }

// function add(value1, value2) {
//  return value1+value2  
// }
// //display()

// // function add(value1, value2, value3){
// //     console.log(value1+value2+value3);
// // }
// console.log(typeof(add(4, 5)));

// let fun1 = function (){
//     console.log("this is the second way of declaring a function");
// }

// fun1();

// let add = function (value1, value2){
//     return value1+value2
// }

// console.log(add(4,5));


// function fun1(fun){ // fun1 take another function as a parameter and executes it
//     fun();
// }

// fun1(()=>{
//     console.log("its a arrow function");
// })

// fun1(()=>{
//     console.log("Another Implementation");
// })

// setTimeout(()=>{
//     console.log("Arrow function getting executed after time interval")
// }, 5000);


let arrowFun = ()=>{
     console.log("Arrow function getting executed after time interval");
}

arrowFun();
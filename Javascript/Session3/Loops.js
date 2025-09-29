/**
 * Loops
 * 1. for : for(let index=<value>; <condition>; <Iterating the Index>){}
 * 2. while
 * 3. do while
 * 4. for in : Gets the Keys one by one then i can perform some action for(let variable in collection/Object){}
 * 5. for of
 */

//Array : collection of key value pair
/**
 * {
 * 0:Apple,
 * 1:Banana
 * 
 * }
 * 
 */


//while loope : (condition){}
const fruits = ["Apple", "Banana", "Kiwi", "Mango", "Orange"];

// for(let key in fruits){
//     console.log(`value of ${key} in fruits is ${fruits[key]}`)
// }

for(let value of fruits){
    console.log(`value of fruits is ${value}`)
}

// let i = 10;

// do  { // Execute first and then validate the condition
//   console.log(fruits[i]);
//   i++;
// }while (i < fruits.length);

// while (i < fruits.length) {
//   // condition need to be satisified and then executed // &&  ||
//   console.log(fruits[i]);
//   i++; // i = i+1; i-- = i = i-1;
// }

//for Loop
// const fruits = ['Apple','Banana','Kiwi','Mango','Orange']

// for(let i = fruits.length-1; i>0 || i==0 ;i--){
//     console.log(fruits[i]);
// }

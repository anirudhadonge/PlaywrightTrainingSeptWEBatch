/**
 * try catch , finally block
 * throw
 * Open a sql connection , close the sql connection
 */
/**
 * Synatax error
 * Reference Error
 * Type Error : Wrong type use have used
 *
 */

// function divide(num1, num2){
//     if(num2==0){
//         throw "Denominator is equal to 0";
//     }
//     return num1/num2;
// }

function Divide(num1, num2) {
  // Opening connection
  try {
    if (num2 == 0) {
      throw "Denominator is equal to 0";
    }
    console.log(num1 / num2);
  } catch (message) {
    console.log(message);
  } finally {
    //closing the connection
    console.log("this is a finally block");
  }
}

Divide(5, 0);
Divide(5, 5);

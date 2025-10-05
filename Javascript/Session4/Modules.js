/**
 * module: Cake cut into small peices is a module
 * Reusable pice of code 
 * commonJs : module.export ,require() // older version of javascript
 * ESModules: import , export // New Version of javascript ES2015
 * - named export : When ever you are exporting any module , the module should be imported with the same name. a file can contain many name export , All the import should be inside the brackets
 * - default export : Export which contains a default keyword. The module can be imported with any name. a file can have only one default, when I am importing the default it should be 
 * out the brackets
 */

export default function Divide(num1, num2) {
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

export function Add(num1, num2){
    console.log(num1+num2);
}


export class Student{
    constructor (name, rollNo){
        this.name= name;
        this.rollNo= rollNo;
    }

    display(){
        console.log("This is a class method");
    }

    static staticDisplay(){
        console.log("this is a static method")
    }
}

export function substract(num1, numb2){
    console.log(num1-numb2);
}
//module.exports = {Divide,Add, Student}; //commonJs

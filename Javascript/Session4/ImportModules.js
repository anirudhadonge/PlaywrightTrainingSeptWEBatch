// const {Student,Divide} = require('./Modules.js');// commonJs 
// const {Add} = require("./Modules.js");
import nm, { Add,Student } from "./Modules.js";


let student = new Student('Tushar',23);
student.display();
Student.staticDisplay();
console.log(student);
Add(5,5);
nm(5,0);

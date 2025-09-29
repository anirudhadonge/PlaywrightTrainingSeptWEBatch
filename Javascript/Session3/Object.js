/**
 * an Object is an instance that directly holds data in the form of key value pair
 * class is a blueprint through which you can create many object.
 */

//All these value are related to on entity called as student
let name = 'Anirudha'
let rollNo = 7;
let flag = true
let student ={
    name:'Anirudha',
    rollNo:7,
    flag:(flag)?'yes':'No',
    sum: function(a,b){
        return a+b;
    },
    student:{
        list:['Math','Physice','Chemistry','Biology']
    }

}
console.log(student);
// console.log(student.name);
// console.log(student['name']);

student.name ='Shweta'
console.log(student);

console.log(student.sum(4,5));

console.log(student.student);
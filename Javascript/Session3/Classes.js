/**
 * Class is blue print using which you can create many objects.
 * Class Declaration
 * constructor
 * Instance variable
 * getter and setters
 * Private variables
 * instance variable and methods: Any property or method that you access using the instance of the class 
 * Class variables and methods : any method or a variable is suffixed by 'Static' Keyword
 * Inhertance
 * polymorphism 
 */
/**
 * Java: constructe is method with the same name as a class and it does have a returned type.
 * all the variables are declared at teh begining of the class in java.
 */

class Student{
    #subject;
    static value = 10;
    constructor(name,rollNo,subject){
        this.name= name;
        this.rollNo= rollNo;
        this.#subject  = subject
    }

    #display(){
        console.log(this);
    }

    static displayValue(){
        console.log(Student.value);
    }
    // getSubject(){
    //     return this.#subject;
    // }

    //setter
    set setName(name){
        this.#display()
        this.name = name;
    }

    set setSubject(subject){
        this.#subject = subject;
    }

    // Getter
    get getSubject(){
        return this.#subject;
    }

}

let instance1 = new Student('anirudha',7,'Maths');
console.log(instance1);
console.log(instance1.getSubject)
console.log(Student.value); // Class variables 


let instance2 = new Student('MechStudent',34);
console.log(instance2);
console.log(instance2.getSubject);
console.log(Student.value); // Class variables 


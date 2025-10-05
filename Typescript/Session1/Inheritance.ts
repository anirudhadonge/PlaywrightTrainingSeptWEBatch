/**
 * When ever we have a partial Idea of the implementation we create an Abstract Class
 * 
 * 1. interface : We dont have an Idea about the Implementation , we only document the activities
 * 2. Abstrace Class : We have partial Idea about the implementation and activites 
 * 3. Class : when we have complete idea about the implementation 
 */

//Abstract Class : its a class which might contain concret method and abstract method. And you cannot create an object of this class
// Instance Variable and class Variable

abstract class Mammal{
    height:number
    static statMammal:number= 10;
    constructor(height:number){
        this.height= height;
    }

    abstract move():void

    display():void{
        console.log("this method is in the abstract class");
    }
}

class BaseAnimal extends Mammal{
    static baseClassState:number = 11;
    constructor(height:number){
        super(height)

    }

    move(): void {
        console.log("Animal have different ways in this they move");
    }

    display():void{
        super.display();
        console.log("This is the method in base animal class");
    }
}

// let dog = new Mammal(23);
// interface Mammal {
//     height: number
//     move():void;
// }

// interface placeholder {
//     placeholder():void;
// }

// class BaseAnimal implements Mammal,placeholder{
//     height: number;
    
//     constructor(height:number){
//         this.height= height;
//     }

//     move(): void {
//         console.log("Animal have different ways in this they move");
//     }

//     placeholder(): void {
//         console.log("Its a place holder method");
//     }
// }

let height = 1;
let dog = new BaseAnimal(height);
dog.move();
dog.display();
console.log(Mammal.statMammal);
console.log(BaseAnimal.baseClassState);
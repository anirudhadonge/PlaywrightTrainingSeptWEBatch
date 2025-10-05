/**
 * Its a blue print using we will be creating object.
 * Access modifiers : public, private , protected
 * Singleton pattern
 * Class Heritage
 *   --Extend classes 
 *   --Implement Interfaces
 * 
 * When do we need to create classes and when do we need to create inferace.
 */


export class Students{

    private name:string;
    private rollNo:number;
    subject:string;
    readonly constVar:Number;
    constructor(name:string,rollNo:number,subject:string){
        this.name = name;
        this.rollNo= rollNo;
        this.subject= subject;
        this.constVar = 10;
    }

    display():void{
        this.displayInitialFields();
        console.log(`${this.constVar}`);
    }

    // Setter and getters

    set setname(name:string){
        this.name =name;
    }

    get getName():string{
        return this.name;
    }

    private displayInitialFields(){
        console.log(`${this.name} and ${this.rollNo} and ${this.subject} `)
    }

}


let engStudent = new Students('Ramesh',45, 'Metallargy ');
// console.log(engStudent.constVar);
// engStudent.display();
// engStudent.setname = "Anirudha";
// console.log(engStudent.getName);
// engStudent.display();
engStudent.display();

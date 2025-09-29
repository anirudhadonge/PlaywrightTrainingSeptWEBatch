
class Animal{
    constructor(limbs,habbit){
        this.limbs =limbs
        this.habbit = habbit
    }

    action(){
        console.log("every animal has different actions");
    }
}

class Dog extends Animal{
    constructor(limbs,habbit,breed){
        super(limbs,habbit);
        this.breed
    }
}

class Cat extends Animal{
       constructor(limbs,habbit,breed){
        super(limbs,habbit);
        this.breed
    }
}


let germanShepard = new Dog(4, "Omniverious",'GermanShepard');
let labrador = new Dog (4,'Omniverious',"Labrador");



console.log(germanShepard);
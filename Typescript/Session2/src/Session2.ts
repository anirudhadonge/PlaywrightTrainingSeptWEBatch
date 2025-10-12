/**
 * Generics
 * Enum
 * Modules
 * Tsconfig
 */

// Generics : reusualbe components 

// function Add(val1:number, val2:number):number{
//     return val1+val2;
// }

/**
 * function Addstring(val1:string,val2:string):string{
 * return val1+val2
 * } 
 *
 */
// Add(4,5);

// Add("anirudha","tutor");

function add<U>(val1: U, val2:U ): U {
    // @ts-ignore    
    return val1 + val2;
}

// function addDifferntType<T,U>(val1:T , val2:U):U{
//         // @ts-ignore
//     return val1+val2;
// }


interface Pair<A,B,T>{
    key:A
    value:B,
    flag:T
}


// console.log(add<number>(4,5));

// console.log(add<string>("anirudha","tutor"))

let obj:Pair<string,number, boolean>={
    key:"Anirudha",
    value:10,
    flag:true
}

console.log(obj);
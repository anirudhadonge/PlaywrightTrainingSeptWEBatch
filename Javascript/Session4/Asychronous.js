/**
 * sychronous : Instruction are executed one by one . Only after getting the reponse from the previous instruction then next instruction is trigger.
 * Asynchronus : Intruction are trigger without getting feedback.
 * 1. Function Call back  : Callback hell
 * 2. Promises : Promises to return me the result 
 * 3. Async Await
 */



// function first(fun){

//     setTimeout(()=>{
//         console.log("This is the first function")
//         fun();
//     },3000);
// }

// function second(fun){
//       setTimeout(()=>{
//         console.log("This is the second function")
//         fun();
//     },1000);
// }

// function third(){
//       setTimeout(()=>{
//         console.log("This is the Third function")
//     },2000);
// }

// first(()=>{
//     second(()=>{
//         third();
//     });
// })

// Then()
// catch()

async function first(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("This is the first function")
        resolve("succes")
    },3000);

    })
}
let flag = false;
async function second(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log("This is the second function")
        // if(flag){
        resolve("succes")
        // }else{
        //     reject("Failed");
        // }
    },1000);

    })
}

async function third(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log("This is the Third function")
     resolve("succes")
    },2000);

})
}


// first().then((value)=>{
//     console.log(value);
//     second().then((value)=>{
//         console.log(value);
//         third().then((value)=>{
//             console.log(value);
//         }).catch((value)=>{
//             console.log(value);
//         })
//     });
// })


async function fun(){
    await first();
    await second();
    await third();
}

fun();
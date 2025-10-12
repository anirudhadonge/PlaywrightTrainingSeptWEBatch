enum monthName {
    January = "january",
    February = "February" ,
}


function monthValue(month:string){
    switch(month){
        case "january":
            console.log("its the first month of the year");
            break;
        case "February":
            console.log("its the second month of the year");
            break;
        default:
            console.log("The value didnt match");
    }
}

// function monthValue(month:number){
//     switch(month){
//         case 0:
//             console.log("its the first month of the year");
//             break;
//         case 1:
//             console.log("its the second month of the year");
//             break;
//         default:
//             console.log("The value didnt match");
//     }
// }
console.log(monthName.January);
console.log(monthName.February);
monthValue(monthName.January);
monthValue(monthName.January);
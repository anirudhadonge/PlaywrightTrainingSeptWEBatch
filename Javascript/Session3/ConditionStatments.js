/**
 * Conditional Statements
 * 1. if : if(condition)(true/false){<body>}
 * 2. if else
 * 3. nested if
 * 4. switch statement : switch(<value>), case <value>, break, default
 */

let myMonth = 2;


switch(myMonth){
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    default:
        console.log("Value didnt Match");
}

// let flag = false;

// if(flag == 'false'){
//     console.log('The condition is false');
// }
// let myNumber = 2
// let strNum = '2'
// if(myNumber === strNum){
//     console.log("Numbers are equal");
// }else {
//     console.log("The type and value didnt match");
// }

// let monthNum = 3

// if(monthNum==1){ // == always compares the values === checks for the value and also the type.
//     console.log("its January");
// } else if(monthNum==2){
//     console.log('its February')
// } else if(monthNum == 3){
//     console.log('its March');
// } else if(monthNum == 4){
//     console.log("its April");
// } else {
//     console.log('The number is beyond scope');
// }

// let flag = false
// if(!flag){
//     console.log("The is condition is false");
// }

// let myNumber = 1;

// if(myNumber>=5 && myNumber<=10){
//     console.log(myNumber+' is greater than 5 and less than 10');
// }else{
//     console.log(`${myNumber} is not satisifying the above condition`);
// }
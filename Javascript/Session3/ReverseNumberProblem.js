

let number = 12345678;

let reverseNumber=0;
let mod;
while(number!=0){
     mod = number%10 /// 12345678--> 8
     reverseNumber = reverseNumber*10+mod // 0*10+8=8 // 8*10+7=87 // 87*10+6=876
     number = Math.floor(number/10); //12345678/10 = 1234567.8 =1234567 
}

console.log(reverseNumber);

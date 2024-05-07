// function greetings(name, callback){
//     console.log(`Hello, ${name}`);
//     callback();
// }
// function goodBye(){
//     console.log("Good Bye..!");
// }
// greetings("ruhul", goodBye);


function calculator(number1, number2, callbackFn){
    return callbackFn(number1, number2)
 }
 
 function sum(number1, number2){
   return number1 +number2; 
 }
 
 function sub(number1, number2){
   return number1 - number2
 }
 
 function div(number1, number2){
   return number1 / number2
 }
 
 function mul(number1, number2){
   return number1 * number2
 }
 
 const result1 = calculator(1, 2, sum) //output: 3
 const result2 = calculator(1, 2, sub) //output: -1
 const result3 = calculator(1, 2, div) //output: 0.5
 const result4 = calculator(1, 2, mul) //output: 2

 console.log( result1, result2, result3, result4);
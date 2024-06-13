//First Question
//
// function addition(num1, num2) {
//     return num1 + num2;
//   }
  
//   //By Values
//   console.log(addition(5, 3));
//   console.log(addition(10, 2));
  
//   function subtraction(num1, num2) {
//     return num1 - num2;
//   }
  
//   // BY values
//   console.log(subtraction(10, 2)); 
//   console.log(subtraction(6, 4)); 
  
//   function multiplication(num1, num2) {
//     return num1 * num2;
//   }
  
//   //by values
//   console.log(multiplication(6, 4)); 
//   console.log(multiplication(10, 2));
  
//   function division(num1, num2) {
//     return num1 / num2;
//   }
//   //by values
//   console.log(division(10, 2)); 
//   console.log(division(24, 4)); 
//
//
//
//----------------------------------
//Second question
// function squareNumber(number) {
//     return number * number;
//   }
  
//   // By values:
//   let num = 5;
//   console.log(squareNumber(num))


//----------------
//Third Question


// function getMaxNumber(v1, v2) {
//   return v1 > v2 ? v1 : v2;
// }

// // by values:
// console.log(getMaxNumber(5, 10)); 
// console.log(getMaxNumber(20, 5)); 

//--------------------------------
//Fourth Question 
function Interest(Pamount, rate, years) {
let totalInt = (Pamount * rate * years) / 100;
 return totalInt;
}
let amount = 1000;
let rate = 5;
let years = 3;
let totalInterest = Interest(amount, rate, years);
console.log(`Total interest for the amount ${totalInterest}.`);

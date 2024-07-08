// //main function
// //function1 & Main Function and assign the function argument as to a parameter
// function sample(d){
// d(); //call back function //here we are assigning the function 2 to the parameter and calling the function
// }
// function dam(){//function2
//     console.log("This is a call back function");
// }
// sample(dam);//Making the function as an argument and calling the function



// let arr=[1,2,3,4,5];
// let x=arr.reduce((x,y)=>{console.log('x value: ${x} y value: ${y} and sum is ${x+y}  and rewriting ${y}');
//      return y;},8)

let arr = [1, 2, 3, 4, 5, 6];
let x = arr.reduce((x, y) => {console.log(`x value: ${x} y value: ${y} and sum is ${x + y} and rewriting ${y}`);
    return y;
});

//Type conversion
let myVar;
myVar = String(34);  //converts number to string
console.log(myVar, (typeof myVar));

// let str2 = '3434';
// console.log(str2, (typeof str2));

let str2 = Number('3434');   //converts string to number
console.log(str2, (typeof str2));

let nu = Number('34.78952');
console.log(nu.toFixed(2) , (typeof nu)); //it will print two decimal values


//Typr Coercion - it is like concatenation 

let myStr = '546';
let myNum = 54;

console.log(myStr + myNum);  //54654 - it concateenates bcz here there is a string 


/*Data types in js
 primitive datatypes : strring,number,null,boolean,undefined,symbol.
 reference datatypes : Arrays,object literal,functions,dates.
 */

 //string 
 let name = "Harry";
 console.log("data type is " + (typeof name)); // string

 //number
 let num = 34;
 console.log("data type is " + (typeof num)); //number

 //boolean
 let isdriver = true;
 console.log("data type is " + (typeof isdriver)); //boolean

 //null
 let nullVar = null;
 console.log("data type is " + (typeof nullVar)); //object

 //undefined
 let undef = undefined;
 console.log("data type is " + (typeof undef)); //undefined

 //Reference datatypes

 //Arrays
let myArr = [1,2,3,4,false,'hii'];
console.log("data type is " + (typeof myArr));

//objects literals
let stuName = {
    harry: 34,
    rohan: 55,
    vinod: 44
}

console.log("data type is " + (typeof stuName));

//functions
 function findNumber() {
    
}
console.log("data type is " + (typeof findNumber));

//dates
let date = new Date();
console.log("data type is " + (typeof date));
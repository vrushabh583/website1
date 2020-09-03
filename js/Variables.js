//Variables in js
//Var, let,  const

/* Rules for creating Javascript variables
1.Cannot start with numbers.
2.Can start with letter, _, or $;
3.are Case sensitive.
*/

//Var - Global level scope

var name = "Vrushabh";
var channel;  //variable declared but assigned value hence it will print undefined.
var number = 34;
var city = "delhi";
console.log(name, channel, number, city);



const ownersname = "Lingraj";
// ownersname = "vrush" //Cannot do this as we cant reassign value to const variable.
console.log(ownersname);
// const fruit; // cannot do this , we need to assign value after declaring.

const arr1 = [34,23,45,66];
arr1.push(77); //we can do this. we can push value inside cons declared array. but we cannot redeclaared arr1.
// const arr1 = [1,2,3,4]; // we cannt do this. -- assignment to constant variable error
console.log(arr1);

//let - Block level scope - can't access outside the scope.

{
    let city = "Goa";
    city = 'pune'; //here city will get change to pune inside this scope
    console.log(city); //pune
}
console.log(city); // delhi : as there is global variable declarred upside.


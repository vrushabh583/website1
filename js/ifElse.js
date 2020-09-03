// == value should match
//=== both value and type should match
// const year = '54'
// if (year === 54){
//     console.log('age is 54')
// } 
// else{
//     console.log('age is not 54'); //prints this as type and value are not matching bcz type is string

// }

const age = 65;
const vari = 34;
const isDrive = true;


// if(age == 19){
//     console.log('age is not 19')
// }
// else if (age == 65){
//     console.log('age is 65');
// }

// else{
//     console.log('age is not 19');
// }


// if (typeof vari !== 'undefined') {
//     console.log('vari is defined');
// }
// else{
//     console.log('vari is not defined');
// }


// if (isDrive && age > 18) {   
//     console.log('yes he can Drive'); 
// }
// else{
//     console.log('he cannot drive');
// }

// if (isDrive || age < 18) {                      //any one conditions need to be tru
//     console.log('yes he can Drive'); 
// }
// else{
//     console.log('he cannot drive');
// }

// let a = true;
// let b = true;
// let c = 5;

// if (a && b && c > 6) {
//     console.log('yes')
// }
// else{
//     console.log('no')
// }

//Ternary operators
// console.log(age == 65? 'age is 65': 'age is not 65');  //checks whethere age is 65 if 65 prints first condition otherwise prints seecond

//Switch case

switch (age) {
    case 18:
        console.log('age is 18');
        break;

    case 28:
        console.log('age is 28');
        break;

   case 65:
        console.log('age is 65');
        break;

    default:
        console.log('age is unknown')
        break;
}
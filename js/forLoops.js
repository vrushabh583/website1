//loops --> it repeats continuously untill condition fails

//for

// for (let i = 0; i < 10; i++) {
//     console.log('i');
// }

//while loop

// let j = 0;

// while (j < 10) {
//     console.log(j);  //if you want to display from 1 to 100 then add j +1
//     j +=1;
// }

// //dowhile loop -- difference btwn while & dowhile is dowhilechecks condition atleast ones.

// let k = 0;

// do {
//     console.log(k);
//     k++;
// } while (k<10);

let arr = [2,5,6,4,2,3];

// arr.forEach(element => {
//     console.log(element);
// });

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
// console.log(element)    
// }


//forin loop
let obj = {
    name : "Harry",
    job : "Dangerous programer",
    age : 28,
    os : 'windows'
}

for (const key in obj) {
    console.log(`${key} of object is ${obj[key]}`);
}

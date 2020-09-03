// DOM -- dom is nothing but a structural repreesentation of our html.

let a = document;
a = document.all;
// a = document.body;
// a = document.forms;

// Array.from(a).forEach(element => {   //it iterates 
//     console.log(element)
// });

// console.log(a);


let b = "google";
let c = document.links;

Array.from(c).forEach(element => {
    if (element.href.includes(b)) {
        console.log(element)
    }
})

// console.log(b);



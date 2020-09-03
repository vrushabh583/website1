//Functions - it is a block of code which is designed to do a particular task repeatedly without writing too much line.


// // function avg(a, b){
// //     c = (a + b)/5
// //     return c;
// // }
// // c1 = avg(10,20);
// // c2 = avg(50,40);

//------------------------------------

function greet(name, thank){
    console.log(`happy birthday ${name}
                 how i wish ${thank}!`);
}

let name = 'skillf';
let name2 = 'rahul';
 greet(name, 'thank you');

// -----------------------------

 const greeting = function(def) {
     let msg = `Functions are one of the ${def} fundamental building blocks in JavaScript. A function is a JavaScript procedure—a set of statements that performs a task or calculates a value.`;
     return msg;
 }
 let def = 'Vrushabh';
 let def2 = 'Lingraj';
 let val = greeting(def);
 console.log(val);
// document.write(val);

//-----------------------------------
const myobj = {
    name : "raaina",
    game : function() {
          return "cricketer";
    }
}
console.log(myobj.game());
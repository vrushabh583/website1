
let element = document.createElement('li');

// //add class name to the li element

element.className = 'childul';
element.id = 'createdui';
element.innerText = 'This is new created ul';

// console.log(element)

let ul = document.querySelector('ul.this');
ul.appendChild(element);
// console.log(ul);


let sub = document.createElement('li');
let text = document.createTextNode('This is text node');
sub.appendChild(text);
sub.className = 'childul';
sub.id = 'createdui';

let app = document.querySelector('ul.this').appendChild(sub);
// app.appendChild(sub);
// console.log(app);


let elem2 = document.createElement('h3');
elem2.className = 'elem2';
elem2.id = 'elem2';
let tnode = document.createTextNode('This is a created Node for elem2');
elem2.appendChild(tnode);

sub.replaceWith(elem2);    //will replace sub created element.

let myul = document.getElementById('myul');
myul.replaceChild(sub, document.getElementById('fui'));  // here sub will replace first li code
myul.removeChild(document.getElementById('lui')); // will remove of my dream li



let code = document.createElement('h2');
code.id = 'new';
code.className = 'new';
code.innerText = "Go to CodewithaHarry";


let a = document.createElement('a');
a.setAttribute('title', 'CodeWithHarry');
a.href = "https://www.codewithharry.com";


a.appendChild(code);

document.body.appendChild(a);
// console.log(code);


















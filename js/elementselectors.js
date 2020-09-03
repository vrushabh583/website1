//single element selector

let element = document.getElementById('first');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
element.style.color = 'red';
// element.innerText = "Harry is a good boy";
// element.innerHTML = "<b>Hello good</b>"
// console.log(element);


//query selector
let sel = document.querySelector('#first'); // prints id div
// sel = document.querySelector('.child'); // prints first instance of class with class name child
// sel = document.querySelector('div'); // prints first instance of div.
// sel.style.color = 'green';  /// changes first div color only
// console.log(sel)


//multi element selector

let mul = document.getElementsByClassName('child'); // prints all div with class name child
// mul = document.getElementsByClassName('container');
// console.log(mul[0].getElementsByClassName('child'));
mul = document.getElementsByTagName('div');

console.log(mul)

// Array.from(mul).forEach(element => {   // here we are making aa array by taking mul and changing color to element which are inside div
//     console.log(element);
//     element.style.color = 'blue';
// });


for (let index = 0; index < mul.length; index++) {
    const element = mul[index];
    console.log(element);
    element.style.color = 'blue';
}
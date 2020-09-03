 let cont = document.querySelector('.container');
//  console.log(cont.children);
//  console.log(cont.children[2]);
//  console.log(cont.children[2].nodeType);

 //Node Type
//  1. Element
//  2. Attribute
//  3. Text Node
//  8. Comment
//  9. document
//  10. DocType


let container = document.querySelector('.container');
console.log(container.childNodes);
// console.log(container.firstElementChild);  // prints first element inside child nodes
// console.log(container.children);
// console.log(container.lastElementChild);  // prints last element inside child nodes

// console.log(container.childElementCount); // count of child elements

console.log(container.firstElementChild.nextElementSibling); // prints next element
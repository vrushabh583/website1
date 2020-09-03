function person(fname, lname, age){
    this.firstName = fname,
    this.lastName = lname,
    this.age = 27
}
person.prototype.name = function(){
    return this.firstName + " " + this.lastName
};

let myFather = new person('Jhon', 'deo');
// console.log("myFather name is " + myFather.name());

let p = document.createElement('p');
p.id = 'para';
p.className = 'para';
let tnode = document.createTextNode('This is prototype');
let container = document.querySelector('.container');

let first = document.getElementById('first');

container.insertBefore(p, first);

// document.getElementById("para").innerHTML =
// "My father is " + myFather.name(); 
// myFather.name();


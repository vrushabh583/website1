console.log("we are in arrays");

let marks = [34,79,85,65,39,99];
const fruits = ['orange','apple','Banana','pineapple'];
const mixed = [52, 45, 'mix', [3,5]];

const arr = new Array(23,123,31,'mango');
// console.log(arr);
// console.log(fruits);
// console.log(mixed);
// console.log(marks[3]);

// console.log(arr.length);  //returns length
// console.log(Array.isArray(arr));  // checks whether it is array or not and returns true or false.

// arr[0] = 'Vrush'; // used to change array value
// console.log(arr)

// console.log(marks);

let value = marks.indexOf(79); // prints index of elements
// console.log(value);

// marks.push(4545); //pushes value at the end of aarray.
// marks.shift(5252); //removes first value of an array.
// marks.unshift(999); //adds value at first place of an array.
// marks.pop(); // removes last value. 
// marks.splice(1,4); //removes values from 1 to 4th position.
// marks.reverse(); //reverses entire array.

let marks2 = [1,1,2,3,3,4,5];
marks = marks.concat(marks2);
// console.log(marks);

let myObj = {
    name : "Harry",
    'First Name': "carry",  //if we want space between keys we need to add ''
    channel : "code with harry",
    isActive : true,
    marks : [1,2,3,4,5] 
}

// console.log(myObj);
// console.log(myObj.marks);
// console.log(myObj['channel']); // we can also access like this.
console.log(myObj.channel);
console.log(myObj["First Name"]);
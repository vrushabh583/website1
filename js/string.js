let mylovelystring = "Vrushabh is Software good good developer";
// console.log(mylovelystring.length);  // finding length of an array
// console.log(mylovelystring.indexOf("good")); //used to find the first instance of good
// console.log(mylovelystring.lastIndexOf("good"));
// console.log(mylovelystring.charAt(1)); //print chararcter at 1

// console.log(mylovelystring.slice(1,5)); // it extracts the part of a string - rush
// console.log(mylovelystring.slice(-9)); //returns last 9 characters.
// d = mylovelystring.replace("Vrushabh", "jaanu");
// d = d.replace("good", "at");
// console.log(d);


//conacat -- it is used to add string to string.
let html = "THIS is html string for testing ";
html = html.concat('add string ', 'one more string');
// console.log(html);
// console.log(html.toLocaleLowerCase());  //chnages to lowercase it wont change the original string.
// console.log(html.toLocaleUpperCase());  // changes to upper case it wont change the original string.
// console.log(html[0]); 
// console.log(html.endsWith('one more string'));  // retruns true if html ends eith entered string.
// console.log(html.includes('testing')); // returns true.
// console.log(html.substring(1, 6)); //retuns from position 1 to 5 --> (n-1)

// console.log(html.split(' ')); // returns array,split string into seperate elements
// console.log(html.replace('html', 'css'));


//Template literals
let name = 'Virat';
let record = 'Centuries';
let record2 = 'runs';
let stats = `<b>${name}</b> will break most ${record} and ${record2} records of sachin`;

document.body.innerHTML = stats;

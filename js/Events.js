// document.getElementById('heading').addEventListener('click', function(e){
//     // console.log('clicked');
//     // location.href = "//google.com";
//     let variable;
//     variable = e.target;
//     variable = e.target.id;
//     // console.log(e);
//     console.log(variable);
// });


// let btn = document.getElementById('btn');
// btn.addEventListener('click', fun1);
// btn.addEventListener('dblclick', fun2);

// function fun1(e) {
//     console.log('Thanks for clicking', e);
//     e.preventDefault(); // it helps to prevent page from submiting
// }

// function fun2(e) {
//     console.log('Thanks for dblclicking', e);
//     e.preventDefault(); // it helps to prevent page from submiting
// // }

// document.querySelector('.covid').addEventListener('mouseenter', function mouseent() {
//     console.log("you entered covid class");
// });

// document.querySelector('.covid').addEventListener('mouseleave', function mouseent() {
//     console.log("you exited covid class");
// });


document.querySelector('.container').addEventListener('mousemove', function(e) {
    console.log("mouse moved");
    // document.body.style.backgroundColor = 'red';
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY},154)`;

})



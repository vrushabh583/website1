
// let divelem = document.createElement('div');
// let tnode = document.createTextNode('this is an non editable div');
// divelem.appendChild(tnode);
// divelem.id = 'elem';
// divelem.className = 'elem';
// divelem.setAttribute('style', 'border:2px solid black; width: 154px; margin:34px; padding:23px;');
// divelem.setAttribute('contentEditable', true);

// let container = document.querySelector('.container');
// let first = document.getElementById('first');

// container.insertBefore(divelem, first);


// divelem.addEventListener('click', function(e) {
//     let editable = e.target;
//     // editable.contentEditable = "true";
//     editable = e.target.innerText;
//     // console.log(editable);
//     // localStorage.setItem('key', e.target.innerText);
//     // console.log(localStorage.key);
// })


// // let edit = document.getElementById('edit').addEventListener('click', function(e){
// //     console.log("clicked");
// //     let editable = e.target;
// //     editable.contentEditable = "true";
// //     localStorage.setItem('key', e.target.innerText);
// //     console.log(localStorage.key);
// // })


let dodo = document.createElement('div');
// dodo.style="height:250px; width:250px; margin:10px; position:center; padding:23px;";
dodo.innerHTML="<b> Hi i am Here CLick me </b>";
dodo.id="hihi";
dodo.className="diver";

let container = document.querySelector('.container');
let first = document.getElementById('first');

container.insertBefore(dodo, first);

// let r = document.getElementById('first');
// r.appendChild(dodo);
let texto = document.createElement('textarea');
texto.id='i_text';
// texto.style='height:150px; width:150px; border:2px solid black; margin:100px; position:center;';
texto.className='i_text2';

dodo.addEventListener('click',function(e){
dodo.replaceWith(texto);
});

texto.addEventListener('blur',function(e)
{
let tt=texto.value;
localStorage.setItem('data',tt);
});
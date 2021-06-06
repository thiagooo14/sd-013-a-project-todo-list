/* /*  function criarItem (tarefa){
  const item = document.createElement('li');
  item.innerHTML = `<div> ${tarefa} <div/>`

  document.getElementById('lista-tarefas').appendChild(item);
} 


 */
/* 
---------------------------------------------- */
/* let botaoCria = document.querySelector('#criar-tarefa');
botaoCria.addEventListener('click', input);

let lista = document.querySelector('#lista-tarefas');
/* --------------------------------------------- */
/* const itemLista =  document.getElementsByClassName('.pinta');
function input (){

let input = document.querySelector('#texto-tarefa');

let valor = input.value;
let item = document.createElement('li');
document.querySelector('#lista-tarefas').appendChild(item);
item.innerHTML = valor;
item.className = 'pinta';
item.addEventListener('click', click);
input.value = '';
}  */
 
//------------------------ */----------------------------------------------
/* let li = document.querySelectorAll('.pinta');


function click(event) {
for (let index = 0; index < li.length; index += 1) {
li[index].className = 'pinta';
}
event.target.className = 'cinza';

} */

//-------------------------------------------------------------------------

const list = document.getElementById('lista-tarefas');
const button = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');

function createNew() {
const listItem = document.createElement('li');
listItem.innerText = input.value;
listItem.classList = 'pinta';
list.appendChild(listItem);
input.value = '';
}

function selecting(event) {
  const lastItem = document.querySelector('.cinza');
if (event.target.classList.contains('pinta')) {
event.target.classList.add('cinza');
if (lastItem) {
lastItem.classList.remove('cinza');
}
}
}


/* function completed(event) {
if (event.target.classList.contains('completed')) {
event.target.classList.remove('completed');
} else {
event.target.classList.add('completed');
}
}
**/
button.addEventListener('click', createNew);
list.addEventListener('click', selecting);
list.addEventListener('dblclick', completed);
list.innerText = localStorage.getItem('list');  
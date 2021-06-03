/*  function criarItem (tarefa){
  const item = document.createElement('li');
  item.innerHTML = `<div> ${tarefa} <div/>`

  document.getElementById('lista-tarefas').appendChild(item);
} 


 */
/* 
---------------------------------------------- */
let botaoCria = document.querySelector('#criar-tarefa');
botaoCria.addEventListener('click', input);

let lista = document.querySelector('#lista-tarefas');

const itemLista =  document.querySelectorAll('.pinta');

function select (event){
  for (let index = 0; index < itemLista.length; index += 1 ) {
    itemLista[index].classList.add(' for');
  }
  event.target.className = 'cinza';
}
function input (){

let input = document.querySelector('#texto-tarefa');

let valor = input.value;
let item = document.createElement('li');
document.querySelector('#lista-tarefas').appendChild(item);
item.className='pinta';
item.innerHTML = valor;
item.addEventListener('click', select);
input.value = '';
} 

//----------------------------------------

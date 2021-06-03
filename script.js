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

function input (){

let input = document.querySelector('#texto-tarefa');

let valor = input.value;
let item = document.createElement('li');
document.querySelector('#lista-tarefas').appendChild(item);

item.innerHTML = valor;
input.value = '';
} 
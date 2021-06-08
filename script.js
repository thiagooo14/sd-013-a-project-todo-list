let listaTarefas = document.getElementById('lista-tarefas');
let tarefas = document.getElementsByTagName('li');

function criaTarefa () {
  let entradaTarefa = document.getElementById('texto-tarefa');
  let itemLista = document.createElement('li')
  itemLista.innerText = entradaTarefa.value;
  listaTarefas.appendChild(itemLista);
  entradaTarefa.value = "";
}
document.getElementById('criar-tarefa').addEventListener('click',criaTarefa);

function marcaItem (event) {
  for (let index = 0; index < tarefas.length; index += 1){
    if (tarefas[index].style.backgroundColor === 'rgb(128, 128, 128)'){
      tarefas[index].style.backgroundColor = 'white';
    }
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}
listaTarefas.addEventListener('click',marcaItem);

function tarefaCompleta (event) {
  if (event.target.classList.item(0) === 'completed') {
      event.target.classList.remove('completed');
  } else {
      event.target.classList.add('completed');
  }
}
listaTarefas.addEventListener('dblclick',tarefaCompleta);

//Referência: https://developer.mozilla.org/pt-BR/docs/Web/API/Node/removeChild
//Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while
function apagaTudo () {
  while (listaTarefas.firstChild) {
    listaTarefas.removeChild(listaTarefas.firstChild);
  }
}
document.getElementById('apaga-tudo').addEventListener('click',apagaTudo);


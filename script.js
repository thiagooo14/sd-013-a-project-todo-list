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

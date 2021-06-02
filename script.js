// butao de add da lista

const lista = document.getElementById('lista-tarefas');
const butao = document.getElementById('criar-tarefa');
const tarefa = document.getElementById('texto-tarefa');

butao.addEventListener('click', addTarefa);

function addTarefa() {
  const texto = document.createElement('li');
  lista.appendChild(texto);
  texto.innerText = tarefa.value;
  tarefa.value = "";
}
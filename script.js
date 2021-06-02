const clickB = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');

function tarefa(evento) {
  const res = document.getElementById('texto-tarefa').value;
  listItem = document.createElement('li')
  listItem.innerText = res;
  lista.appendChild(listItem)
  input.value = '';
}

clickB.addEventListener('click', tarefa)

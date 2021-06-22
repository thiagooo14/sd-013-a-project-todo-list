const criarTarefaBt = document.getElementById('criar-tarefa');
const deletarTarefasBt = document.getElementById('apaga-tudo');
function novaTarefa() {
  const input = document.querySelector('input').value;
  const tarefa = document.createElement('li');
  tarefa.innerHTML = input;
  tarefa.classList.add('tarefa');
  document.querySelector('ol').appendChild(tarefa);
  tarefa.addEventListener('click', selectedItem);
  tarefa.addEventListener('dblclick', markItem);
  document.querySelector('input').value = "";
}

function selectedItem(item) {
  const selectedAtual = document.querySelector('.selected');
  const selected = item.target;
  selected.classList.add('selected');
  selectedAtual.classList.remove('selected');
}

function markItem(item) {
  item.target.classList.add('completed');
}

function deleteAll() {
  document.querySelector('ol').remove();
  const lista = document.createElement('ol');
  lista.id = 'lista-tarefas';
  document.querySelector('.lista-tarefas').appendChild(lista);
}

criarTarefaBt.addEventListener('click', novaTarefa);
deletarTarefasBt.addEventListener('click', deleteAll);

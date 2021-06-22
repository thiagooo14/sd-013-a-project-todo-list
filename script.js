const criarTarefaBt = document.getElementById('criar-tarefa');

function novaTarefa() {
  const input = document.querySelector('input').value;
  const tarefa = document.createElement('li');
  tarefa.innerHTML = input;
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

criarTarefaBt.addEventListener('click', novaTarefa);

const criarTarefaBt = document.getElementById('criar-tarefa');

function novaTarefa() {
  const input = document.querySelector('input').value;
  const tarefa = document.createElement('li');
  tarefa.innerHTML = input;
  document.querySelector('ol').appendChild(tarefa);
  tarefa.addEventListener('click', corSelecao);
  document.querySelector('input').value = "";
}

function corSelecao(item) {
  const selectedAtual = document.querySelector('.selected');
  const selected = item.target;
  selected.classList.add('selected');
  selectedAtual.classList.remove('selected');
}

criarTarefaBt.addEventListener('click', novaTarefa);

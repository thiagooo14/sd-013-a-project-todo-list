const criarTarefaBt = document.getElementById('criar-tarefa');
const deletarTarefasBt = document.getElementById('apaga-tudo');
const removerFinalizadosBt = document.getElementById('remover-finalizados');
const removerSelecionadoBt = document.getElementById('remover-selecionado');

function selectedItem(item) {
  const selectedAtual = document.querySelector('.selected');
  const selected = item.target;
  if ((selectedAtual) && (selectedAtual === selected)) {
    selectedAtual.classList.remove('selected');
  } else if (selectedAtual) {
    selectedAtual.classList.remove('selected');
    selected.classList.add('selected');
  } else {
    selected.classList.add('selected');
  }
}

function markItem(item) {
  item.target.classList.add('completed');
}

function novaTarefa() {
  const input = document.querySelector('input').value;
  const tarefa = document.createElement('li');
  tarefa.innerHTML = input;
  tarefa.classList.add('tarefa');
  document.querySelector('ol').appendChild(tarefa);
  tarefa.addEventListener('click', selectedItem);
  tarefa.addEventListener('dblclick', markItem);
  document.querySelector('input').value = '';
}

function deleteAll() {
  document.querySelector('ol').remove();
  const lista = document.createElement('ol');
  lista.id = 'lista-tarefas';
  document.querySelector('.lista-tarefas').appendChild(lista);
}

function removeCompleted() {
  const lista = document.querySelectorAll('.completed');
  for (const item of lista) {
    item.remove();
  }
}

function removeSelecionado() {
  const item = document.querySelector('.selected');
  item.remove();
}

criarTarefaBt.addEventListener('click', novaTarefa);
deletarTarefasBt.addEventListener('click', deleteAll);
removerFinalizadosBt.addEventListener('click', removeCompleted);
removerSelecionadoBt.addEventListener('click', removeSelecionado);

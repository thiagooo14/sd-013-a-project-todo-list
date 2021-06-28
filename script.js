const criarTarefaBt = document.getElementById('criar-tarefa');
const deletarTarefasBt = document.getElementById('apaga-tudo');
const removerFinalizadosBt = document.getElementById('remover-finalizados');
const removerSelecionadoBt = document.getElementById('remover-selecionado');
const moverAcima = document.getElementById('mover-cima');
const moverAbaixo = document.getElementById('mover-baixo');
const myInput = document.getElementById('texto-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');
const SalverTarefasBT = document.querySelector('#salvar-tarefas');

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
  if (item.target.classList.contains('completed')) {
    item.target.classList.remove('completed');
  } else {
    item.target.classList.add('completed');
  }
}

function novaTarefa() {
  if (myInput.value !== '') {
    const tarefa = document.createElement('li');
    tarefa.innerHTML = myInput.value;
    tarefa.classList.add('tarefa');
    document.querySelector('ol').appendChild(tarefa);
    tarefa.addEventListener('click', selectedItem);
    tarefa.addEventListener('dblclick', markItem);
    document.querySelector('input').value = '';
  }
}

function deleteAll() {
  document.querySelector('ol').remove();
  const lista = document.createElement('ol');
  lista.id = 'lista-tarefas';
  document.querySelector('.lista-tarefas').appendChild(lista);
}

function removeCompleted() {
  const lista = document.querySelectorAll('.completed');
  lista.forEach((element) => {
    element.remove();
  });
  // for (const item of lista) { item.remove(); }
}

function removeSelecionado() {
  const item = document.querySelector('.selected');
  item.remove();
}

// solução para moveUp e moveDown com base no site https://developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore

function moveUp() {
  const tarefaSelecionada = document.querySelector('.selected');
  let tarefaAterior;
  if (tarefaSelecionada) tarefaAterior = tarefaSelecionada.previousElementSibling;
  if (tarefaAterior) {
    tarefaSelecionada.parentElement.insertBefore(tarefaSelecionada, tarefaAterior);
    tarefaSelecionada.classList.remove('selected');
  }
}

function moveDown() {
  const tarefaSelecionada = document.querySelector('.selected');
  let tarefaPosterior;
  if (tarefaSelecionada) tarefaPosterior = tarefaSelecionada.nextElementSibling;
  if (tarefaPosterior) {
    tarefaSelecionada.parentElement.insertBefore(tarefaPosterior, tarefaSelecionada);
    tarefaSelecionada.classList.remove('selected');
  }
}

// todo -> arrumar a questão de carregar tarefas deletadas
function salvarTarefas() {
  localStorage.setItem('listaDeTarefas', listaTarefas.innerHTML);
}

function carregarTarefas() {
  listaTarefas.innerHTML = localStorage.getItem('listaDeTarefas');
}

function enter(event) { if (event.keyCode === 13) criarTarefaBt.click(); }

criarTarefaBt.addEventListener('click', novaTarefa);
myInput.addEventListener('keyup', enter);
deletarTarefasBt.addEventListener('click', deleteAll);
removerFinalizadosBt.addEventListener('click', removeCompleted);
removerSelecionadoBt.addEventListener('click', removeSelecionado);
moverAcima.addEventListener('click', moveUp);
moverAbaixo.addEventListener('click', moveDown);
SalverTarefasBT.addEventListener('click', salvarTarefas);
window.addEventListener('load', carregarTarefas);

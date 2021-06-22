const criarTarefaBt = document.getElementById('criar-tarefa');
const deletarTarefasBt = document.getElementById('apaga-tudo');
const removerFinalizadosBt = document.getElementById('remover-finalizados');
const removerSelecionadoBt = document.getElementById('remover-selecionado');
const moverAcima = document.getElementById('mover-cima');
const moverAbaixo = document.getElementById('mover-baixo');
let itemPosition = 1;

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
  const input = document.querySelector('input').value;
  const tarefa = document.createElement('li');
  tarefa.innerHTML = input;
  tarefa.classList.add('tarefa');
  document.querySelector('ol').appendChild(tarefa);
  tarefa.addEventListener('click', selectedItem);
  tarefa.addEventListener('dblclick', markItem);
  document.querySelector('input').value = '';
  tarefa.style.order = itemPosition;
  itemPosition += 1;
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

function testPositionInitial() {
  const lista1 = document.querySelectorAll('li');
  const tarefaAtual1 = document.querySelector('.selected');
  const atualPosition1 = parseInt(tarefaAtual1.style.order);
  let positions1 = [];
  let valor = false;
  for (let i = 0; i < lista1.length; i += 1) {
    positions1.push(parseInt(lista1[i].style.order));
  }
  positions1 = positions1.sort();
  if (atualPosition1 === positions1[0]) {
    console.log(atualPosition1);
    console.log(positions1[0]);
    valor = true;
  }
  return valor;
}

function moveUp() {
  if (!(testPositionInitial())) {
    const tarefaAtual = document.querySelector('.selected');
    const lista = document.querySelectorAll('li');
    const atualPosition = parseInt(tarefaAtual.style.order);
    const previosPosition = parseInt(tarefaAtual.style.order) - 1;
    const positions = [];

    for (let i = 0; i < lista.length; i += 1) {
      positions.push(parseInt(lista[i].style.order));
      if (parseInt(lista[i].style.order) === previosPosition) {
        lista[i].style.order = atualPosition;
      }
    }
    tarefaAtual.style.order = previosPosition;
  }
}

function testPositionFinal() {
  const lista1 = document.querySelectorAll('li');
  const tarefaAtual1 = document.querySelector('.selected');
  const atualPosition1 = parseInt(tarefaAtual1.style.order);
  let positions1 = [];
  let valor = false;
  for (let i = 0; i < lista1.length; i += 1) {
    positions1.push(parseInt(lista1[i].style.order));
  }
  positions1 = positions1.sort();
  if (atualPosition1 === positions1[positions1.length - 1]) {
    console.log(atualPosition1);
    console.log(positions1[positions1.length - 1]);
    valor = true;
  }
  return valor;
}

function moveDown() {
  if (!(testPositionFinal())) {
    const tarefaAtual = document.querySelector('.selected');
    const lista = document.querySelectorAll('li');
    const atualPosition = parseInt(tarefaAtual.style.order);
    const nextPosition = parseInt(tarefaAtual.style.order) + 1;
    const positions = [];

    for (let i = 0; i < lista.length; i += 1) {
      positions.push(parseInt(lista[i].style.order));
      if (parseInt(lista[i].style.order) === nextPosition) {
        lista[i].style.order = atualPosition;
        // tarefaAtual.style.order = parseInt(lista[i - 1].style.order);
      }
    }
    tarefaAtual.style.order = nextPosition;
  }
}

criarTarefaBt.addEventListener('click', novaTarefa);
deletarTarefasBt.addEventListener('click', deleteAll);
removerFinalizadosBt.addEventListener('click', removeCompleted);
removerSelecionadoBt.addEventListener('click', removeSelecionado);
moverAcima.addEventListener('click', moveUp);
moverAbaixo.addEventListener('click', moveDown);

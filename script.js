const criarTarefaBt = document.getElementById('criar-tarefa');
const deletarTarefasBt = document.getElementById('apaga-tudo');
const removerFinalizadosBt = document.getElementById('remover-finalizados');
const removerSelecionadoBt = document.getElementById('remover-selecionado');
const moverAcima = document.getElementById('mover-cima');
const moverAbaixo = document.getElementById('mover-baixo');
const myInput = document.getElementById('texto-tarefa');

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

// A solução que eu encontrei faz o q foi pedido, entretando não é aceita pelo avaliador.
// portanto a mesma foi descartada e foi usada a função insertBefore()
// apesar disso decidi manter o codigo abaixo para fins de referencia de raciocinio.

// function moveUp() {
//   const lista = document.querySelectorAll('li');
//   const tarefaSelecionada = document.querySelector('.selected');
//   let tarefa = '';
//   for (let i = 1; i < lista.length; i += 1) {
//     if (lista[i] === tarefaSelecionada) {
//       tarefa = lista[i - 1].innerHTML;
//       lista[i - 1].innerHTML = tarefaSelecionada.innerHTML;
//       tarefaSelecionada.textContent = tarefa;
//       lista[i - 1].click();
//     }
//   }
// }

// function moveDown() {
//   const lista = document.querySelectorAll('li');
//   const tarefaSelecionada = document.querySelector('.selected');
//   let tarefa = '';
//   for (let i = lista.length - 2; i >= 0; i -= 1) {
//     if (lista[i] === tarefaSelecionada) {
//       tarefa = lista[i + 1].innerHTML;
//       lista[i + 1].innerHTML = tarefaSelecionada.innerHTML;
//       tarefaSelecionada.textContent = tarefa;
//       lista[i + 1].click();
//     }
//   }
// }

// solução com base no site https://developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore

function moveUp() {
  const tarefaSelecionada = document.querySelector('.selected');
  let tarefaAterior;
  if (tarefaSelecionada) tarefaAterior = tarefaSelecionada.previousElementSibling;
  if (tarefaAterior) tarefaSelecionada.parentElement.insertBefore(tarefaSelecionada, tarefaAterior);
}

function moveDown() {
  const tarefaSelecionada = document.querySelector('.selected');
  let tarefaAterior;
  if (tarefaSelecionada) tarefaAterior = tarefaSelecionada.nextElementSibling;
  if (tarefaAterior) tarefaSelecionada.parentElement.insertBefore(tarefaAterior, tarefaSelecionada);
}

function enter(event) { if (event.keyCode === 13) criarTarefaBt.click(); }

criarTarefaBt.addEventListener('click', novaTarefa);
myInput.addEventListener('keyup', enter);
deletarTarefasBt.addEventListener('click', deleteAll);
removerFinalizadosBt.addEventListener('click', removeCompleted);
removerSelecionadoBt.addEventListener('click', removeSelecionado);
moverAcima.addEventListener('click', moveUp);
moverAbaixo.addEventListener('click', moveDown);

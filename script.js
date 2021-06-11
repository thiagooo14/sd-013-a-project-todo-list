/* eslint-disable func-names */
const addButton = document.getElementById('criar-tarefa');
const task = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');
let lastMarked = null;
const cleanButton = document.getElementById('apaga-tudo');
const cleanCheckedButton = document.getElementById('remover-finalizados');
const removeSelectedButton = document.getElementById('remover-selecionado');
const moveUpButton = document.getElementById('mover-cima');
const moveDownButton = document.getElementById('mover-baixo');
const saveListButton = document.getElementById('salvar-tarefas');

function saveList() {
  localStorage.setItem('taskList', taskList.innerHTML);
}
// tamanho do texto para marcar somente área escrita
function getTextWidth(text, font) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  context.font = font || getComputedStyle(document.body).font;

  const pxSize = (Math.round(context.measureText(text).width * 1.8)).toString();
  return pxSize.concat('px');
}
// funcão que troca a posicão dos elementos do dom
function swampElem(paiElem, newElem, oldElem) {
  paiElem.insertBefore(newElem, oldElem);
}
// recupera a lista de tarefas da sessão anterior
// eslint-disable-next-line func-names
const loadList = function () {
  taskList.innerHTML = localStorage.getItem('taskList');
};

// mover elemento da lista de tarefas para cima
const onButtonMoveDown = function () {
  if (lastMarked && taskList.lastElementChild !== lastMarked) {
    swampElem(taskList, lastMarked.nextElementSibling, lastMarked);
    saveList();
  }
};
// mover elemento da lista de tarefas para baixo
const onButtonMoveUp = function () {
  if (lastMarked && taskList.firstElementChild !== lastMarked) {
    swampElem(taskList, lastMarked, lastMarked.previousElementSibling);
    saveList();
  }
};
// adiciona a nova tarefa inserida no input box
const onButtonClick = function () {
  if (task.value.length > 0) {
    const newTask = document.createElement('li');
    newTask.innerHTML = task.value;
    newTask.style.width = getTextWidth(task.value);
    newTask.style.margin = '10px';
    taskList.appendChild(newTask);
    task.value = '';
    saveList();
  }
};
// marca o item selecionado com a cor cinza
const onItem = function (e) {
  if (e.target.tagName === 'LI') {
    if (lastMarked != null) {
      lastMarked.style.backgroundColor = 'white';
    }
    e.target.style.backgroundColor = 'rgb(128, 128, 128)';
    lastMarked = e.target;
    saveList();
  }
};
// com o duplo clique gera um riscado no item
const checkedItem = function (e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('completed');
    saveList();
  }
};
// deleta a lista
const cleanList = function () {
  taskList.innerHTML = '';
  saveList();
};
// limpa os elementos que já foram finalizados
const cleanFinished = function () {
  const riskedItens = taskList.getElementsByClassName('completed');
  while (riskedItens[0]) {
    riskedItens[0].parentNode.removeChild(riskedItens[0]);
  }
  saveList();
};
// remove o último item marcado
const selected = function () {
  if (lastMarked !== null) {
    lastMarked.parentNode.removeChild(lastMarked);
    saveList();
  }
};

// Listeners
addButton.addEventListener('click', onButtonClick);
cleanButton.addEventListener('click', cleanList);
cleanCheckedButton.addEventListener('click', cleanFinished);
document.addEventListener('DOMContentLoaded', loadList);
moveDownButton.addEventListener('click', onButtonMoveDown);
moveUpButton.addEventListener('click', onButtonMoveUp);
removeSelectedButton.addEventListener('click', selected);
saveListButton.addEventListener('click', saveList);
taskList.addEventListener('click', onItem);
taskList.addEventListener('dblclick', checkedItem);

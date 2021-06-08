const createTaskButton = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const buttonClearAll = document.querySelector('#apaga-tudo');
const buttonRemoveFinished = document.querySelector('#remover-finalizados');
const buttonSaveTasks = document.querySelector('#salvar-tarefas');
const buttonMoveUp = document.querySelector('#mover-cima');
const buttonMoveDown = document.querySelector('#mover-baixo');

function createTask() {
  const taskTextInput = document.querySelector('#texto-tarefa').value;
  const newTask = document.createElement('li');
  newTask.className = 'item-list';
  newTask.innerHTML = taskTextInput;
  taskList.appendChild(newTask);
  document.querySelector('#texto-tarefa').value = '';
  focusColorList();
}
createTaskButton.addEventListener('click', createTask);

function focusColorList() {
  const taskListItems = document.querySelectorAll('.item-list');
  for (let index = 0; index < taskListItems.length; index += 1) {
    taskListItems[index].addEventListener('click', changeColorFocus);
    taskListItems[index].addEventListener('dblclick', setCompletedStatus)
  }
}
focusColorList();

function changeColorFocus(event) {
  let taskListItems = document.querySelectorAll('.item-list');
  for (let index = 0; index < taskListItems.length; index += 1) {
    taskListItems[index].style.backgroundColor = '';
  }
  event.target.style.backgroundColor = 'rgb(128,128,128)'
}

function setCompletedStatus(event) {
  if (event.target.className == 'item-list completed') {
    event.target.className = 'item-list';
  } else {
    event.target.className += ' completed';
  }
}

// Requisito 10
function clearAll() {
  let itemsToClear = document.querySelector('#lista-tarefas');
  itemsToClear.innerHTML = '';
}
buttonClearAll.addEventListener('click', clearAll);

// Requisito 11
function removeFinished() {
  let itemsForRemove = document.querySelectorAll('.completed');
  let allItems = document.querySelector('#lista-tarefas');
  for (let index = 0; index < itemsForRemove.length; index += 1) {
    allItems.removeChild(itemsForRemove[index]);
  }
}
buttonRemoveFinished.addEventListener('click', removeFinished);

// Requisito 12
function saveTasks() {
  let allItems = document.querySelector('#lista-tarefas');
  console.log(allItems.innerHTML);
  localStorage.setItem('tasks', allItems.innerHTML);
}
buttonSaveTasks.addEventListener('click', saveTasks);

function recoverAllTasks() {
  console.log(localStorage.getItem('tasks'));
  taskList.innerHTML = localStorage.getItem('tasks');
  focusColorList();
}
recoverAllTasks();

// requisito 13

function moveUp() {
  const elementsFocused = document.querySelector('.selected');
  if (elementsFocused && elementsFocused.previousSibling) {
    taskList.insertBefore(elementsFocused, elementsFocused.previousSibling)
  }
}
buttonMoveUp.addEventListener('click', moveUp);

function moveDown() {
  const elementsFocused = document.querySelector('.selected');
  if (elementsFocused && elementsFocused.nextSibling) {
    taskList.insertBefore(elementsFocused.nextSibling, elementsFocused);
  }
}
buttonMoveDown.addEventListener('click', moveDown);
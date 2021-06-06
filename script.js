const createTaskButton = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const buttonClearAll = document.querySelector('#apaga-tudo');
const buttonRemoveFinished = document.querySelector('#remover-finalizados');
const buttonSaveTasks = document.querySelector('#salvar-tarefas');
const buttonMoveUp = document.querySelector('#mover-cima');
const buttonMoveDown = document.querySelector('#mover-baixo');
const buttonRemoveItem = document.querySelector('#remover-selecionado');

function changeFocus(event) {
  const taskListItems = document.querySelectorAll('.item-list');
  for (let i = 0; i < taskListItems.length; i += 1) {
    taskListItems[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function setCompletedStatus(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function focusList() {
  const taskListItems = document.querySelectorAll('.item-list');
  for (let i = 0; i < taskListItems.length; i += 1) {
    taskListItems[i].addEventListener('click', changeFocus);
    taskListItems[i].addEventListener('dblclick', setCompletedStatus);
  }
}
focusList();

function createTask() {
  const taskTextInput = document.querySelector('#texto-tarefa').value;
  const newTask = document.createElement('li');
  newTask.className = 'item-list';
  newTask.innerHTML = taskTextInput;
  taskList.appendChild(newTask);
  document.querySelector('#texto-tarefa').value = '';
  focusList();
}
createTaskButton.addEventListener('click', createTask);

function clearAll() {
  taskList.innerHTML = '';
}
buttonClearAll.addEventListener('click', clearAll);

function removeFinished() {
  const itemsToRemove = document.querySelectorAll('.completed');
  for (let i = 0; i < itemsToRemove.length; i += 1) {
    taskList.removeChild(itemsToRemove[i]);
  }
}
buttonRemoveFinished.addEventListener('click', removeFinished);

function saveTasks() {
  localStorage.setItem('tasks', taskList.innerHTML);
}
buttonSaveTasks.addEventListener('click', saveTasks);

function recoverTasks() {
  taskList.innerHTML = localStorage.getItem('tasks');
  focusList();
}
recoverTasks();

function moveUp() {
  const elementsFocused = document.querySelector('.selected');
  if (elementsFocused && elementsFocused.previousSibling) {
    taskList.insertBefore(elementsFocused, elementsFocused.previousSibling);
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

function removeItem() {
  const itemRemove = document.querySelector('.selected');
  itemRemove.remove();
}
buttonRemoveItem.addEventListener('click', removeItem);

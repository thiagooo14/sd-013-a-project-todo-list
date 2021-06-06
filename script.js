const createTaskButton = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const buttonClearAll = document.querySelector('#apaga-tudo');
const buttonRemoveFinished = document.querySelector('#remover-finalizados');

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
  event.target.style.backgroundColor = 'rgb(128,128,128';
}

function setCompletedStatus(event) {
  if (event.target.className == 'item-list completed') {
    event.target.className = 'item-list';
  } else {
    event.target.className += 'completed';
  }
}

function clearAll() {
  let itemsToClear = document.querySelector('#lista-tarefas');
  itemsToClear.innerHTML = '';
}
buttonClearAll.addEventListener('click', clearAll);

function removeFinished() {
  let itemsForRemove = document.querySelectorAll('.completed');
  let allItems = document.querySelector('#lista-tarefas');
  for (let index = 1; index < itemsForRemove.length; index += 1) {
    allItems.removeChild(itemsForRemove[index]);
  }
}
buttonRemoveFinished.addEventListener('click', removeFinished);

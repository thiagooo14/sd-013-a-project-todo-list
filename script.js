let createTaskButton = document.querySelector('#criar-tarefa');
let taskList =document.querySelector('#lista-tarefas');
let buttonClearAll = document.querySelector('#apaga-tudo');
let buttonRemoveFinished = document.querySelector('#remover-finalizados');
let buttonSaveTasks = document.querySelector('#salvar-tarefas');
let buttonMoveUp = document.querySelector('#mover-cima');
let buttonMoveDown = document.querySelector('#mover-baixo');
let buttonRemoveItem = document.querySelector('#remover-selecionado');

function createTask(){
  let taskTextInput = document.querySelector('#texto-tarefa').value;
  let newTask = document.createElement('li');
  newTask.className = 'item-list'
  newTask.innerHTML = taskTextInput;
  taskList.appendChild(newTask);
  document.querySelector('#texto-tarefa').value = '';
  focusList();
}
createTaskButton.addEventListener('click', createTask);

function focusList(){
  let taskListItems = document.querySelectorAll('.item-list');
  for (let i = 0; i < taskListItems.length; i += 1){
    taskListItems[i].addEventListener('click', changeFocus);
    taskListItems[i].addEventListener('dblclick', setCompletedStatus)
  }
}
focusList();

function changeFocus(event){
  let taskListItems = document.querySelectorAll('.item-list');
  for (let i = 0; i < taskListItems.length; i += 1){
    taskListItems[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function setCompletedStatus(event){
  if ( event.target.classList.contains('completed')){
    event.target.classList.remove('completed');
  } else {
  event.target.classList.add('completed');
  }
}

function clearAll(){
  let itemsToClear = document.querySelector('#lista-tarefas');
  itemsToClear.innerHTML = '';
}
buttonClearAll.addEventListener('click', clearAll);

function removeFinished(){
  let itemsToRemove = document.querySelectorAll('.completed');
  let allItems = document.querySelector('#lista-tarefas');
  for (let i=0; i < itemsToRemove.length; i += 1){
    allItems.removeChild(itemsToRemove[i]);
  }
}
buttonRemoveFinished.addEventListener('click', removeFinished);

function saveTasks(){
  let allItems = document.querySelector('#lista-tarefas');
  console.log(allItems.innerHTML);
  localStorage.setItem('tasks', allItems.innerHTML);
}
buttonSaveTasks.addEventListener('click', saveTasks);

function recoverTasks(){
  taskList.innerHTML = localStorage.getItem('tasks');
  focusList();
}
recoverTasks();

function moveUp(){
  let elementsFocused = document.querySelector('.selected');
  if (elementsFocused && elementsFocused.previousSibling){
    taskList.insertBefore(elementsFocused, elementsFocused.previousSibling)
  }
}
buttonMoveUp.addEventListener('click', moveUp);

function moveDown(){
  let elementsFocused = document.querySelector('.selected');
  if (elementsFocused && elementsFocused.nextSibling){
    taskList.insertBefore(elementsFocused.nextSibling, elementsFocused);
  }
}
buttonMoveDown.addEventListener('click', moveDown);

function removeItem(){
  let itemRemove = document.querySelector('.selected');
  itemRemove.remove();
}
buttonRemoveItem.addEventListener('click', removeItem);
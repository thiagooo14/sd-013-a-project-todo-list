let createTaskButton = document.querySelector('#criar-tarefa');
let taskList =document.querySelector('#lista-tarefas');
let buttonClearAll = document.querySelector('#apaga-tudo');
let buttonRemoveFinished = document.querySelector('#remover-finalizados');

function createTask(){
  let taskTextInput = document.querySelector('#texto-tarefa').value;
  let newTask = document.createElement('li');
  newTask.className = 'item-list'
  newTask.innerHTML = taskTextInput;
  taskList.appendChild(newTask);
  document.querySelector('#texto-tarefa').value = '';
  focusColorList();
}
createTaskButton.addEventListener('click', createTask);

function focusColorList(){
  let taskListItems = document.querySelectorAll('.item-list');
  for (let i = 0; i < taskListItems.length; i += 1){
    taskListItems[i].addEventListener('click', changeColorFocus);
    taskListItems[i].addEventListener('dblclick', setCompletedStatus)
  }
}
focusColorList();

function changeColorFocus(event){
  let taskListItems = document.querySelectorAll('.item-list');
  for (let i = 0; i < taskListItems.length; i += 1){
    taskListItems[i].style.backgroundColor = '';
  }
  event.target.style.backgroundColor = 'rgb(128,128,128)';
}

function setCompletedStatus(event){
  if ( event.target.className == 'item-list completed'){
    event.target.className = 'item-list';
  } else {
  event.target.className += ' completed';
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

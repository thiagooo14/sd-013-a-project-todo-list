let createTaskButton = document.querySelector('#criar-tarefa');
let taskList =document.querySelector('#lista-tarefas');

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
  }
}
focusColorList();

function changeColorFocus(event){
  let actualFocus = document.querySelector('.selected');
  if ( actualFocus ){
    actualFocus.className = 'item-list';
  }
  event.target.className = 'item-list selected';
}

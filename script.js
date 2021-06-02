const createTaskButton = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');

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
  for (let i = 0; i < taskListItems.length; i += 1) {
    taskListItems[i].addEventListener('click', changeColorFocus);
  }
}
focusColorList();

function changeColorFocus(event) {
  const actualFocus = document.querySelector('.selected');
  if (actualFocus) {
    actualFocus.className = 'item-list';
  }
  event.target.className = 'item-list selected';
}

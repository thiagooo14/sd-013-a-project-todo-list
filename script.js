let createTaskButton = document.querySelector('#criar-tarefa');

function createTask(){
  let taskTextInput = document.querySelector('#texto-tarefa').value;
  let newTask = document.createElement('li');
  let taskList = document.querySelector('#lista-tarefas');
  newTask.innerHTML = taskTextInput;
  taskList.appendChild(newTask);
  document.querySelector('#texto-tarefa').value = '';
}
createTaskButton.addEventListener('click', createTask);


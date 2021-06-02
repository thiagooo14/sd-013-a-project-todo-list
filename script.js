const buttonTask = document.querySelector('#criar-tarefa');
const inputTask = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');
buttonTask.addEventListener('click', function () {
  let liTask = document.createElement('li');
  liTask.innerHTML = inputTask.value;
  inputTask.value = '';
  taskList.appendChild(liTask);
})
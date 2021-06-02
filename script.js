const taskButton = document.getElementById('criar-tarefa');
const taskInput = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');

taskButton.addEventListener('click', createItem);

function createItem() {
  let taskItem = document.createElement('li');
  taskItem.classList.add('tarefa');
  taskItem.innerText = taskInput.value;
  taskList.appendChild(taskItem);
  //Thread do StackOverFlow que ajudou a resolver a questão de como zerar o input: https://stackoverflow.com/questions/37511093/reset-is-not-a-function-in-javascript
  taskInput.value = "";
}
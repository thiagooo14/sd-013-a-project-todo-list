const listaTasks = document.getElementById('lista-tarefas');
const btnAddTask = document.getElementById('criar-tarefa');

function addTasks() {
  const textValue = document.getElementById('texto-tarefa').value;
  const taskList = document.createElement('li');
  taskList.innerText = textValue;
  document.getElementById('texto-tarefa').value = ''; // Reseta o input
  listaTasks.appendChild(taskList);
}

btnAddTask.addEventListener('click', addTasks);

const buttonCreateTask = document.querySelector('#criar-tarefa');

function addTask () {
  const task = document.querySelector('#texto-tarefa');
  const taskText = document.querySelector('#texto-tarefa').value;
  let ol = document.querySelector('#lista-tarefas');
  let li = document.createElement('li');
  li.innerHTML = taskText;
  ol.appendChild(li);
  task.value = '';
}

buttonCreateTask.addEventListener('click', addTask);

const buttonCreateTask = document.querySelector('#criar-tarefa');
const ol = document.querySelector('#lista-tarefas');
const clearButton = document.querySelector('#apaga-tudo');

buttonCreateTask.addEventListener('click', function createTask() {
  const task = document.querySelector('#texto-tarefa');
  const taskText = document.querySelector('#texto-tarefa').value;
  const li = document.createElement('li');
  li.className = 'liTask';
  li.innerHTML = taskText;
  ol.appendChild(li);
  task.value = '';
  li.addEventListener('click', taskSelect);
  li.addEventListener('dblclick', taskFinished);
});

function taskSelect(event) {
  const li = document.querySelectorAll('.liTask');
  for (let i = 0; i < li.length; i += 1) {
    li[i].removeAttribute('id');
  }
  event.target.id = 'selected-task';
}

function taskFinished(event) {
  event.target.classList.toggle('completed');
}

clearButton.addEventListener('click', function clearAllTasks() {
  let li = document.querySelectorAll('.liTask');
  for (let j = 0; j < li.length; j += 1) {
    ol.removeChild(li[j]);
  }
});

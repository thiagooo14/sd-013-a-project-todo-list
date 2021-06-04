const buttonCreateTask = document.querySelector('#criar-tarefa');
const ol = document.querySelector('#lista-tarefas');

buttonCreateTask.addEventListener('click', function createTask() {
  const task = document.querySelector('#texto-tarefa');
  const taskText = document.querySelector('#texto-tarefa').value;
  const li = document.createElement('li');
  li.className = 'liTask';
  li.innerHTML = taskText;
  ol.appendChild(li);
  task.value = '';
  li.addEventListener('click', taskSelect);
});

function taskSelect(event) {
  const li = document.querySelectorAll('.liTask');
  for (let i = 0; i < li.length; i += 1) {
    li[i].removeAttribute('id');
  }

  event.target.id = 'selected-task';
}

const buttonCreateTask = document.querySelector('#criar-tarefa');

buttonCreateTask.addEventListener('click', function createTask() {
  const task = document.querySelector('#texto-tarefa');
  const taskText = document.querySelector('#texto-tarefa').value;
  const ol = document.querySelector('#lista-tarefas');
  const li = document.createElement('li');
  li.className = 'liTask'
  li.innerHTML = taskText;
  ol.appendChild(li);
  task.value = '';
  li.addEventListener('click', function printNewBG() {
    li.style.backgroundColor = 'rgb(128, 128, 128)';
  });
});

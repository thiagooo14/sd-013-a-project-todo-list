const input = document.getElementById('texto-tarefa');
const btnCreate = document.getElementById('criar-tarefa');
const btnClear = document.getElementById('apaga-tudo');
const btnClearCompleted = document.getElementById('remover-finalizados');
const taskList = document.getElementById('lista-tarefas');

function createTask() {
  const li = document.createElement('li');

  li.innerText = input.value;
  li.className = 'task';
  taskList.appendChild(li);
  input.value = null;
}

function selectTask(e) {
  if (e.target.classList.contains('task')) {
    const previousSelected = document.querySelector('.selected');

    e.target.classList.add('selected');
    if (previousSelected) {
      previousSelected.classList.remove('selected');
    }
  }
}

function completeTask(e) {
  if (e.target.classList.contains('task')) e.target.classList.toggle('completed');
}

function clearTaskList() {
  while (taskList.firstChild) taskList.firstChild.remove();
}

function clearTasksCompleted() {
  const tasksCompleted = document.getElementsByClassName('completed');

  while (tasksCompleted.length > 0) tasksCompleted[0].remove();
}

window.onload = () => {
  btnCreate.addEventListener('click', createTask);
  btnClear.addEventListener('click', clearTaskList);
  btnClearCompleted.addEventListener('click', clearTasksCompleted);
  document.addEventListener('click', selectTask);
  document.addEventListener('dblclick', completeTask);
};

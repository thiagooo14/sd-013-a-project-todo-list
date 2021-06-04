let taskSelected; // Always updated and available in any function.
const taskList = document.getElementById('lista-tarefas');

/**
 * Create and append a new task to ol#lista-tarefas.
 * @param obj The event when adding a new task or the
 * object retrieved from localStorage when loading the page.
 */
function createTask(obj) {
  const btnCreate = document.getElementById('criar-tarefa');
  const li = document.createElement('li');

  li.className = 'task';
  if (obj.target !== btnCreate) {
    li.innerText = obj.text;
    if (obj.completed) li.classList.add('completed');
  } else {
    const input = document.getElementById('texto-tarefa');

    li.innerText = input.value;
    input.value = null;
  }
  taskList.appendChild(li);
}

function createTaskList(list) {
  list.forEach(createTask); // Each object is passed to createTask
}

function selectTask(e) {
  if (e.target.classList.contains('task')) {
    if (taskSelected === e.target) return; // Clicked task already selected

    // Deselect the previous task
    if (taskSelected) taskSelected.classList.remove('selected');

    e.target.classList.add('selected');
    taskSelected = e.target; // So browser doesn't need to look it up
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

function save() {
  const listObj = [];

  Array.prototype.map.call(taskList.children, (task) => {
    listObj.push({
      text: task.innerHTML,
      completed: task.classList.contains('completed'),
    });
  });

  localStorage.setItem('taskList', JSON.stringify(listObj));
}

function retrieveTaskListFromLocalStorage() {
  const list = localStorage.getItem('taskList');

  if (list) {
    createTaskList(JSON.parse(list));
  }
}

function moveSelectedTaskUp() {
  if (!taskSelected) return;

  if (taskSelected !== taskList.firstChild) {
    taskList.insertBefore(taskSelected, taskSelected.previousElementSibling);
  }
}

function moveSelectedTaskDown() {
  if (!taskSelected) return;

  if (taskSelected !== taskList.lastChild) {
    taskSelected.nextElementSibling.insertAdjacentElement('afterend', taskSelected);
  }
}

function removeSelectedTask() {
  if (!taskSelected) return;

  taskSelected.remove();
}

window.onload = () => {
  retrieveTaskListFromLocalStorage();

  /** Buttons */
  document.getElementById('criar-tarefa').addEventListener('click', createTask);
  document.getElementById('apaga-tudo').addEventListener('click', clearTaskList);
  document.getElementById('remover-finalizados').addEventListener('click', clearTasksCompleted);
  document.getElementById('salvar-tarefas').addEventListener('click', save);
  document.getElementById('mover-cima').addEventListener('click', moveSelectedTaskUp);
  document.getElementById('mover-baixo').addEventListener('click', moveSelectedTaskDown);
  document.getElementById('remover-selecionado').addEventListener('click', removeSelectedTask);

  /** Event Bubbling */
  document.addEventListener('click', selectTask);
  document.addEventListener('dblclick', completeTask);
};

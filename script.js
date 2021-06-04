const input = document.getElementById('texto-tarefa');
const btnCreate = document.getElementById('criar-tarefa');
const btnClear = document.getElementById('apaga-tudo');
const btnClearCompleted = document.getElementById('remover-finalizados');
const btnSave = document.getElementById('salvar-tarefas');
const taskList = document.getElementById('lista-tarefas');

/**
 * Create and append a new task to ol#lista-tarefas.
 * @param obj The event when adding a new task or the
 * object retrieved from localStorage when loading the page.
 */
function createTask(obj) {
  const li = document.createElement('li');

  li.className = 'task';
  if (obj.target !== btnCreate) {
    li.innerText = obj.text;
    if (obj.completed) li.classList.add('completed');
  } else {
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

window.onload = () => {
  retrieveTaskListFromLocalStorage();
  btnCreate.addEventListener('click', createTask);
  btnClear.addEventListener('click', clearTaskList);
  btnClearCompleted.addEventListener('click', clearTasksCompleted);
  btnSave.addEventListener('click', save);
  document.addEventListener('click', selectTask);
  document.addEventListener('dblclick', completeTask);
};

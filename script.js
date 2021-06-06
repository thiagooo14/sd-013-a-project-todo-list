function clearInput() {
  document.getElementById('texto-tarefa').value = '';
}

function setupTaskDubleClick(event) {
  const element = event.target;
  element.classList.toggle('completed');
}

function setupTaskClick(event) {
  const currentSelectedTask = document.getElementsByClassName('selected')[0];
  const element = event.target;
  if (currentSelectedTask !== undefined) {
    currentSelectedTask.classList.toggle('selected');
  }
  element.classList.toggle('selected');
}

function addTaskEvents(task) {
  task.addEventListener('click', setupTaskClick);
  task.addEventListener('dblclick', setupTaskDubleClick);
}

function enterTask(taskText, taskClass) {
  const orderedList = document.getElementById('lista-tarefas');
  const newTask = document.createElement('li');
  newTask.innerText = taskText;
  if (taskClass !== '') newTask.classList.add(taskClass);
  addTaskEvents(newTask);
  orderedList.appendChild(newTask);
}

function addTask() {
  const inputText = document.getElementById('texto-tarefa').value;
  const lis = document.getElementsByTagName('li').length;
  if (inputText === '' || lis > 9) return;
  enterTask(inputText, '');
  clearInput();
}

function deleteTasks() {
  document.getElementById('lista-tarefas').innerHTML = '';
}

function deleteDoneTasks() {
  const li = document.querySelectorAll('.completed');
  console.log(li);
  for (let i = 0; i < li.length; i += 1) {
    li[i].parentNode.removeChild(li[i]);
  }
}

function deleteSelectedTask() {
  const li = document.querySelector('.selected');
  if (li === null) return;
  li.parentNode.removeChild(li);
}

function moveUp() {
  const li = document.querySelector('.selected');
  if (li === null) return;
  if (li.previousElementSibling) {
    li.parentNode.insertBefore(li, li.previousElementSibling);
  }
}

function moveDown() {
  const li = document.querySelector('.selected');
  if (li === null) return;
  if (li.nextElementSibling) {
    li.parentNode.insertBefore(li, (li.nextElementSibling).nextElementSibling);
  }
}

function saveTasks() {
  const tasks = Array.from(document.getElementsByTagName('li'), (line) => line.innerText);
  const status = Array.from(document.getElementsByTagName('li'), (line) => {
    let res = '';
    if (line.className.includes('completed')) res = 'completed';
    return res;
  });
  localStorage.setItem('tasks', tasks);
  localStorage.setItem('status', status);
}

function loadTasks() {
  if (localStorage.tasks === undefined) return;
  const tasks = localStorage.getItem('tasks').split(',');
  const status = localStorage.getItem('status').split(',');
  console.log(status);
  for (let task = 0; task < tasks.length; task += 1) {
    if (tasks[task] !== '') enterTask(tasks[task], status[task]);
  }
}

function configButtonClick(idButton, func) {
  document.getElementById(idButton).addEventListener('click', func);
}

window.onload = function startPage() {
  configButtonClick('criar-tarefa', addTask);
  configButtonClick('mover-cima', moveUp);
  configButtonClick('mover-baixo', moveDown);
  configButtonClick('salvar-tarefas', saveTasks);
  configButtonClick('remover-selecionado', deleteSelectedTask);
  configButtonClick('apaga-tudo', deleteTasks);
  configButtonClick('remover-finalizados', deleteDoneTasks);
  loadTasks();
};

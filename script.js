const textTask = document.getElementById('texto-tarefa');
const add = document.getElementById('criar-tarefa');
const listTask = document.getElementById('lista-tarefas');
const clear = document.getElementById('apaga-tudo');
const clearCompleted = document.getElementById('remover-finalizados');
const clearSelected = document.getElementById('remover-selecionado');
const up = document.getElementById('mover-cima');
const down = document.getElementById('mover-baixo');
const save = document.getElementById('salvar-tarefas');
const taskList = document.getElementsByClassName('task');
const completedList = document.getElementsByClassName('completed');
const selectedList = document.getElementsByClassName('selected');

function addTask() {
  const task = document.createElement('li');
  task.classList.add('task');
  task.innerText = textTask.value;
  listTask.appendChild(task);
  textTask.value = '';
}

add.addEventListener('click', addTask);

function selected(eventA) {
  const list = eventA.target;
  for (let index = 0; taskList.length > index; index += 1) {
    if (taskList[index].classList.contains('selected')) {
      taskList[index].classList.remove('selected');
    }
  }
  if (list.classList.contains('task')) {
    list.classList.add('selected');
  }
}

listTask.addEventListener('click', selected);

function completed(eventB) {
  const finish = eventB.target;
  if (finish.classList.contains('task')) {
    if (finish.classList.contains('completed')) {
      finish.classList.remove('completed');
    } else {
      finish.classList.add('completed');
    }
  }
}
listTask.addEventListener('dblclick', completed);

function clearAllTask() {
  for (let index = taskList.length - 1; index >= 0; index -= 1) {
    listTask.removeChild(taskList[index]);
  }
}

clear.addEventListener('click', clearAllTask);

function clearTask() {
  for (let index = completedList.length - 1; index >= 0; index -= 1) {
    listTask.removeChild(completedList[index]);
  }
}

clearCompleted.addEventListener('click', clearTask);

function clearTaskSelected() {
  for (let index = selectedList.length - 1; index >= 0; index -= 1) {
    listTask.removeChild(selectedList[index]);
  }
}

clearSelected.addEventListener('click', clearTaskSelected);

function before() {
  for (let index = 0; taskList.length > index; index += 1) {
    if (index > 0 && taskList[index].classList.contains('selected')) {
      listTask.insertBefore(taskList[index], taskList[index - 1]);
    }
  }
}

up.addEventListener('click', before);

function after() {
  for (let index = 0; taskList.length > index; index += 1) {
    if (index < taskList.length - 1 && taskList[index].classList.contains('selected')) {
      listTask.insertBefore(taskList[index + 1], taskList[index]);
      break;
    }
  }
}

down.addEventListener('click', after);

function saveTask() {
  localStorage.setItem('save', listTask.innerHTML);
}

save.addEventListener('click', saveTask);

function loadTask() {
  if (localStorage.getItem('save')) {
    listTask.innerHTML = localStorage.getItem('save');
  }
}
loadTask();

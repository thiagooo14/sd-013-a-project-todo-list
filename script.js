
window.onload = function () {
  addingTask();
  taskSelected();
  completedTasks();
  clearTasks();
  removeFinishedTasks();
  saveSession();
}

// Cria função para criação de tarefas.
function addingTask() {
  let taskText = document.getElementById('texto-tarefa');
  let btnCreate = document.getElementById('criar-tarefa');
  let list = document.getElementById('lista-tarefas');

  btnCreate.addEventListener('click', function () {
    let task = document.createElement('li');
    task.classList.add('task');
    task.innerText = taskText.value
    list.appendChild(task);
    taskText.value = null;
  })
}

// Cria função de remover classes. Obs: parametro 'element' pode ser também uma classe ou id;
function removeClass(element, eClass) {
  element = document.querySelectorAll(element);
  for (let iterator of element) {
    if (iterator.classList.contains(eClass)) {
      iterator.classList.remove(eClass);
    }
  }
}

// Cria função de selecionar tarefas.
function taskSelected() {

  document.addEventListener('click', function (event) {
    let task = event.target;
    if (task.classList.contains('task')) {

      removeClass('li', 'selected');
      task.classList.add('selected');

    }
  })
}

// Cria funcao de riscar tarefas já completadas.
function completedTasks() {

  document.addEventListener('dblclick', function (event) {
    let task = event.target;
    if (task.classList.contains('task')) {
      if (task.classList.contains('completed')) {
        task.classList.remove('completed')
      } else {
        task.classList.add('completed');
      }
    }
  })
}

// Cria funcao de limpar as tarefas.
function clearTasks() {

  let btnClear = document.getElementById('apaga-tudo');

  btnClear.addEventListener('click', function () {
    let taskList = document.getElementById('lista-tarefas');

    let tasks = document.querySelectorAll('.task');
    for (element of tasks) {
      taskList.removeChild(element);
    }
  })
}

// Cria funcao para remover tarefas finalizadas.
function removeFinishedTasks() {
  let btnFinished = document.getElementById('remover-finalizados');

  btnFinished.addEventListener('click', function () {
    let tasks = document.querySelectorAll('.completed');
    let taskList = document.getElementById('lista-tarefas')

    for (let element of tasks) {
      taskList.removeChild(element);
    }
  })
}

// Cria elemento com li com classe
function createTask(eClass, text) {
  let taskBoard = document.getElementById('lista-tarefas');

  for (let i = 0; i < eClass.length; i += 1) {
    let task = document.createElement('li');
    task.className = eClass[i];
    task.innerText = text[i];
    taskBoard.appendChild(task);
  }
}

// Cria funcao para salvar a lista de tarefas.
function saveSession() {

  let btnSaveSession = document.getElementById('salvar-tarefas');

  btnSaveSession.addEventListener('click', function () {
    let tasks = document.getElementsByClassName('task');
    let content = [];
    let eClass = [];
    let task = {}
    for (let iterator of tasks) {
      eClass.push(iterator.className);
      content.push(iterator.innerText);
      task.class = eClass;
      task.text = content;
    }
    localStorage.setItem('elements', JSON.stringify(task));
  })
}

// Cria funcao para abrir a sessao salva.
function openSession() {

  let task = JSON.parse(localStorage.getItem('elements'));
  if (task) {
    let eClass = task['class'];
    let text = task['text'];
    createTask(eClass, text);
  }

}
openSession();


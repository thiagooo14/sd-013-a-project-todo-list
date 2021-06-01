const addButton = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');
const clearListButton = document.getElementById('apaga-tudo');
const clearCompletedButton = document.getElementById('remover-finalizados');
const clearSelectedButton = document.getElementById('remover-selecionado');
const moveUpButton = document.getElementById('mover-cima');
const moveDownButton = document.getElementById('mover-baixo');
const saveListButton = document.getElementById('salvar-tarefas');

// Req 7 e 8

function selectTask(event) {
  const tasks = document.getElementsByClassName('task');
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].classList.contains('selected')) {
      tasks[i].classList.remove('selected');
    }
  }
  event.target.classList.add('selected');
}

// Req 9

function completeTask(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
  event.target.classList.remove('selected');
}

// Req 5, 6 e preparo para o 7, 8 e 9

function createTask() {
  const task = document.createElement('li');
  task.classList.add('task');
  task.innerHTML = input.value;
  list.appendChild(task);
  input.value = null;
  task.addEventListener('click', selectTask);
  task.addEventListener('dblclick', completeTask);
}

addButton.addEventListener('click', createTask);

// Req 10

function clearList() {
  list.innerHTML = null;
}

clearListButton.addEventListener('click', clearList);

// Req 11

function clearCompleted() {
  const completeds = document.querySelectorAll('.completed');
  for (let i = 0; i < completeds.length; i += 1) {
    completeds[i].remove();
  }
}

clearCompletedButton.addEventListener('click', clearCompleted);

// Req 13

function moveUp() {
  const selected = document.querySelector('.selected');
  if (selected && selected.previousElementSibling) {
    list.insertBefore(selected, selected.previousElementSibling);
  }
}

moveUpButton.addEventListener('click', moveUp);

function moveDown() {
  const selected = document.querySelector('.selected');
  if (selected && selected.nextElementSibling) {
    list.insertBefore(selected.nextElementSibling, selected);
  }
}

moveDownButton.addEventListener('click', moveDown);

// Req 14

function clearSelected() {
  const selected = document.querySelector('.selected');
  selected.remove();
}

clearSelectedButton.addEventListener('click', clearSelected);

// Req 12

function saveList() {
  localStorage.setItem('myList', list.innerHTML);
}

saveListButton.addEventListener('click', saveList);

function retrieveLists() {
  if (localStorage.myList) {
    list.innerHTML = localStorage.myList;
    const listTasks = document.querySelectorAll('.task');
    for (let i = 0; i < listTasks.length; i += 1) {
      listTasks[i].addEventListener('click', selectTask);
      listTasks[i].addEventListener('dblclick', completeTask);
    }
  }
}

retrieveLists();

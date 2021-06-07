const toDoList = document.querySelector('#lista-tarefas');
const btnCreateItem = document.querySelector('#criar-tarefa');
const textTask = document.querySelector('#texto-tarefa');
const btnClearAll = document.querySelector('#apaga-tudo');
const btnClearCompleted = document.querySelector('#remover-finalizados');
const btnSaveTasks = document.querySelector('#salvar-tarefas');


function clearLastSelected() {
  for (let index = 0; index < toDoList.childElementCount; index += 1) {
    toDoList.children[index].classList.remove('selected');
  }
}

function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  let classes = JSON.parse(localStorage.getItem('classes'))

  for (let index in tasks) {
    let item = document.createElement('li');
    let createdItem = toDoList.appendChild(item);
    createdItem.className = classes[index];
    createdItem.innerHTML = tasks[index];
  }
}

//Botão que quando clicado insere novos itens
btnCreateItem.addEventListener('click', function() {
  console.log('botão de adicionar item foi clicado.');
  let item = document.createElement('li');
  let createdItem = toDoList.appendChild(item);
  createdItem.className = 'list-item';
  createdItem.innerHTML = textTask.value;
  textTask.value = '';
  textTask.focus();
});

//Botão que elimina as tarefas que já foram completas
btnClearCompleted.addEventListener('click', function() {
  for (let index = 0; index < toDoList.childElementCount; index += 1) {
    if(toDoList.children[index].classList.contains('completed')) {
      toDoList.removeChild(toDoList.children[index]);
      index = 0;
    }
  }
});

//Botão que quando clicado remove todos os itens da lista
btnClearAll.addEventListener('click', function() {
  let listLength = toDoList.childElementCount;

  for (let index = 0; index < listLength; index += 1) {
    toDoList.removeChild(toDoList.children[0]);
  }
  // localStorage.removeItem('tasks');
});

btnSaveTasks.addEventListener('click', function() {
  let tasks = [];
  let classes = []

  for (let index = 0; index < toDoList.childElementCount; index += 1) {
    tasks.push(toDoList.children[index].textContent);
    classes.push(toDoList.children[index].className);
  }

  localStorage.setItem('tasks',JSON.stringify(tasks));
  localStorage.setItem('classes',JSON.stringify(classes));
});

//Listener que seleciona o item da lista
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('list-item')) {
    console.log('item da lista foi clicado.');
    clearLastSelected();
    event.target.classList.add('selected');
  }
});

//Listener que ao ter 2 cliques marca como completa a tarefa
document.addEventListener('dblclick', function(event) {
  if(event.target.classList.contains('list-item')) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  }
});

window.onload = function() {
  loadTasks();
}
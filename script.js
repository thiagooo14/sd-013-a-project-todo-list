/* Elements */
const tasks = document.getElementsByTagName('li');
const todoList = document.getElementById('lista-tarefas');

/* Buttons */
const clearAllBtn = document.getElementById('apaga-tudo');
const clearDoneBtn = document.getElementById('remover-finalizados');
const clearSelBtn = document.getElementById('remover-selecionado');
const addBtn = document.getElementById('criar-tarefa');
const saveBtn = document.querySelector('#salvar-tarefas');

/* Events */
clearAllBtn.addEventListener('click', todoClear);
clearDoneBtn.addEventListener('click', clearDone);
clearSelBtn.addEventListener('click', clearSel);
addBtn.addEventListener('click', todoAdd);
saveBtn.addEventListener('click', todoSave);

/* Functions */
function todoSelect() {
  for(let i = 0; i < tasks.length; i += 1) {
    tasks[i].addEventListener('click', select);
  }
}

function select(evt) {
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].classList.contains('selected')) {
      tasks[i].classList.remove('selected');
    }
  }
  evt.target.classList.add('selected');
}

function todoDone() {
  for(let i = 0; i < tasks.length; i += 1) {
    tasks[i].addEventListener('dblclick', decoration);
  }
}

function decoration(evt) {
  evt.target.classList.toggle('completed');
}

function todoAdd() {
  let value = document.getElementById('texto-tarefa').value;
  if (!value) {
    alert('Por favor, digite alguma tarefa.');
  }
  else {
    let newTask = document.createElement('li');
    newTask.innerText = value;

    todoList.appendChild(newTask);

    let height = document.getElementById('lista-container').style.height;
    height = (parseInt(height) + 10) + 'px';

    todoDone();
    todoSelect();
  }
  document.getElementById('texto-tarefa').value = '';
}

function todoClear() {
  todoList.innerHTML = '';
}

function clearDone() {
  let completed = document.querySelectorAll('.completed');
  for(let i = 0; i < completed.length; i += 1) {
    todoList.removeChild(completed[i]);
  }
}

function clearSel() {
  let selected = document.querySelector('.selected');
  todoList.removeChild(selected);
}

function todoSave() {
  const listData = todoList.innerHTML;
  localStorage.setItem('lastsave', listData);
}

function todoGet() {
  const lastSave = localStorage.getItem('lastsave');
  if (lastSave !== null) {
    todoList.innerHTML = lastSave;
  }
}
todoGet();
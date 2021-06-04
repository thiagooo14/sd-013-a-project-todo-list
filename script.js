const listTasks = document.querySelector('#lista-tarefas');
const taskText = document.querySelector('#texto-tarefa');

function moveUp() {
  const element = document.querySelector('.selected');
  if (element === null) return;
  if (element.previousElementSibling) {
    element.parentNode.insertBefore(element, element.previousElementSibling);
  }
}

function moveDown() {
  const element = document.querySelector('.selected');
  if (element === null) return;
  if (element.nextElementSibling) {
    console.log('down');
    element.parentNode.insertBefore(element.nextElementSibling, element);
  }
}

function saveList() {
  const getHTML = listTasks.innerHTML.toString();
  localStorage.setItem('taskList', getHTML);
}

function eraseAll() {
  // const confirmDelete = window.confirm('Você tem certeza que deseja deletar todas as tarefas?');
  // if (!confirmDelete) {
  // console.error('Voce cancelou!');
  // return;
  // }
  listTasks.innerHTML = '';
  localStorage.removeItem('taskList');
}

function eraseOnlySelected() {
  const selected = document.querySelector('.selected');
  selected.remove();
}

function eraseOnlyCompletedTasks() {
  const getCompletedTasks = document.querySelectorAll('.completed');
  for (let index = 0; index < getCompletedTasks.length; index += 1) {
    getCompletedTasks[index].remove();
  }
}

function removeSelectedColorInEachLi(list) {
  const ol = list;
  for (let index = 0; index < ol.length; index += 1) {
    // ol[index].style.backgroundColor = '';
    ol[index].classList.remove('selected');
  }
}

function applyColor(event) {
  const item = event.target;
  const ol = event.target.parentElement.children;
  removeSelectedColorInEachLi(ol);
  // item.style.backgroundColor = 'rgb(128, 128, 128)';
  item.classList.toggle('selected');
}

function toggleComplete(event) {
  const li = event.target;
  li.classList.toggle('completed');
}

function applyEventListeners(element) {
  element.addEventListener('click', applyColor);
  element.addEventListener('dblclick', toggleComplete);
}

function createTask() {
  const li = document.createElement('li');
  li.innerText = taskText.value;
  applyEventListeners(li);
  listTasks.appendChild(li);
  taskText.value = '';
}

function getList() {
  if (localStorage.getItem('taskList')) {
    listTasks.innerHTML = localStorage.getItem('taskList');
    const getNewTasks = listTasks.children;
    for (let index = 0; index < getNewTasks.length; index += 1) {
      applyEventListeners(getNewTasks[index]);
      getNewTasks[index].classList.remove('selected');
    }
  }
}

// eslint-disable-next-line max-lines-per-function
window.onload = () => {
  const btnCreateTask = document.querySelector('#criar-tarefa');
  const btnEraseAll = document.querySelector('#apaga-tudo');
  const btnEraseCompleted = document.querySelector('#remover-finalizados');
  const btnSaveAll = document.querySelector('#salvar-tarefas');
  const btnEraseSelected = document.querySelector('#remover-selecionado');
  const btnMoveUp = document.querySelector('#mover-cima');
  const btnMoveDown = document.querySelector('#mover-baixo');

  getList();
  // localStorage.clear();
  btnCreateTask.addEventListener('click', () => {
    createTask();
  });
  btnEraseAll.addEventListener('click', () => {
    eraseAll();
  });
  btnEraseCompleted.addEventListener('click', () => {
    eraseOnlyCompletedTasks();
  });

  btnEraseSelected.addEventListener('click', () => {
    eraseOnlySelected();
  });
  btnSaveAll.addEventListener('click', () => {
    saveList();
  });
  btnMoveUp.addEventListener('click', (e) => {
    moveUp();
  });
  btnMoveDown.addEventListener('click', (e) => {
    moveDown();
  });
};

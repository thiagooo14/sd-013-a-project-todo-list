const input = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const btn = document.querySelector('#criar-tarefa');
const selectItem = document.getElementsByClassName('items');
const btnSave = document.querySelector('#salvar-tarefas');

function generateList() {
  if (input.value === '') {
    alert('"You ta de brincation uite me cara?"');
  } else {
    const listItem = document.createElement('li');
    listItem.classList.add('items');
    listItem.innerText = input.value;
    taskList.appendChild(listItem);
    input.value = '';
  }
}

btn.addEventListener('click', generateList);

function giveClass(element) {
  if (element.target.className === 'items') {
    const selected = document.querySelector('.selected');
    element.target.classList.add('selected');
    if (selected !== null) {
      selected.classList.remove('selected');
    }
  }
}

const giveProp = document.querySelector('#lista-tarefas');
giveProp.addEventListener('click', giveClass);

// feito com ajuda do Matheus Duarte. O cara é bom d+
function giveCompleted(element) {
  if (element.target.classList.contains('completed') === false) {
    element.target.classList.add('completed');
  } else if (element.target.classList.contains('completed')) {
    element.target.classList.remove('completed');
  }
}

taskList.addEventListener('dblclick', giveCompleted);

// https://www.codecademy.com/forum_questions/4fc4e20c48eae700030456bb
// https://stackoverflow.com/questions/30816119/how-do-i-clear-localstorage-with-a-button
function clearList() {
  taskList.innerHTML = '';
  localStorage.clear();
}

const btnDelete = document.querySelector('#apaga-tudo');
btnDelete.addEventListener('click', clearList);

// https://www.codegrepper.com/code-examples/javascript/remove+element+with+class+name+javascript
function clearFinished() {
  const element = document.getElementsByClassName('completed');
  while (element.length > 0) {
    element[0].parentNode.removeChild(element[0]);
    localStorage.removeItem('completed');
  }
}

const btnClear = document.querySelector('#remover-finalizados');
btnClear.addEventListener('click', clearFinished);

// https://www.codegrepper.com/code-examples/javascript/remove+element+with+class+name+javascript
function clearSelected() {
  const select = document.getElementsByClassName('selected');
  while (select.length > 0) {
    select[0].parentNode.removeChild(select[0]);
  }
}

const btnDelSelect = document.querySelector('#remover-selecionado');
btnDelSelect.addEventListener('click', clearSelected);

function saveTasks() {
  const listTasks = taskList.innerHTML;
  if (listTasks !== '') {
    localStorage.setItem('saveList', listTasks);
  }
}

function recoverTasks() {
  const saveList = localStorage.getItem('saveList');
  if (saveList !== null) {
    taskList.innerHTML = saveList;
  }
}

recoverTasks();

btnSave.addEventListener('click', saveTasks);

// function moveUp() {
//   const teste = this.parentElement;

//   if (teste.previousElementSibling) {
//     teste.parentNode.insertBefore(teste, teste.previousElementSibling);
//   }
// }

// function moveDown() {
//   // if (selectItem.classList.contains('.selected')) {
//     const teste = this.parentElement;

//     if (teste.nextElementSibling) {
//       teste.parentNode.insertBefore(teste.nextElementSibling, teste);
//     // }
//   }
// }

// const btnDown = document.querySelector('#mover-baixo');
// btnDown.addEventListener('click', moveDown);

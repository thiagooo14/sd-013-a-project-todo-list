const listId = 'lista-tarefas';

function addTarefa() {
  const listItem = document.createElement('li');
  listItem.classList.add('tarefa');
  const taskList = document.getElementById(listId);
  const inputValue = document.getElementById('texto-tarefa').value;
  if (inputValue) {
    listItem.innerHTML = inputValue;
    taskList.appendChild(listItem);
    document.getElementById('texto-tarefa').value = null;
  }
}

function initSel(event) {
  if (event.target.style.backgroundColor !== 'rgb(128, 128, 128)') {
    const element = event.target;
    element.style.backgroundColor = 'rgb(128, 128, 128)';
    element.classList.add('selected');
  }
}

function selectItem(event) {
  if (event.target.classList.contains('tarefa')) {
    initSel(event);
    const tasks = document.getElementsByClassName('tarefa');
    const taskArray = [].slice.call(tasks);
    taskArray.map((x) => {
      if (x !== event.target) {
        const element = x;
        element.style.backgroundColor = '';
        element.classList.remove('selected');
      }
      return x;
    });
  }
}

function strikeThrough(event) {
  if (event.target.classList.contains('tarefa')) {
    if (event.target.style.textDecoration === 'line-through solid rgb(0, 0, 0)') {
      const element = event.target;
      element.style.textDecoration = 'none';
      element.classList.remove('completed');
    } else {
      const element = event.target;
      element.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
      element.classList.add('completed');
    }
  }
}

/* Referência consultada para remoção https://stackoverflow.com/questions/10842471/how-to-remove-all-elements-of-a-certain-class-from-the-dom */
function removeFinished() {
  const finishedArray = document.getElementsByClassName('completed');
  while (finishedArray[0]) {
    finishedArray[0].parentNode.removeChild(finishedArray[0]);
  }
}

function saveList() {
  const ordList = document.getElementById(listId);
  localStorage.setItem('save-list', ordList.innerHTML);
}

function clearTaskList() {
  const list = document.getElementById(listId);
  list.innerHTML = '';
}

function moveUp() {
  const selectedItem = document.getElementsByClassName('selected')[0];
  const taskArray = document.getElementsByClassName('tarefa');
  for (let i = 0; i < taskArray.length; i += 1) {
    if (taskArray[i] === selectedItem && i > 0) {
      const before = taskArray[i - 1];
      before.insertAdjacentElement('beforebegin', selectedItem);
    }
  }
}

function moveDown() {
  const selectedItem = document.getElementsByClassName('selected')[0];
  const taskArray = document.getElementsByClassName('tarefa');
  for (let i = 0; i < taskArray.length; i += 1) {
    if (taskArray[i] === selectedItem && i < taskArray.length - 1) {
      const after = taskArray[i + 1];
      after.insertAdjacentElement('afterend', selectedItem);
      i = taskArray.length;
    }
  }
}

function removeSelected() {
  const selected = document.getElementsByClassName('selected')[0];
  selected.parentNode.removeChild(selected);
}

window.onload = function start() {
  if (localStorage.getItem('save-list')) {
    const ordList = document.getElementById(listId);
    ordList.innerHTML = localStorage.getItem('save-list');
  }

  document.getElementById('criar-tarefa').addEventListener('click', addTarefa);
  document.addEventListener('click', selectItem, false);
  document.addEventListener('dblclick', strikeThrough);
  document.getElementById('apaga-tudo').addEventListener('click', clearTaskList);
  document.getElementById('remover-finalizados').addEventListener('click', removeFinished);
  document.getElementById('salvar-tarefas').addEventListener('click', saveList);
  document.getElementById('mover-cima').addEventListener('click', moveUp);
  document.getElementById('salvar-tarefas').addEventListener('click', saveList);
  document.getElementById('mover-baixo').addEventListener('click', moveDown);
  document.getElementById('remover-selecionado').addEventListener('click', removeSelected);
};

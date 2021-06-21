const taskListElement = document.querySelector('#lista-tarefas');

function addTask() {
  const button = document.querySelector('#criar-tarefa');

  button.addEventListener('click', () => {
    const getInput = document.querySelector('#texto-tarefa').value;

    if (getInput === '') {
      alert('Insira uma tarefa!');
    } else {
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(getInput));
      taskListElement.appendChild(li);
      document.querySelector('#texto-tarefa').value = '';
    }
  });
}

addTask();

function selectTask() {
  const input = taskListElement;

  input.addEventListener('click', (event) => {
    const getLists = document.querySelectorAll('.lista');
    for (let i = 0; i < getLists.length; i += 1) {
      getLists[i].classList.remove('lista');
    } event.target.classList.add('lista');
  });
}

selectTask();

function markComplete() {
  const input = taskListElement;

  input.addEventListener('dblclick', (event) => {
    const textDecor = document.querySelector('.lista').classList.contains('completed');

    if (textDecor === true) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
}

markComplete();

function deleteTasks() {
  const button = document.querySelector('#apaga-tudo');
  const taskList = taskListElement;

  button.addEventListener('click', () => {
    taskList.innerHTML = '';
  });
}

deleteTasks();

function removeCompleted() {
  const button = document.querySelector('#remover-finalizados');

  button.addEventListener('click', () => {
    document.querySelectorAll('.completed').forEach((element) => {
      element.remove();
    });
  });
}

removeCompleted();

function removeSelected() {
  const button = document.querySelector('#remover-selecionado');

  button.addEventListener('click', () => {
    document.querySelectorAll('.lista').forEach((element) => {
      element.remove();
    });
  });
}

removeSelected();

function saveList() {
  const button = document.querySelector('#salvar-tarefas');

  button.addEventListener('click', () => {
    if (typeof (Storage) !== 'undefined') {
      const tasksArray = taskListElement.innerHTML;
      window.localStorage.setItem('data', JSON.stringify(tasksArray));
    }
  });
}

saveList();

function restoreList() {
  const tasksArray = JSON.parse(window.localStorage.getItem('data'));
  taskListElement.innerHTML = tasksArray;
}

restoreList();

function moveItemUp() {
  const buttonUp = document.querySelector('#mover-cima');

  buttonUp.addEventListener('click', () => {
    if (document.querySelector('.lista') === null) {
      return;
    }
    const parent = document.querySelector('.lista').parentNode;
    const previous = document.querySelector('.lista').previousElementSibling;
    const current = document.querySelector('.lista');

    if (previous === null) {
      console.log('Fim da lista.');
    } else {
      parent.insertBefore(current, previous);
    }
  });
}

moveItemUp();

function moveItemDown() {
  const buttonDown = document.querySelector('#mover-baixo');

  buttonDown.addEventListener('click', () => {
    if (document.querySelector('.lista') === null) {
      return;
    }
    const parent = document.querySelector('.lista').parentNode;
    const next = document.querySelector('.lista').nextElementSibling;
    const current = document.querySelector('.lista');

    if (next === null) {
      console.log('Fim da lista.');
    } else {
      parent.insertBefore(next, current);
    }
  });
}

moveItemDown();

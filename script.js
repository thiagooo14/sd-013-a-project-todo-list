function addTask() {
  const button = document.querySelector('#criar-tarefa');

  button.addEventListener('click', () => {
    const getInput = document.querySelector('#texto-tarefa').value;

    if (getInput === '') {
      alert('Insira uma tarefa!');
    } else {
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(getInput));
      document.querySelector('#lista-tarefas').appendChild(li);
      document.querySelector('#texto-tarefa').value = '';
    }
  });
}

addTask();

function selectTask() {
  const input = document.querySelector('#lista-tarefas');

  input.addEventListener('click', (event) => {
    const getLists = document.querySelectorAll('.lista');
    for (let i = 0; i < getLists.length; i += 1) {
      getLists[i].classList.remove('lista');
    } event.target.classList.add('lista');
  });
}

selectTask();

function checkTask() {
  const input = document.querySelector('#lista-tarefas');

  input.addEventListener('dblclick', (event) => {
    const textDecor = document.querySelector('.lista').classList.contains('completed');

    if (textDecor === true) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
}

checkTask();

function deleteTasks() {
  const button = document.querySelector('#apaga-tudo');
  const taskList = document.querySelector('#lista-tarefas');

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

function saveList() {
  const button = document.querySelector('#salvar-tarefas');

  button.addEventListener('click', () => {
    if (typeof (Storage) !== 'undefined') {
      let tasksArray = document.querySelector('#lista-tarefas').innerHTML;
      /* let taskList = '';

      for (let i = 0; i < tasksArray.length; i += 1) {
        taskList += tasksArray[i].textContent;
      }

      const lista = {
        data: taskList,
      };

      window.localStorage.setItem('data', taskList); */
      /* let lista = {
        data: tasksArray,
      }; */
      window.localStorage.setItem('data', JSON.stringify(tasksArray));
    }
  });
}

saveList();

function restoreList() {
  //const dataArray = window.localStorage.getItem('data');
  tasksArray = JSON.parse(window.localStorage.getItem('data'));
  document.querySelector('#lista-tarefas').innerHTML = tasksArray;

  /* if (dataArray !== null) {
    for (let i = 0; i < dataArray.length; i += 1) {
      const element = document.createElement('li');
      const textNode = document.createTextNode(dataArray[i]);
      element.appendChild(textNode);

      const taskList = document.querySelector('#lista-tarefas');
      taskList.appendChild(element);
    }
  } */
}
  
restoreList(); // Limpar window.localStorage.clear();
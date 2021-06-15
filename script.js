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

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
  //const isCLass = input.matches('.lista');

 /*  let isChecked = document.getElementsByClassName('completed');
  let isList = document.getElementsByClassName('lista'); */
  /* const getCurrentList = document.querySelector('.lista');
  const checkForClass = getCurrentList.classList.contains('lista');  */// true
  //input = document.querySelector('.lista');
  input.addEventListener('dblclick', (event) => {
    const getCurrentList = document.querySelector('.lista');
    const checkForClass = getCurrentList.classList.contains('lista');
    if (checkForClass === true) {
      event.target.classList.add('completed');
    } else if (checkForClass === false) {
      event.target.classList.remove('completed');
    }
  });
}

checkTask();

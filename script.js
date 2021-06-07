function addingNewTask() {
  const btnNewTask = document.querySelector('#criar-tarefa');
  const getInput = document.querySelector('#texto-tarefa');
  const getOl = document.querySelector('#lista-tarefas');
  btnNewTask.addEventListener('click', () => {
    const newtask = document.createElement('li');
    getOl.appendChild(newtask);
    const text = getInput.value;
    newtask.innerHTML = text;
    getInput.value = null;
  });
}

addingNewTask();

function addClass(event) {
  const getList = document.getElementsByTagName('li');
  for (let index = 0; index < getList.length; index += 1) {
    getList[index].classList.remove('selected');
  }
  const evento = event.target;
  evento.classList.add('selected');
}

function addingBackground() {
  const getOl = document.querySelector('#lista-tarefas');
  getOl.addEventListener('click', addClass);
}

addingBackground();

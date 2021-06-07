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

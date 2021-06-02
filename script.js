const list = document.querySelector('#lista-tarefas');
const taskText = document.querySelector('#texto-tarefa');

function createTask() {
  const li = document.createElement('li');
  li.innerText = taskText.value;
  list.appendChild(li);
  taskText.value = '';
}

window.onload = () => {
  const btnCreateTask = document.querySelector('#criar-tarefa');

  btnCreateTask.addEventListener('click', () => {
    createTask();
  })
}

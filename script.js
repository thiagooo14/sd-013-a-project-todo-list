const buttonTask = document.querySelector('#criar-tarefa');
const inputTask = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');

// Adiciona botão que cria tarefas
buttonTask.addEventListener('click', () => {
  const liTask = document.createElement('li');
  liTask.innerHTML = inputTask.value;
  inputTask.value = '';
  taskList.appendChild(liTask);
});

taskList.addEventListener('click', (event) => {
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
})

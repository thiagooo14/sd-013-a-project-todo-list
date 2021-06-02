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

// Adiciona mudança de cor de fundo
taskList.addEventListener('click', (event) => {
  let selected = document.querySelectorAll('.selected');
  for (let index = 0; index < selected.length; index += 1) {
    selected[index].classList.remove('selected');
    selected[index].style.backgroundColor = '';
  }
  event.target.classList.add('selected');
  let liSelected = document.querySelector('.selected');
  liSelected.style.backgroundColor = 'rgb(128, 128, 128)';
});

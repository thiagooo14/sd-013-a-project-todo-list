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
  const selected = document.querySelectorAll('.selected');
  for (let index = 0; index < selected.length; index += 1) {
    selected[index].classList.remove('selected');
    selected[index].style.backgroundColor = '';
  }
  event.target.classList.add('selected');
  const liSelected = document.querySelector('.selected');
  liSelected.style.backgroundColor = 'rgb(128, 128, 128)';
});

// Adiciona efeito "riscado" à lista
const tasks = document.querySelector('#lista-tarefas');
tasks.addEventListener('dblclick', function (event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
});

// Adiciona botão de apagar tudo
const eraseButton = document.querySelector('#apaga-tudo');
eraseButton.addEventListener('click', function () {
  tasks.innerHTML = '';
})

// Adiciona botão de remover finalizados
const doneButton = document.querySelector('#remover-finalizados');
doneButton.addEventListener('click', function () {
  const completed = document.querySelectorAll('.completed');
  for (let index = 0; index < completed.length; index += 1) {
    completed[index].remove();
  };
});

// Recupera itens da lista no localStorage
tasks.innerHTML = localStorage.getItem('taskList');

// Adiciona botão de salvar tarefas
const saveTasks = document.querySelector('#salvar-tarefas');
saveTasks.addEventListener('click', function () {
  let tasksList = tasks.innerHTML;
  localStorage.setItem('taskList', tasksList);
});
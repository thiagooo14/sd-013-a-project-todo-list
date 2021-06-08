const getOl = document.getElementById('lista-tarefas');
const getInputTask = document.getElementById('texto-tarefa');
const btnCreateTask = document.getElementById('criar-tarefa');

// Remove bacground aplicado
function removeClass(value, classRemove) {
  for (let index = 0; index < value.length; index += 1) {
    value[index].classList.remove(classRemove);
  }
}

// Função taxa a task concluida.
function stripeTask(event) {
  const verify = event.target.classList.contains('completed');
  if (!verify) {
    event.target.classList.add('completed');
  } else {
    event.target.classList.remove('completed');
  }
}

// adiciona background color.
function addBgColor(event) {
  const getList = document.querySelectorAll('.task');
  removeClass(getList, 'apply-bg');
  event.target.classList.add('apply-bg');
}

// Limpar inputs
function limparInput(input) {
  input.value = '';
}

//  Aplica um evento click
function eventClick(value) {
  for (let index = 0; index < value.length; index += 1) {
    value[index].addEventListener('click', addBgColor);
    value[index].addEventListener('dblclick', stripeTask);
  }
}

// Cria as tasks como lis.
function createTasks(valueText) {
  const createLi = document.createElement('li');
  createLi.classList.add('task');
  createLi.innerHTML = valueText;
  getOl.appendChild(createLi);
  const getList = document.querySelectorAll('.task');
  eventClick(getList);
}

// Pegar tarefa
function getTask() {
  const receiveValue = getInputTask.value;
  createTasks(receiveValue);
  limparInput(getInputTask);
}

// Evento que ao clicar `criar tarefa` chama função pegar texto, inserir na ol
btnCreateTask.addEventListener('click', getTask);

// Iniciando o projeto 
const getOl = document.getElementById('lista-tarefas');
const getInputTask = document.getElementById('texto-tarefa');
const btnCreateTask = document.getElementById('criar-tarefa');

// Remove bacground aplicado
function removeClass(value) {
  for (let index = 0; index < value.length; index += 1) {
    value[index].classList.remove('apply-bg');
  }
}

// adiciona background color 
function addBgColor(event, sizeOl) {
  const getList = document.querySelectorAll('.task');
  removeClass(getList);
  event.target.classList.add('apply-bg');
}

// Limpar inputs
function limparInput(value) {
  value.value = '';
}

//  Aplica um evento click
function eventClick(value) {
  for (let index = 0; index < value.length; index += 1) {
    value[index].addEventListener('click', addBgColor);
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
  console.log(getList);
}

// Pegar tarefa
function getTask() {
  const receiveValue = getInputTask.value;
  createTasks(receiveValue);
  limparInput(getInputTask);
}

// Evento que ao clicar `criar tarefa` chama função pegar texto, inserir na ol
btnCreateTask.addEventListener('click', getTask);

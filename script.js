// Iniciando o projeto 
const getOl = document.getElementById('lista-tarefas');
const getInputTask = document.getElementById('texto-tarefa');
const btnCreateTask = document.getElementById('criar-tarefa');

// Limpar inputs
function limparInput(value) {
  value.value = '';
}

// Cria as tasks como lis.
function createTasks(valueText) {
  const createLi = document.createElement('li');
  createLi.innerHTML = valueText;
  getOl.appendChild(createLi);
}

// Pegar tarefa
function getTask() {
  const receiveValue = getInputTask.value;
  console.log(getInputTask.value);
  createTasks(receiveValue);
  limparInput(getInputTask);
}

// Evento que ao clicar `criar tarefa` chama função pegar texto, inserir na ol
btnCreateTask.addEventListener('click', getTask);
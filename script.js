const getOl = document.getElementById('lista-tarefas');
const getInputTask = document.getElementById('texto-tarefa');
const btnCreateTask = document.getElementById('criar-tarefa');
const btnClearAll  = document.getElementById('apaga-tudo');
const btnRemoveSelected = document.getElementById('remover-selecionado');

// Remove bacground aplicado
function removeClass(value, classRemove) {
  for (let index = 0; index < value.length; index += 1) {
    value[index].classList.remove(classRemove);
  }
}

// Função taxa a task concluida.
function stripeTask(event) {
  event.target.classList.toggle('completed');
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

function clearTasks() {
  const getSizeChildLi = document.querySelectorAll('li');
  const getSizeOl = document.querySelector('#lista-tarefas');
  for (let index = 0; index < getSizeChildLi.length; index += 1) {
    getSizeOl.removeChild(getSizeChildLi[index]);
  }
}

// Apaga selecionado
function clearSelected() {
  const getSizeChildLi = document.querySelectorAll('li');
  const getSizeOl = document.querySelector('#lista-tarefas');
  for (let index = 0; index < getSizeChildLi.length; index += 1) {
    if (getSizeChildLi[index].classList.contains('completed')) {
      getSizeOl.removeChild(getSizeChildLi[index]);
    }
  }
}

// Evento que ao clicar `criar tarefa` chama função pegar texto, inserir na ol
btnCreateTask.addEventListener('click', getTask);
btnClearAll.addEventListener('click', clearTasks);
btnRemoveSelected.addEventListener('click', clearSelected);

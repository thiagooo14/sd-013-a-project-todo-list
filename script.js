const orderList = document.querySelector('#lista-tarefas');
const inputValue = document.querySelector('#texto-tarefa');
const btnAdd = document.querySelector('#criar-tarefa');
const btnClear = document.querySelector('#apaga-tudo');
const btnEnd = document.querySelector('#remover-finalizados');
const btnSaveTasks = document.querySelector('#salvar-tarefas');
const btnUp = document.querySelector('#mover-cima');
const btnDown = document.querySelector('#mover-baixo');
const btnDel = document.querySelector('#remover-selecionado');

window.onload = () => {
  orderList.innerHTML = localStorage.getItem('taskList');
};

// Cria uma nova tarefa
function newTask() {
  const createTask = document.createElement('li');
  createTask.innerText = inputValue.value;
  createTask.className = 'task';
  orderList.appendChild(createTask);
  inputValue.value = '';
}
btnAdd.addEventListener('click', newTask);

// Muda cor de fundo do item da lista selecionado
function changeBgItemList(event) {
  const selectElementTask = document.querySelector('.selected');
  if (event.target.classList[0] === 'task') {
    event.target.classList.add('selected');
  }
  if (selectElementTask !== null) {
    selectElementTask.classList.remove('selected');
  }
}
orderList.addEventListener('click', changeBgItemList);

// Risca tarefa marcada
function taskEnd(event) {
  if (event.target.className === 'task') {
    event.target.classList.add('completed');
  } else {
    event.target.classList.remove('completed');
  }
}
orderList.addEventListener('dblclick', taskEnd);

// Limpa Tarefa
function clearTask() {
  while (orderList.firstChild) {
    orderList.removeChild(orderList.firstChild);
  }
}
btnClear.addEventListener('click', clearTask);

// Remove Finalizados
function removeTaskEnd() {
  const getTasksEnd = document.querySelectorAll('.completed');
  for (let index = 0; index < getTasksEnd.length; index += 1) {
    getTasksEnd[index].remove();
  }
}
btnEnd.addEventListener('click', removeTaskEnd);

// Salvar Tarefas
function saveTask() {
  localStorage.setItem('taskList', orderList.innerHTML);
}
btnSaveTasks.addEventListener('click', saveTask);

// Botão de mover para cima
function moveUp() {
  const selectElementTask = document.querySelector('.selected');
  if (selectElementTask !== null && selectElementTask !== orderList.firstChild) {
    orderList.insertBefore(selectElementTask, selectElementTask.previousElementSibling);
  }
}
btnUp.addEventListener('click', moveUp);

// Botão de mover para baixo
function moveDown() {
  const selectElementTask = document.querySelector('.selected');
  if (selectElementTask !== null && selectElementTask !== orderList.lastChild) {
    const nextSelectec = selectElementTask.nextElementSibling;
    orderList.insertBefore(selectElementTask, nextSelectec.nextElementSibling);
  }
}
btnDown.addEventListener('click', moveDown);

// Btão remove selecionado
function removeSelec() {
  const selectElementTask = document.querySelector('.selected');
  if (selectElementTask !== null) {
    selectElementTask.remove();
  }
}
btnDel.addEventListener('click', removeSelec);

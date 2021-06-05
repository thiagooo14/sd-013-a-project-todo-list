/* eslint-disable no-use-before-define */
window.onload = function load() {
  createTask();
};

const buttonCreateTask = document.querySelector('#criar-tarefa');
const inputCreateTask = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');

const createTask = () => {
  buttonCreateTask.addEventListener('click', () => {
    const inputValue = inputCreateTask.value;
    if (inputValue === '' || inputValue === null || inputValue === undefined) {
      console.log('Valor inválido');
    } else {
      taskList.innerHTML += `<li class="task-item">${inputValue}</li>`;
      inputCreateTask.value = '';
    }

    highlightTask();
  });
};

const highlightTask = () => {
  const taskItem = document.querySelector('.task-item');
  taskItem.addEventListener('click', (event) => {
    const { classList } = event.target;
    console.log(classList.toggle('gray-bgcolor'));
  });
};

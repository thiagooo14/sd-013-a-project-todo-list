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
  const lis = document.querySelectorAll('.task-item');
  const gray = 'gray-bgcolor';

  lis.forEach((item) => {
    item.addEventListener('click', (event) => {
      event.target.classList.toggle(gray);
    });

    if (item.classList.contains(gray)) {
      item.classList.remove(gray);
    }
  });
}
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
    taskList.innerHTML += `<li>${inputValue}</li>`;
    inputCreateTask.value = '';
  });
};

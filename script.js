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
  const ol = document.querySelector('#lista-tarefas');
  const gray = "rgba(128, 128, 128, 1)";

  ol.addEventListener("click", (event) => {
    lis.forEach(li => {
      li.style.backgroundColor = '';
    });

    event.target.style.backgroundColor = gray;
  });
}

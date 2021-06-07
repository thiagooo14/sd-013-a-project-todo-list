/* eslint-disable quotes */
/* eslint-disable no-use-before-define */
window.onload = function load() {
  createTask();
};

const taskList = document.querySelector('#lista-tarefas');

const createTask = () => {
  const buttonCreateTask = document.querySelector('#criar-tarefa');
  const inputCreateTask = document.querySelector('#texto-tarefa');
  buttonCreateTask.addEventListener('click', () => {
    const inputValue = inputCreateTask.value;
    if (inputValue === '' || inputValue === null || inputValue === undefined) {
      console.log('Valor inválido');
    } else {
      taskList.innerHTML += `<li class="task-item">${inputValue}</li>`;
      inputCreateTask.value = '';
    }

    highlightTask();
    completedTask();
    eraseTasks();
    eraseSelected();
  });
};

const highlightTask = () => {
  const lis = document.querySelectorAll(".task-item");
  const ol = document.querySelector("#lista-tarefas");
  const gray = "rgba(128, 128, 128, 1)";

  ol.addEventListener("click", (event) => {
    lis.forEach((item) => {
      const li = item;
      li.style.backgroundColor = "";
    });

    const e = event.target;
    e.style.backgroundColor = gray;
  });
};

const completedTask = () => {
  const lis = document.querySelectorAll('.task-item');

  lis.forEach((item) => {
    item.addEventListener("dblclick", (event) => {
      if (!event.target.classList.contains("completed")) {
        event.target.classList.add("completed");
      } else {
        event.target.classList.remove("completed");
      }
    });
  });
};

const eraseTasks = () => {
  const button = document.querySelector("#apaga-tudo");
  const lis = document.querySelectorAll(".task-item");

  button.addEventListener("click", () => {
    lis.forEach((item) => {
      item.remove();
    });
  });
};

const eraseSelected = () => {
  const lis = document.querySelectorAll(".task-item");
  const btn = document.querySelector("#remover-finalizados");

  btn.addEventListener("click", () => {
    lis.forEach((item) => {
      if (item.classList.contains("completed")) {
        item.remove();
      }
    });
  });
};

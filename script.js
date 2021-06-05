/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable no-param-reassign */
/* eslint-disable max-lines-per-function */
/* eslint-disable editorconfig/editorconfig */
/* eslint-disable prefer-const */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
function setColorTask(event) {
  const selectedTask = document.getElementsByClassName('task');
  const grayBackgroundItem = 'rgb(128, 128, 128)';
  if (event.target.style.backgroundColor === grayBackgroundItem) {
    event.target.style.backgroundColor = 'white';
  } else {
    for (let indexColor = 0; indexColor < selectedTask.length; indexColor += 1) {
      selectedTask[indexColor].style.backgroundColor = 'white';
    }
    event.target.style.backgroundColor = grayBackgroundItem;
  }
}

function completedTask(event) {
  const auxClass = 'task';
  const completedClass = 'task completed';
  if (event.target.className !== completedClass) {
    event.target.className = completedClass;
  } else {
    event.target.className = auxClass;
  }
}

function createTask() {
  const inputTask = document.querySelector('#texto-tarefa');
  const list = document.querySelector('#lista-tarefas');
  const button = document.querySelector('#criar-tarefa');
  
  button.addEventListener('click', function () {
    if (inputTask.value.length > 0) {
      let newTask = document.createElement('li');
      newTask.className = 'task';
      newTask.innerHTML = inputTask.value;
      newTask.addEventListener('click', setColorTask);
      newTask.addEventListener('dblclick', completedTask);
      list.appendChild(newTask);
      inputTask.value = '';
    }
  });
}
createTask();

const button = document.querySelector('#apaga-tudo');

function deleteAllTasks() {
  const list = document.querySelector('#lista-tarefas');
  const task = document.querySelectorAll('.task');
    for (let index = 0; index <= task.length; index += 1) {
      list.removeChild(task[index]);
    }
}

button.addEventListener('click', deleteAllTasks);

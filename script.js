/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable no-param-reassign */
/* eslint-disable max-lines-per-function */
/* eslint-disable editorconfig/editorconfig */
/* eslint-disable prefer-const */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
function createTask() {
  const inputTask = document.querySelector('#texto-tarefa');
  const list = document.querySelector('#lista-tarefas');
  const button = document.querySelector('#criar-tarefa');
  
  button.addEventListener('click', function () {
    if (inputTask.value.length > 0) {
      let newTask = document.createElement('li');
      newTask.className = 'task';
      newTask.innerHTML = inputTask.value;
      list.appendChild(newTask);
      inputTask.value = '';
    }
  });
}
createTask();

function setColorTask() {
  const selectedTask = document.querySelectorAll('#lista-tarefas');
  const grayBackgroundItem = 'rgb(128,128,128)';
  for (let index = 0; index < selectedTask.length; index += 1) {
    selectedTask[index].addEventListener('click', function (event) {
      if (event.target.style.backgroundColor === grayBackgroundItem) {
        event.target.style.backgroundColor = 'white';
      } else {
        for (let indexColor = 0; indexColor < selectedTask.length; indexColor += 1) {
          selectedTask[indexColor].style.backgroundColor = 'white';
        }
        event.target.style.backgroundColor = grayBackgroundItem;
      }
    });
  }
}
setColorTask();
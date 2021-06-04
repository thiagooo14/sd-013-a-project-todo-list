function addNewTask() {
  let getInputField = document.querySelector('#texto-tarefa');
  let getInputButton = document.querySelector('#criar-tarefa');
  let getTaskList = document.querySelector('#lista-tarefas');

  getInputButton.addEventListener('click', () => {
    let newTask = document.createElement('li');
    newTask.className = 'items-task'
    newTask.innerText = getInputField.value;
    getTaskList.appendChild(newTask);
    getInputField.value = '';
  })
}

addNewTask();


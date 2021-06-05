function addNewTask() {
  let getInputField = document.querySelector('#texto-tarefa');
  let addInputButton = document.querySelector('#criar-tarefa');
  let getTaskList = document.querySelector('#lista-tarefa');
      
  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;
      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
       alert('Error: Digite ao menos 1 caractere.')
    }
  })
}
addNewTask();

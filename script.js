function addNewTask() {
  const getInputField = document.querySelector('#texto-tarefa');
  const addInputButton = document.querySelector('#criar-tarefa');
  const getTaskList = document.querySelector('#lista-tarefas');

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;
      newLi.setAttribute("class", "li");
      newLi.onclick = addColor;
      newLi.ondblclick = taskCompleted;
      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
        alert('Error: Digite ao menos 1 caractere.');
    }
  });
}

function addColor(event) {
  const getList = document.getElementsByClassName('li');
  for (let index = 0; index < getList.length; index += 1) {
    getList[index].classList.remove("selected");   
  }
  event.target.classList.add('selected');
}

function taskCompleted(event) { 
  if (event.target.classList.contains('completed')){
    event.target.classList.remove('completed');
    console.log('erro')
  }
  else {
  event.target.classList.add('completed');
  console.log('erro')
  }
}

window.onload = function() {
  addNewTask();  
}    


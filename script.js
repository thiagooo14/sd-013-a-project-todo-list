const taskButton = document.getElementById('criar-tarefa');
const taskInput = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');

taskButton.addEventListener('click', createItem);

document.body.addEventListener('click', itemColor);

document.body.addEventListener('dblclick', itemCompleted);

function createItem() {
  const taskItem = document.createElement('li');
  taskItem.classList.add('tarefa'); 
  taskItem.innerText = taskInput.value;
  taskList.appendChild(taskItem);
  //Ajudou a resolver a questão de como zerar o input: https://stackoverflow.com/questions/37511093/reset-is-not-a-function-in-javascript
  taskInput.value = "";
}

//Com a ajuda do Rogério P. Da Silva
function itemColor (event) {
  if (event.target.className.includes('tarefa')) {
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

function itemCompleted (event) {
  if (event.target.className.includes('tarefa') && !event.target.className.includes('completed')) {
    event.target.classList.add('completed');  
  } else if (event.target.className.includes('completed')) {
    event.target.classList.remove('completed');  
  };
};
const taskButton = document.getElementById('criar-tarefa');
const taskInput = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');

taskButton.addEventListener('click', createItem);

let taskItens;

function createItem() {
  const taskItem = document.createElement('li');
  taskItem.classList.add('tarefa'); 
  taskItem.innerText = taskInput.value;
  taskList.appendChild(taskItem);
  //Thread do StackOverFlow que ajudou a resolver a questão de como zerar o input: https://stackoverflow.com/questions/37511093/reset-is-not-a-function-in-javascript
  taskInput.value = "";
  taskItens = document.querySelectorAll('.tarefa');


}

//Com a ajuda do Rogério P. Da Silva
function itemColor (event) {
  if (event.target.className.includes('tarefa')) {
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

document.body.addEventListener('click', itemColor);
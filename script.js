const taskInput = document.getElementById('texto-tarefa');
const taskButton = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const taskDeleteAll = document.getElementById('apaga-tudo');
const taskDeleteCompleted = document.getElementById('remover-finalizados');

taskButton.addEventListener('click', createItem);

document.body.addEventListener('click', itemColor);

document.body.addEventListener('dblclick', itemCompleted);

taskDeleteAll.addEventListener('click', deleteTasks);

taskDeleteCompleted.addEventListener('click', deleteCompleteds);

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


function deleteTasks () {
  let taskLi = document.querySelectorAll('.tarefa');
  
  for (let index = 0; index < taskLi.length; index += 1) {
    taskLi.item(index).remove();
  }
}

function deleteCompleteds () {
  let completedLi = document.querySelectorAll('.completed');
  
  for (let index = 0; index < completedLi.length; index += 1) {
    completedLi.item(index).remove();
  }
}
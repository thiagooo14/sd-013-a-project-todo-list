const toDoList = document.querySelector('#lista-tarefas');
const btnCreateItem = document.querySelector('#criar-tarefa');
const textTask = document.querySelector('#texto-tarefa');
const btnClearAll = document.querySelector('#apaga-tudo');
const btnClearCompleted = document.querySelector('#remover-finalizados');
const btnSaveTasks = document.querySelector('#salvar-tarefas');
const btnMoveUp = document.querySelector('#mover-cima');
const btnMoveDown = document.querySelector('#mover-baixo');
const btnRemoveSelected = document.querySelector('#remover-selecionado');

function clearLastSelected() {
    for (let index = 0; index < toDoList.childElementCount; index += 1) {
      toDoList.children[index].classList.remove('selected');
    }
  }

  function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem('taskContents'));
    let classes = JSON.parse(localStorage.getItem('taskClasses'))
  
    for (let index in tasks) {
      let item = document.createElement('li');
      let createdItem = toDoList.appendChild(item);
      createdItem.className = classes[index];
      createdItem.innerHTML = tasks[index];
    }
  }  

  
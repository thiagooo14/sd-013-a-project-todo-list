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

// Ao clicar botão adiciona novos itens
btnCreateItem.addEventListener('click', function() {
    if (textTask.value == '') {
      alert('Digite o nome da tarefa');
      textTask.focus();
    } else {
      console.log('botão de adicionar item foi clicado.');
      let item = document.createElement('li');
      let createdItem = toDoList.appendChild(item);
      createdItem.className = 'list-item';
      createdItem.innerHTML = textTask.value;
      textTask.value = '';
      textTask.focus();
    }
  });

//Ao clicar botão remove tarefa completada
btnClearCompleted.addEventListener('click', function() {
    let completedTasks = document.querySelectorAll('.completed');
  
    for (let index = 0; index < completedTasks.length; index += 1) {
      if (completedTasks[index].classList.contains('completed')) {
        completedTasks[index].remove();
      }
    }
  });

//Ao clicar botão remove todos os itens da lista
btnClearAll.addEventListener('click', function() {
    let listItem = document.querySelectorAll('.list-item');
  
    for (let index = 0; index < listItem.length; index += 1) {
      listItem[index].remove();
    }
  });

  btnSaveTasks.addEventListener('click', function() {
    let taskContents = [];
    let taskClasses = [];
    let tasks = document.querySelectorAll('#lista-tarefas li');
  
    for (let index = 0; index < tasks.length; index += 1) {
      taskContents.push(tasks[index].textContent);
      taskClasses.push(tasks[index].className);
    }
  
    localStorage.setItem('taskContents',JSON.stringify(taskContents));
    localStorage.setItem('taskClasses',JSON.stringify(taskClasses));
  });

  btnMoveUp.addEventListener('click', function() {
    let listItem = document.querySelectorAll('.list-item');
  
    for (let index = 0; index < listItem.length; index += 1) {
      let isSelectedItem = listItem[index].classList.contains('selected');
      let isValidMovement = (index - 1 >= 0);
  
      if (isSelectedItem && isValidMovement) {
        let selectedItem = listItem[index];
        let previousElement = listItem[index - 1];
        let auxiliar;
  
        auxiliar = previousElement.textContent;
        previousElement.innerHTML = selectedItem.textContent;
        selectedItem.innerHTML = auxiliar;
  
        auxiliar = previousElement.className;
        previousElement.className = selectedItem.className;
        selectedItem.className = auxiliar;
      }
    }
  });
  
  btnMoveDown.addEventListener('click', function() {
    let listItem = document.querySelectorAll('.list-item');
  
    for (let index = listItem.length-1; index >= 0; index -= 1) {
      let isSelectedItem = listItem[index].classList.contains('selected');
      let isValidMovement = (index + 1 < listItem.length);
  
      if (isSelectedItem && isValidMovement) {
        let selectedItem = listItem[index];
        let nextElement = listItem[index + 1];
        let auxiliar;
  
        auxiliar = nextElement.textContent;
        nextElement.innerHTML = selectedItem.textContent;
        selectedItem.innerHTML = auxiliar;
  
        auxiliar = nextElement.className;
        nextElement.className = selectedItem.className;
        selectedItem.className = auxiliar;
      }
    }
  });
  
  btnRemoveSelected.addEventListener('click', function() {
    let listItems = document.querySelectorAll('.list-item');
    
    for (let index = 0; index < listItems.length; index += 1) {
      if(listItems[index].classList.contains('selected')) {
        listItems[index].remove();
      }
    }
  })

  //Listener que seleciona o item da lista
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('list-item')) {
      console.log('item da lista foi clicado.');
      clearLastSelected();
      event.target.classList.add('selected');
    }
  });
  
  
  
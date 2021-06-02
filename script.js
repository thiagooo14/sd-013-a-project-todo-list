window.onload = function() {
  if (localStorage.getItem('save-list')) {
    const ordList = document.getElementById('lista-tarefas');
    ordList.innerHTML = localStorage.getItem('save-list');
  }

  function addTarefa () {
    const listItem = document.createElement('li');
    listItem.classList.add('tarefa')
    const taskList = document.getElementById('lista-tarefas');
    let inputValue = document.getElementById('texto-tarefa').value;
    listItem.innerHTML = inputValue;
    taskList.appendChild(listItem);
    document.getElementById('texto-tarefa').value = null;
  };

  document.getElementById('criar-tarefa').addEventListener('click', addTarefa);

  function selectItem(event) {
    if (event.target.classList.contains('tarefa')) {
      if (event.target.style.backgroundColor !== 'rgb(128, 128, 128)') {
        event.target.style.backgroundColor = 'rgb(128, 128, 128)';
        event.target.classList.add('selected');
      }
      const taskArray = document.getElementsByClassName('tarefa');
      for (let i = 0; i < taskArray.length; i += 1) {
        if (taskArray[i] !== event.target){
          taskArray[i].style.backgroundColor = '';
          taskArray[i].classList.remove('selected');
       }
      }
    }
  }

  document.addEventListener('click', selectItem , false);

  function strikeThrough(event) {
    if (event.target.classList.contains('tarefa')) {
      if (event.target.style.textDecoration === 'line-through solid rgb(0, 0, 0)') {
        event.target.style.textDecoration = 'none';
        event.target.classList.remove('completed');
      } else {
        event.target.style.textDecoration = 'line-through solid rgb(0, 0, 0)'
        event.target.classList.add('completed');
      }
    }
  }

  document.addEventListener('dblclick', strikeThrough);

  function clearTaskList() {
    const list = document.getElementById('lista-tarefas');
    list.innerHTML = ''
  }

  document.getElementById('apaga-tudo').addEventListener('click', clearTaskList);

  /*Referência consultada para remoção https://stackoverflow.com/questions/10842471/how-to-remove-all-elements-of-a-certain-class-from-the-dom*/
  function removeFinished(event) {
    let finishedArray = document.getElementsByClassName('completed');
    const ordList = document.getElementById('lista-tarefas');
    while (finishedArray[0]) {
      finishedArray[0].parentNode.removeChild(finishedArray[0]);
    }
  }

  document.getElementById('remover-finalizados').addEventListener('click', removeFinished);

  function saveList (event) {
    const ordList = document.getElementById('lista-tarefas');
    localStorage.setItem('save-list', ordList.innerHTML);
  };

  document.getElementById("salvar-tarefas").addEventListener('click', saveList);

  function moveUp (event) {
    const selectedItem = document.getElementsByClassName('selected')[0];
    const taskArray = document.getElementsByClassName('tarefa');
    for (let i = 0; i < taskArray.length ; i += 1) {
      if(taskArray[i] == selectedItem && i > 0) {
        let before = taskArray[i - 1];
        before.insertAdjacentElement('beforebegin', selectedItem);
      }
    }
  };

  document.getElementById("mover-cima").addEventListener('click', moveUp);

  document.getElementById("salvar-tarefas").addEventListener('click', saveList);

  function moveDown (event) {
    const selectedItem = document.getElementsByClassName('selected')[0];
    const taskArray = document.getElementsByClassName('tarefa');
    for (let i = 0; i < taskArray.length; i += 1) {
      if(taskArray[i] == selectedItem && i < taskArray.length - 1) {
        console.log('entrou')
        let after = taskArray[i + 1];
        after.insertAdjacentElement('afterend', selectedItem);
        i = taskArray.length;
      }
    }
  };

  document.getElementById("mover-baixo").addEventListener('click', moveDown);

  function removeSelected(event) {
    let selected = document.getElementsByClassName('selected')[0];
    selected.parentNode.removeChild(selected);
  }

  document.getElementById('remover-selecionado').addEventListener('click', removeSelected);
};
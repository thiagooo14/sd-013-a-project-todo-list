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
    document.getElementById('texto-tarefa').value = '';
  };

  document.getElementById('criar-tarefa').addEventListener('click', addTarefa);

  function selectItem(event) {
    if (event.target.classList.contains('tarefa')) {
      if (event.target.style.backgroundColor !== 'rgb(128, 128, 128)') {
        event.target.style.backgroundColor = 'rgb(128, 128, 128)';
      }
      const taskArray = document.getElementsByClassName('tarefa');
      for (let i = 0; i < taskArray.length; i += 1) {
        if (taskArray[i] !== event.target){
          taskArray[i].style.backgroundColor = ''
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

  /*https://stackoverflow.com/questions/10842471/how-to-remove-all-elements-of-a-certain-class-from-the-dom*/
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

  document.getElementById("salvar-tarefas").addEventListener('click', saveList)
};
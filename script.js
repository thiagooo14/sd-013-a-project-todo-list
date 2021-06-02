window.onload = function() {
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

};
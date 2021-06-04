window.onload = function () {
  function waitCreateTasks() {
    const createTasks = document.getElementById('criar-tarefa');
    createTasks.addEventListener('click', addTasks, false);
  }
  waitCreateTasks();

  function addTasks() {
    const inputValue = document.getElementById('texto-tarefa');
    const tasksList = document.getElementById('lista-tarefas');
    const newTasks = document.createElement('li');
    const contTasks = document.querySelectorAll('li');
    newTasks.id = contTasks.length + 1;
    newTasks.textContent = inputValue.value;
    tasksList.appendChild(newTasks);
    inputValue.value = '';
  }

  function waitItemSelect() {
    const itemSelect = document.getElementById('lista-tarefas');
    itemSelect.addEventListener('click', function(i) {markItem(i.target.id)} , false);
  }
  waitItemSelect();

  function markItem(idItem) {
    const liItems = document.querySelectorAll('li');
    for (let i = 0; i < liItems.length; i += 1) {
      if (liItems[i].id !== idItem) {
        const noColor = document.getElementById(liItems[i].id);
        noColor.style.backgroundColor = 'transparent';
      } else {
        const color = document.getElementById(liItems[i].id);
        color.style.backgroundColor = 'rgb(128,128,128)';
      }
    }
  }

  function waitDoubleClick() {
    const itemSelect = document.getElementById('lista-tarefas');
    itemSelect.addEventListener('dblclick', function(i) {doubleClick(i.target.id)} , false);
  }
  waitDoubleClick();

  function doubleClick(idDoubleClick) {
    const itemCompleted = document.getElementById(idDoubleClick).className;
    if (itemCompleted.indexOf('completed') !== -1) {
      console.log('achou');
      const noMark = document.getElementById(idDoubleClick);
      noMark.classList.remove('completed');
    } else {
      console.log('não achou');
      const mark = document.getElementById(idDoubleClick);
      mark.classList.add('completed');
    }
  } 
}
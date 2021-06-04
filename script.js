window.onload = function () {

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

  function waitCreateTasks() {
    const createTasks = document.getElementById('criar-tarefa');
    createTasks.addEventListener('click', addTasks, false);
  }
  waitCreateTasks();

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

  function waitItemSelect() {
    const itemSelect = document.getElementById('lista-tarefas');
    itemSelect.addEventListener('click', function(i) { markItem(i.target.id) }, false);
  }
  waitItemSelect();

  function doubleClick(idDoubleClick) {
    const itemCompleted = document.getElementById(idDoubleClick).className;
    if (itemCompleted.indexOf('completed') !== -1) {
      const noMark = document.getElementById(idDoubleClick);
      noMark.classList.remove('completed');
    } else {
      const mark = document.getElementById(idDoubleClick);
      mark.classList.add('completed');
    }
  }

  function waitDoubleClick() {
    const itemSelect = document.getElementById('lista-tarefas');
    itemSelect.addEventListener('dblclick', function(i) { doubleClick(i.target.id) }, false);
  }
  waitDoubleClick();

  function deleteAll() {
    const liItems = document.querySelectorAll('li');
    for (let i = 0; i < liItems.length; i += 1) {
      const deleteItem = document.getElementById(liItems[i].id).remove();
    }
  }

  function waitDeleteAll() {
    const deleteEvent = document.getElementById('apaga-tudo');
    deleteEvent.addEventListener('click', deleteAll, false);
  }
  waitDeleteAll();

  function deleteAllFinalized() {
    const finalizeds = document.querySelectorAll('.completed');
    for (let i = 0; i < finalizeds.length; i += 1) {
      const deleteFinalized = document.getElementById(finalizeds[i].id).remove();
    }
  }

  function waitDeleteAllFinalized() {
    const deleteEvent = document.getElementById('remover-finalizados');
    deleteEvent.addEventListener('click', deleteAllFinalized, false);
  }
  waitDeleteAllFinalized();
}

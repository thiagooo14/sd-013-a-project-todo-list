window.onload = function () {
  if (Storage) {
    const elements = localStorage.getItem('tasks');
    const objects = JSON.parse(elements);
    if (objects) {
      for (let i = 0; i < objects.tarefas.length; i += 1) {
        const tasksList = document.getElementById('lista-tarefas');
        const newTasks = document.createElement('li');
        const contTasks = document.querySelectorAll('li');
        newTasks.id = contTasks.length + 1;
        newTasks.textContent = objects.tarefas[i];
        if (objects.decoration[i] !== 'none') {
          newTasks.classList.add('completed');
        }
        tasksList.appendChild(newTasks);
      }
    }
  }

  function addTasks() {
    const inputValue = document.getElementById('texto-tarefa');
    const tasksList = document.getElementById('lista-tarefas');
    const newTasks = document.createElement('li');
    const contTasks = document.querySelectorAll('li');
    newTasks.id = contTasks.length + 1;
    if (inputValue.value === '' || inputValue.value === ' ') {
      alert('Insira uma tarefa no campo.');
    } else {
      newTasks.textContent = inputValue.value;
      tasksList.appendChild(newTasks);
      inputValue.value = '';
    }
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
        noColor.classList.remove('selected');
      } else {
        const color = document.getElementById(liItems[i].id);
        color.classList.add('selected');
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
    if (localStorage) {
      localStorage.clear();
    } else {
      alert("Desculpe, não existe informações salvas.");
    }
  }

  function waitDeleteAllFinalized() {
    const deleteEvent = document.getElementById('remover-finalizados');
    deleteEvent.addEventListener('click', deleteAllFinalized, false);
  }
  waitDeleteAllFinalized();

  function tasksSave() {
    const items = document.querySelectorAll('li');
    const itemsClass = document.querySelectorAll('li').className;
    const tasks = {tarefas: [], decoration: []};
    for (let i = 0; i < items.length; i += 1) {
      tasks.tarefas.push(items[i].textContent);
      if ((itemsClass) && (itemsClass.indexOf('completed') !== -1)) {
        tasks.decoration.push('line-through solid rgb(0, 0, 0)');
      } else {
        tasks.decoration.push('none');
      }
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
    const stringTasks = localStorage.getItem('tasks');
  }

  function waitTasksSave() {
    const save = document.getElementById('salvar-tarefas');
    save.addEventListener('click', tasksSave, false);
  }
  waitTasksSave();

  function moveItem() {
    const move = document.querySelectorAll('li');
    const buttonUp = document.getElementById('mover-cima');
    const buttonDown = document.getElementById('mover-baixo');
    for (let i = 0; i < move.length; i += 1) {
      move[i].addEventListener('click', function () {
        buttonUp.addEventListener('click', function () {
          if (move[i].previousSibling) {
            move[i].parentNode.insertBefore(move[i], move[i].previousElementSibling);
          }
        })
        buttonDown.addEventListener('click', function () {
          if (move[i].nextSibling) {
            move[i].parentNode.insertBefore(move[i].nextElementSibling, move[i]);
          }
        })
      })
    }
  }
  moveItem();
}

window.onload = function () {
  if (Storage) {
    const elements = localStorage.getItem('tasks');
    const objects = JSON.parse(elements);
    if (objects) {
      for (let i = 0; i < objects.tarefas.length; i += 1) {
        const tasks = document.getElementById('lista-tarefas');
        const newTasks = document.createElement('li');
        const contTasks = document.querySelectorAll('li');
        newTasks.id = contTasks.length + 1;
        newTasks.textContent = objects.tarefas[i];
        if (objects.decoration[i] !== 'none') {
          newTasks.classList.add('completed');
        }
        tasks.appendChild(newTasks);
      }
    }
  }

  function addTasks() {
    const inputValue = document.getElementById('texto-tarefa');
    const tasksList = document.getElementById('lista-tarefas');
    const newTasks = document.createElement('li');
    const contTasks = document.querySelectorAll('li');
    newTasks.id = contTasks.length + 1;
    if (inputValue.value.indexOf(' ') === 0 || inputValue.value === '') {
      alert('Insira uma tarefa no campo.');
      inputValue.focus();
    } else {
      newTasks.textContent = inputValue.value;
      tasksList.appendChild(newTasks);
      inputValue.value = '';
      inputValue.focus();
    }
  }

  function waitCreateTasks() {
    document.getElementById('criar-tarefa').addEventListener('click', addTasks);
  }
  waitCreateTasks();

  function waitCreateTasks2() {
    document.querySelector('#texto-tarefa').addEventListener('keydown', function (e) {
      if (e.keyCode === 13) {
        addTasks();
      }
    });
  }
  waitCreateTasks2();

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
    itemSelect.addEventListener('click', function (i) { markItem(i.target.id)}, false);
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
    itemSelect.addEventListener('dblclick', function (i) { doubleClick(i.target.id); }, false);
  }
  waitDoubleClick();

  function deleteAll() {
    const liItems = document.querySelectorAll('li');
    for (let i = 0; i < liItems.length; i += 1) {
      const deleteItem = document.getElementById(liItems[i].id).remove();
    }
    localStorage.clear();
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

  function deleteSelected() {
    const selected = document.querySelector('.selected');
    if (selected) {
      selected.remove();
      if (Storage) {
        const elements = localStorage.getItem('tasks');
        const objects = JSON.parse(elements);
        if (objects) {
          const filteringTarefas = objects.filter(tasks => tasks.tarefas !== selected.textContent);
        }
      }
    } else {
      alert('Selecione um ítem a ser apagado!');
    }
  }

  function waitDeleteSelected() {
    const deleteEvent = document.getElementById('remover-selecionado');
    deleteEvent.addEventListener('click', deleteSelected, false);
  }
  waitDeleteSelected();

  function tasksSave() {
    const items = document.querySelectorAll('li');
    const itemsClass = document.querySelectorAll('li');
    
    const tasks = {tarefas: [], decoration: []};
    for (let i = 0; i < items.length; i += 1) {
      tasks.tarefas.push(items[i].textContent);
      if (itemsClass[i].className === 'completed' || itemsClass[i].className === 'selected completed') {
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

  function click() {
    const movingUp = document.getElementById('mover-cima');
    movingUp.addEventListener('click', function () {
      const selected = document.querySelector('.selected');
      if (selected) {
        up(selected); 
      }
    })
    const movingDown= document.getElementById('mover-baixo');
    movingDown.addEventListener('click', function () {
      const selected = document.querySelector('.selected');
      if (selected) {
        down(selected); 
      }
    })
  }  
  click();

  function up(e) {
     if(e.previousElementSibling) {
       e.parentElement.insertBefore(e, e.previousElementSibling);
     }
  }

  function down(e) {
    if(e.nextElementSibling) {
      e.parentElement.insertBefore(e.nextElementSibling, e);
    }
  }
};

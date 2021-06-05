// Cria função para criação de tarefas.

function addingTask(list) {
  const taskText = document.getElementById('texto-tarefa');
  const btnCreate = document.getElementById('criar-tarefa');

  function addTask() {
    const task = document.createElement('li');
    task.classList.add('task');
    task.innerText = taskText.value;
    list.appendChild(task);
    taskText.value = null;
  }

  btnCreate.addEventListener('click', addTask);
  taskText.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      addTask();
    }
  });
}

// Cria função de remover classes. Obs: parametro 'element' pode ser também uma classe ou id;
function removeClass(element, eClass) {
  const element1 = document.querySelectorAll(element);
  for (let i = 0; i < element1.length; i += 1) {
    const iterator = element1[i];
    if (iterator.classList.contains(eClass)) {
      iterator.classList.remove(eClass);
    }
  }
}

// Cria função de selecionar tarefas.
function taskSelector() {
  document.addEventListener('click', (event) => {
    const task = event.target;
    if (task.classList.contains('task')) {
      removeClass('li', 'selected');
      task.classList.add('selected');
    }
  });
}

// Cria funcao de riscar tarefas já completadas.
function completedTasks() {
  document.addEventListener('dblclick', (event) => {
    const task = event.target;
    if (task.classList.contains('task')) {
      if (task.classList.contains('completed')) {
        task.classList.remove('completed');
      } else {
        task.classList.add('completed');
      }
    }
  });
}

// Cria funcao de limpar as tarefas.
function clearTasks(list) {
  const btnClear = document.getElementById('apaga-tudo');

  btnClear.addEventListener('click', () => {
    const tasks = document.querySelectorAll('.task');
    for (let i = 0; i < tasks.length; i += 1) {
      const element = tasks[i];

      list.removeChild(element);
    }
  });
}

// Cria funcao para remover tarefas finalizadas.
function removeFinishedTasks(list) {
  const btnFinished = document.getElementById('remover-finalizados');

  btnFinished.addEventListener('click', () => {
    const tasks = document.querySelectorAll('.completed');

    for (let i = 0; i < tasks.length; i += 1) {
      const element = tasks[i];
      list.removeChild(element);
    }
  });
}

// Cria elemento com li com classe
function createTask(eClass, text) {
  const list = document.getElementById('lista-tarefas');

  for (let i = 0; i < eClass.length; i += 1) {
    const task = document.createElement('li');
    task.className = eClass[i];
    task.innerText = text[i];
    list.appendChild(task);
  }
}

// Cria funcao para salvar a lista de tarefas.
function saveSession() {
  const btnSaveSession = document.getElementById('salvar-tarefas');

  btnSaveSession.addEventListener('click', () => {
    const tasks = document.getElementsByClassName('task');
    const content = [];
    const eClass = [];
    const task = {};
    for (let i = 0; i < tasks.length; i += 1) {
      const iterator = tasks[i];
      eClass.push(iterator.className);
      content.push(iterator.innerText);
      task.class = eClass;
      task.text = content;
    }

    localStorage.setItem('elements', JSON.stringify(task));
  });
}

// Cria funcao para abrir a sessao salva.
function openSession() {
  const task = JSON.parse(localStorage.getItem('elements'));
  if (task) {
    const eClass = task.class;
    const { text } = task;
    createTask(eClass, text);
  }
}
openSession();

// Cria funcao para subir um item da lista.
function taskUp() {
  const btnUp = document.getElementById('mover-cima');

  btnUp.addEventListener('click', () => {
    const taskSelected = document.querySelector('.selected');
    if (taskSelected && taskSelected.previousElementSibling) {
      const taskAbove = taskSelected.previousSibling;
      const elementSupport = taskAbove.innerText;
      const classAbove = taskAbove.className;

      taskAbove.innerText = taskSelected.innerText;
      taskAbove.className = taskSelected.className;
      taskSelected.classList.remove('selected');
      taskSelected.className = classAbove;
      taskSelected.innerText = elementSupport;
    }
  });
}

// Cria funcao para descer um item da lista.
function taskDown() {
  const btnDown = document.getElementById('mover-baixo');
  btnDown.addEventListener('click', () => {
    const taskSelected = document.querySelector('.selected');
    if (taskSelected && taskSelected.nextElementSibling) {
      const taskAbove = taskSelected.nextSibling;
      const elementSupport = taskAbove.innerText;
      const classAbove = taskAbove.className;
      taskAbove.innerText = taskSelected.innerText;
      taskAbove.className = taskSelected.className;
      taskSelected.classList.remove('selected');
      taskSelected.className = classAbove;
      taskSelected.innerText = elementSupport;
    }
  });
}

// Cria funcao para remover item selecionado da lista.
function removeSelected(list) {
  const btnRemove = document.getElementById('remover-selecionado');
  btnRemove.addEventListener('click', () => {
    const itemSelected = document.getElementsByClassName('selected')[0];
    if (itemSelected) {
      list.removeChild(itemSelected);
    }
  });
}

window.onload = () => {
  const list = document.getElementById('lista-tarefas');
  addingTask(list);
  taskSelector();
  completedTasks();
  clearTasks(list);
  removeFinishedTasks(list);
  saveSession();
  removeSelected(list);
  taskDown();
  taskUp();
};

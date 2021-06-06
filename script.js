const task = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const form = document.querySelector('#form');

const deleteAll = document.querySelector('#apaga-tudo');
const deleteTaskDone = document.querySelector('#remover-finalizados');
const deleteSelectedTask = document.querySelector('#remover-selecionado');

const saveTasks = document.querySelector('#salvar-tarefas');
const moveTaskUp = document.querySelector('#mover-cima');
const moveTaskDown = document.querySelector('#mover-baixo');

function addTask(itemText, isCompleted) {
  const taskItem = document.createElement('li');
  taskItem.className = 'item-tarefa';
  taskItem.innerHTML = itemText;

  if (isCompleted) {
    taskItem.classList.add('completed');
  }

  taskItem.addEventListener('click', () => {
    const selected = document.querySelector('.item-tarefa.selected');
    if (selected) {
      selected.classList.remove('selected');
      selected.style.backgroundColor = 'initial';
    }
    taskItem.style.backgroundColor = 'rgb(128, 128, 128)';
    taskItem.classList.add('selected');
  });

  taskItem.addEventListener('dblclick', () => {
    taskItem.classList.toggle('completed');
  });

  taskList.appendChild(taskItem);
}

// load tasks
if (localStorage.getItem('listItem') != null) {
  const items = JSON.parse(localStorage.getItem('listItem'));
  items.forEach((item) => {
    const itemElement = item;
    addTask(itemElement.task, itemElement.completed);
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!task.value) {
    return;
  }

  addTask(task.value, false);

  task.value = '';
  task.focus();
});

moveTaskUp.addEventListener('click', () => {
  const selected = taskList.querySelector('.selected');
  if (!selected) {
    return;
  }

  const parent = selected.parentNode;
  if (selected === parent.children[0]) {
    return;
  }
  const previousSibling = selected.previousElementSibling;

  parent.insertBefore(selected, previousSibling);
});

moveTaskDown.addEventListener('click', () => {
  const selected = taskList.querySelector('.selected');
  if (!selected) {
    return;
  }

  const parent = selected.parentNode;
  if (selected === parent.children[parent.children.length - 1]) {
    return;
  }
  const nextSibling = selected.nextElementSibling;

  parent.insertBefore(nextSibling, selected);
});

deleteSelectedTask.addEventListener('click', () => {
  taskList.querySelector('.selected').remove();
});

deleteTaskDone.addEventListener('click', () => {
  taskList.querySelectorAll('.completed').forEach((item) => item.remove());
});

deleteAll.addEventListener('click', () => {
  taskList.querySelectorAll('.item-tarefa').forEach((item) => item.remove());
});

saveTasks.addEventListener('click', () => {
  const arrayTasks = [];

  Array.from(taskList.children).forEach((item) => {
    const storageItem = {
      task: item.innerHTML,
      completed: item.classList.contains('completed'),
    };
    arrayTasks.push(storageItem);
  });

  localStorage.setItem('listItem', JSON.stringify(arrayTasks));
});

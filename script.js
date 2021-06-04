const task = document.querySelector('#texto-tarefa');
const addTask = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const deleteAll = document.querySelector('#apaga-tudo');
const deleteTaskDone = document.querySelector('#remover-finalizados');

addTask.addEventListener('click', () => {
  const taskItem = document.createElement('li');
  taskItem.className = 'item-tarefa';
  taskItem.innerHTML = task.value;
  task.value = '';
  task.focus();

  taskList.appendChild(taskItem);

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
});

deleteTaskDone.addEventListener('click', () => {
  taskList.querySelectorAll('.completed').forEach((item) => item.remove());
});

deleteAll.addEventListener('click', () => {
  taskList.querySelectorAll('.item-tarefa').forEach((item) => item.remove());
});

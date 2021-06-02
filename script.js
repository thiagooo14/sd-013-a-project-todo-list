const listTasks = document.querySelector('#lista-tarefas');
const taskText = document.querySelector('#texto-tarefa');

function toggleComplete(event) {
  const li = event.target;
  li.classList.toggle('completed');
}

function removeSelectedColorInEachLi(list) {
  const ol = list;
  for (let index = 0; index < ol.length; index += 1) {
    ol[index].style.backgroundColor = '';
  }
}

function applyColor(event) {
  const item = event.target;
  const ol = event.target.parentElement.children;
  removeSelectedColorInEachLi(ol);
  item.style.backgroundColor = 'rgb(128, 128, 128)';
}

function createTask() {
  const li = document.createElement('li');
  li.innerText = taskText.value;
  li.addEventListener('click', applyColor);
  li.addEventListener('dblclick', toggleComplete);
  listTasks.appendChild(li);
  taskText.value = '';
}

window.onload = () => {
  const btnCreateTask = document.querySelector('#criar-tarefa');

  btnCreateTask.addEventListener('click', () => {
    createTask();
  });
};

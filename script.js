const input = document.getElementById('texto-tarefa');
const btn = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');

function createTask() {
  const li = document.createElement('li');

  li.innerText = input.value;
  li.className = 'task';
  taskList.appendChild(li);
  input.value = null;
}

function selectTask(e) {
  if (e.target.classList.contains('task')) {
    const previousSelected = document.querySelector('.selected');

    e.target.classList.add('selected');
    if (previousSelected) {
      previousSelected.classList.remove('selected');
    }
  }
}

function completeTask(e) {
  if (e.target.classList.contains('task')) e.target.classList.toggle('completed');
}

window.onload = () => {
  btn.addEventListener('click', createTask);
  document.addEventListener('click', selectTask);
  document.addEventListener('dblclick', completeTask);
};

const input = document.getElementById('texto-tarefa');
const btn = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');

function createTask() {
  const li = document.createElement('li');

  li.innerText = input.value;
  taskList.appendChild(li);
  input.value = null;
}

function selectTask(e) {
  if (e.target.parentElement.id === 'lista-tarefas') {
    const previousSelected = document.querySelector('.selected');

    e.target.classList.add('selected');
    if (previousSelected) {
      previousSelected.classList.remove('selected');
    }
  }
}

window.onload = () => {
  btn.addEventListener('click', createTask);
  document.addEventListener('click', selectTask);
};

const input = document.getElementById('texto-tarefa');
const btn = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');

function createTask() {
  const li = document.createElement('li');

  li.innerText = input.value;
  taskList.appendChild(li);
  input.value = null;
}

window.onload = () => {
  btn.addEventListener('click', createTask);
};

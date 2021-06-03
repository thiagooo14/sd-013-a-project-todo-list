// Requisito 5

const selectButton = document.getElementById('criar-tarefa');

selectButton.addEventListener('click', () => {
  const createTask = document.getElementById('texto-tarefa');
  const valueInput = document.getElementById('texto-tarefa').value;
  const li = document.createElement('li');
  const ol = document.querySelector('#lista-tarefas');
  li.innerHTML = valueInput;
  ol.appendChild(li);
  createTask.value = ' ';
});

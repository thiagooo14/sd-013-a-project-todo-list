let listO = document.getElementById('lista-tarefas');
let buttao = document.getElementById('criar-tarefa');

buttao.addEventListener('click', function addTask() {
  let newTask = document.getElementById('texto-tarefa').value;
  let newLi = document.createElement('li');
  newLi.innerHTML = newTask;
  listO.appendChild(newLi);
})
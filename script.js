window.onload = function() {
  function addTarefa (event) {
    const listItem = document.createElement('li');
    const taskList = document.getElementById('lista-tarefas');
    let inputValue = document.getElementById('texto-tarefa').value;
    listItem.innerHTML = inputValue;
    taskList.appendChild(listItem);
    document.getElementById('texto-tarefa').value = '';
  };

  document.getElementById('criar-tarefa').addEventListener('click', addTarefa);
};
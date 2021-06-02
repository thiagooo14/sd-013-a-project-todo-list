window.onload = function() {
  function addTarefa () {
    const listItem = document.createElement('li');
    listItem.classList.add('tarefa')
    const taskList = document.getElementById('lista-tarefas');
    let inputValue = document.getElementById('texto-tarefa').value;
    listItem.innerHTML = inputValue;
    taskList.appendChild(listItem);
    document.getElementById('texto-tarefa').value = '';
  };

  document.getElementById('criar-tarefa').addEventListener('click', addTarefa);

  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('tarefa')) {
      event.target.style.backgroundColor = 'rgb(128, 128, 128)'
    }
  }, false);
};
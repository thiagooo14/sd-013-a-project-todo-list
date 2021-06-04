function include() {
  let buttonCreate = document.getElementById('criar-tarefa');

  buttonCreate.addEventListener('click', () => {
    let olTask = document.getElementById('lista-tarefas');
    let liTask = document.createElement('li');
    olTask.appendChild(liTask);
    liTask.innerHTML = document.getElementById('texto-tarefa').value;
    document.getElementById('texto-tarefa').value = '';
  });
}
include();

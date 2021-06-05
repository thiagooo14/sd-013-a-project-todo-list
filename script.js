const buttomNewTask = document.getElementById('criar-tarefa');
buttomNewTask.addEventListener('click', () => {
  const newTask = document.getElementById('texto-tarefa');
  const texto = document.getElementById('texto-tarefa').value;
  const li = document.createElement('li');
  const ol = document.querySelector('ol');
  li.innerHTML = texto;
  ol.appendChild(li);
  li.classList.add('tarefa');
  newTask.value = '';
});

function backgroundGray() {
  const listaDeTarefas = document.getElementById('lista-tarefas');
  listaDeTarefas.addEventListener('click', (e) => {
    if (e.target.classList.contains('tarefa')) {
      const listaLis = document.getElementsByClassName('tarefa');
      for (let i = 0; i < listaLis.length; i += 1) {
        listaLis[i].classList.remove('backgroundColorGray');
      }
      e.target.classList.add('backgroundColorGray');
    }
  });
}

backgroundGray();

function taskComplete() {
  const listaDeTarefas = document.getElementById('lista-tarefas');
  listaDeTarefas.addEventListener('dblclick', (e) => {
    if (e.target.classList.contains('tarefa')) {
      const listaLis = document.getElementsByClassName('tarefa');
      for (let i = 0; i < listaLis.length; i += 1) {
        listaLis[i].classList.remove('completed');
      }
      e.target.classList.add('completed');
    }
  });
}

taskComplete();

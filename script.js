// ===================================================================
// botão que adiciona li em lista ordenada.
// ===================================================================
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

// ===================================================================
// clique no item e mude o fundo para cinza
// ===================================================================
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

// ===================================================================
// clique no item duas vezes e classe 'completed' é adicionada a ele.
// ===================================================================
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

// ===================================================================
// Clique no botão e apaga todas as tarefas.
// ===================================================================
function removeItems() {
  const buttonRemove = document.querySelector('#apaga-tudo');
  buttonRemove.addEventListener('click', () => {
    const listaLis = document.querySelectorAll('.tarefa');
    const listaDeTarefas = document.querySelector('#lista-tarefas');
    for (let index = 0; index < listaLis.length; index += 1) {
      listaDeTarefas.removeChild(listaLis[index]);
    }
  });
}

removeItems();

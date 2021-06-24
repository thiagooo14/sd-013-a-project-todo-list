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
const listaDeTarefas = document.getElementById('lista-tarefas');
function backgroundGray() {
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
  listaDeTarefas.addEventListener('dblclick', (e) => {
    if (e.target.classList.contains('tarefa')) {
      e.target.classList.toggle('completed');
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
    for (let index = 0; index < listaLis.length; index += 1) {
      listaDeTarefas.removeChild(listaLis[index]);
    }
  });
}

removeItems();

// ===================================================================
// Clique no botão e apaga todas as tarefas finalizadas.
// ===================================================================
function removeFinishedItems() {
  const buttonRemoveFinished = document.querySelector('#remover-finalizados');
  buttonRemoveFinished.addEventListener('click', () => {
    const listaFinalizados = document.querySelectorAll('.completed');
    for (let i = 0; i < listaFinalizados.length; i += 1) {
      listaDeTarefas.removeChild(listaFinalizados[i]);
    }
  });
}

removeFinishedItems();

// ===================================================================
// Clique no botão e apaga tarefa selecionada.
// ===================================================================
function removeSelected() {
  const buttonRemoveSelected = document.querySelector('#remover-selecionado');
  buttonRemoveSelected.addEventListener('click', () => {
    const listaLis = document.querySelectorAll('.tarefa');
    for (let i = 0; i < listaLis.length; i += 1) {
      if (listaLis[i].classList.contains('backgroundColorGray')) {
        listaDeTarefas.removeChild(listaLis[i]);
      }
    }
  });
}

removeSelected();

// ===================================================================
// Clique no botão e apaga tarefa selecionada.
// ===================================================================
function salveTasks() {
  const buttonSave = document.querySelector('#salvar-tarefas');
  buttonSave.addEventListener('click', () => {
    const ol = document.querySelector('#lista-tarefas');
    localStorage.setItem('itens', ol.innerHTML);
  });
}

salveTasks();

function setTasks() {
  const ol = document.querySelector('#lista-tarefas');
  ol.innerHTML = localStorage.getItem('itens');
}

setTasks();

const listaTasks = document.getElementById('lista-tarefas');
const btnAddTask = document.getElementById('criar-tarefa');
const itemTasks = document.getElementsByClassName('task-list');
const bntClearItem = document.getElementById('apaga-tudo');
const bntClearSelectItem = document.getElementById('remover-finalizados');
const bntSalveStorege = document.getElementById('salvar-tarefas');
const bntmoverCima = document.getElementById('mover-cima');
const bntmoverBaixo = document.getElementById('mover-baixo');
const bntRemoveSelect = document.getElementById('remover-selecionado');

// Função que add a tafera a lista
function addTasks() {
  const taskList = document.createElement('li');
  taskList.className = 'task-list';

  // Pega o color do input e coloca na li.
  taskList.innerText = document.getElementById('texto-tarefa').value;
  document.getElementById('texto-tarefa').value = ''; // Reseta o input
  listaTasks.appendChild(taskList);
}

function addColorItem(event) {
  const el = event;
  // Um for mais simples para remove os style do item da lista.
  for (const item of itemTasks) {
    // So remove o style
    if (event.target.className.startsWith('task-list')) {
      item.removeAttribute('id');
      item.removeAttribute('style');
    }

    if (event.target.className.startsWith('task-list')) {
      el.target.style.backgroundColor = 'rgb(128, 128, 128)';
      el.target.id = 'select';
    }
  }
}

// Função que coloca sublinhado no item.
function underlinedItem(event) {
  const el = event;
  if (event.target.className === 'task-list') {
    el.target.className += ' completed';
  } else if (event.target.className === 'task-list completed') {
    el.target.className = 'task-list';
  }
}

// Fonte https://developer.mozilla.org/pt-BR/docs/Web/API/Node/removeChild
//  Deleta todos os Item da Lista
function clearTasksList() {
  while (listaTasks.firstChild) {
    listaTasks.removeChild(listaTasks.firstChild);
  }
}

// Deleta so os selecionado
function clearSelectItem() {
  const selectItem = document.querySelectorAll('.task-list.completed');
  // for (const item of selectItem) {
  //   listaTasks.removeChild(item);
  // }
  selectItem.forEach((item) => listaTasks.removeChild(item));
}

// Salva a lista de Tarefas
function setListStorage() {
  const listaHtml = listaTasks.innerHTML;
  localStorage.setItem('lista', listaHtml);
}

// Carregar os dados Salvos
function getSalveItem() {
  const lista = localStorage.getItem('lista');
  if (lista !== null) {
    listaTasks.innerHTML = lista;
  }
}

// Move para cima
function moveUp() {
  const position = document.getElementById('select');

  if (position !== itemTasks[0]) {
    listaTasks.insertBefore(position, position.previousSibling);
  }
}

// Move para cima
function moveDown() {
  const position = document.getElementById('select');

  if (position !== itemTasks[itemTasks.length - 1]) {
    listaTasks.insertBefore(position.nextSibling, position);
  }
}

// Removendo linha selecionada
function remoceSeleteLine() {
  const selectLine = document.getElementById('select');
  listaTasks.removeChild(selectLine);
}

btnAddTask.addEventListener('click', addTasks);
listaTasks.addEventListener('click', addColorItem);
listaTasks.addEventListener('dblclick', underlinedItem);
bntClearItem.addEventListener('click', clearTasksList);
bntClearSelectItem.addEventListener('click', clearSelectItem);
bntSalveStorege.addEventListener('click', setListStorage);
bntmoverCima.addEventListener('click', moveUp);
bntmoverBaixo.addEventListener('click', moveDown);
bntRemoveSelect.addEventListener('click', remoceSeleteLine);
window.onload = () => {
  getSalveItem();
};

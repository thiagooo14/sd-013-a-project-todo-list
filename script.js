const olList = document.getElementById('lista-tarefas');
const createItemBtn = document.getElementById('criar-tarefa');
const inputTask = document.getElementById('texto-tarefa');
const items = document.getElementsByClassName('task');
const clearAllBtn = document.getElementById('apaga-tudo');
const clearCompletedBtn = document.getElementById('remover-finalizados');
const saveBtn = document.getElementById('salvar-tarefas');
const upBtn = document.getElementById('mover-cima');
const downBtn = document.getElementById('mover-baixo');

// Função para deixar de ser selecionada
function notSelectItems() {
  for (let i = 0; i < items.length; i += 1) {
    items[i].classList.remove('selected');
  }
}
// Função para selecionar a tarefa
function selectItem() {
  for (let i = 0; i < items.length; i += 1) {
    items[i].addEventListener('click', () => {
      notSelectItems();
      items[i].classList.add('selected');
    });
  }
}

// Função para completar tarefa
olList.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
});

// Função para adicionar tarefa na lista
function createItem() {
  createItemBtn.addEventListener('click', () => {
    const item = document.createElement('li');
    olList.appendChild(item);
    item.innerText = inputTask.value;
    item.classList = 'task';
    inputTask.value = '';
    selectItem();
  });
}
createItem();

// Função para apagar lista
clearAllBtn.addEventListener('click', () => {
  olList.innerHTML = '';
});

// Função para apagar finalizados
clearCompletedBtn.addEventListener('click', () => {
  const completedItems = document.querySelectorAll('.completed');
  for (let i = 0; i < completedItems.length; i += 1) {
    olList.removeChild(completedItems[i]);
  }
});

// Função para salvar lista de tarefas
saveBtn.addEventListener('click', () => {
  localStorage.setItem('taskList', olList.innerHTML);
});

// Iniciando página com lista salva
function loadTasks() {
  if (localStorage.getItem('taskList')) {
    olList.innerHTML = localStorage.getItem('taskList');
  }
}
loadTasks();

// Função para mover task para cima
upBtn.addEventListener('click', () => {
  const selectedItem = document.querySelector('.selected');
  if (selectedItem && selectedItem.previousElementSibling) {
    olList.insertBefore(selectedItem, selectedItem.previousElementSibling);
    selectItem();
  }
});
// Função para mover task para baixo
downBtn.addEventListener('click', () => {
  const selectedItem = document.querySelector('.selected');
  if (selectedItem && selectedItem.nextElementSibling) {
    olList.insertBefore(selectedItem.nextElementSibling, selectedItem);
    selectItem();
  }
});

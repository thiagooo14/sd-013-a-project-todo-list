const olList = document.getElementById('lista-tarefas');
const createItemBtn = document.getElementById('criar-tarefa');
const inputTask = document.getElementById('texto-tarefa');
const items = document.getElementsByClassName('task');
const clearAllBtn = document.getElementById('apaga-tudo');
const clearCompletedBtn = document.getElementById('remover-finalizados');

// Função para deixar de ser selecionada
function notSelectItems() {
  for (let i = 0; i < items.length; i += 1) {
    items[i].style.backgroundColor = '';
  }
}
// Função para selecionar a tarefa
function selectItem() {
  for (let i = 0; i < items.length; i += 1) {
    items[i].addEventListener('click', (e) => {
      notSelectItems();
      e.target.style.backgroundColor = 'rgb(128, 128, 128)';
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

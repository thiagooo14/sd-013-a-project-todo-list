const olList = document.getElementById('lista-tarefas');
const createItemBtn = document.getElementById('criar-tarefa');
const inputTask = document.getElementById('texto-tarefa');
const items = document.getElementsByTagName('li');

// Função para deixar de ser selecionada
function notSelectItems() {
  for (let i = 0; i < items.length; i += 1) {
    items[i].classList = '';
  }
}
// Função para selecionar a tarefa
function selectItem() {
  for (let i = 0; i < items.length; i += 1) {
    items[i].addEventListener('click', (event) => {
      notSelectItems();
      const ev = event;
      ev.target.classList = 'selected';
    });
  }
}

// Função para adicionar tarefa na lista
function createItem() {
  createItemBtn.addEventListener('click', () => {
    const item = document.createElement('li');
    olList.appendChild(item);
    item.innerText = inputTask.value;
    inputTask.value = '';
    selectItem();
  });
}
createItem();

const olList = document.getElementById('lista-tarefas');
const createItemBtn = document.getElementById('criar-tarefa');
const inputTask = document.getElementById('texto-tarefa');
const items = document.getElementsByTagName('li');

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

// Função para selecionar a tarefa
function selectItem() {
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', (event) => {
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    });
  }
}
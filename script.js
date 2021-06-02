const olList = document.getElementById('lista-tarefas');
const createItemBtn = document.getElementById('criar-tarefa');
const inputTask = document.getElementById('texto-tarefa');

function createItemEvent() {
  createItemBtn.addEventListener('click', () => {
    const item = document.createElement('li');
    olList.appendChild(item);
    item.innerText = inputTask.value;
    inputTask.value = '';
  });
}

createItemEvent();

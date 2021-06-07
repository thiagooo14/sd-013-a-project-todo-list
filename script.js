const button = document.getElementById('criar-tarefa');
const textAdd = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas')

button.addEventListener('click', increase);

function increase() {
  const item = document.createElement('li');
  item.innerText = textAdd.value;
  list.appendChild(item);
  textAdd.value = '';
}
const button = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');

//Botão para adicionar o texto do input na lista "ol".
function addTask() {
  function newListItem() {
  let textInput = input.value;
  let listItem = document.createElement('li');

  listItem.innerHTML = textInput;

  list.appendChild(listItem);
  input.value = '';
  }
  button.addEventListener('click', newListItem);
  }
addTask();

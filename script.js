function getInputText() {
  const text = document.querySelector('#texto-tarefa').value;
  return text;
}

function clearInputText() {
  document.querySelector('#texto-tarefa').value = '';
}

function getListItems() {
  const list = document.querySelector('#lista-tarefas');
  return list;
}

function addTask() {
  const button = document.querySelector('#criar-tarefa');

  button.addEventListener('click', () => {
    const list = getListItems();
    const li = document.createElement('li');
    li.innerHTML = getInputText();
    list.appendChild(li)
    clearInputText();
  })
}

addTask();

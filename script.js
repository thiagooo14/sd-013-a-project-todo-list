function getInputText() {
  const text = document.querySelector('#texto-tarefa').value;
  return text;
}

function clearInputText() {
  document.querySelector('#texto-tarefa').value = '';
}

function getList() {
  const list = document.querySelector('#lista-tarefas');
  return list;
}

function getListItems() {
  const listItems = document.querySelectorAll('.list-item');
  return listItems;
}

function addTask() {
  const button = document.querySelector('#criar-tarefa');

  button.addEventListener('click', () => {
    const list = getList();
    const li = document.createElement('li');

    li.innerHTML = getInputText();
    li.classList.add('list-item')
    list.appendChild(li);
    clearInputText();
    selectListItem();
  });
}

function selectListItem() {
  const list = getListItems();

  for (let listIndex = 0; listIndex < list.length; listIndex++) {
    list[listIndex].addEventListener('click', (event) => {
      const item = event.target;

      item.classList.add('selected');
      // item.style.backgroundColor = 'rgb(128,128,128)';
    });
  }

}

selectListItem();

addTask();

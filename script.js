function getInputText() {
  const text = document.querySelector('#texto-tarefa').value;
  return text;
}

function clearInputText() {
  document.querySelector('#texto-tarefa').value = '';
}

function getListOl() {
  const list = document.querySelector('#lista-tarefas');
  return list;
}

function getListItems() {
  const listItems = document.querySelectorAll('.list-item');
  return listItems;
}

function unselectOtherItems(selectedItem) {
  const list = getListItems();

  list.forEach((item) => {
    if (selectedItem !== item) {
      item.classList.remove('selected');
    }
  });
}

function selectListItem() {
  const list = getListItems();

  list.forEach((listItem) => {
    listItem.addEventListener('click', (event) => {
      const item = event.target;

      item.classList.add('selected');
      unselectOtherItems(event.target);
    });
  });
}

function completeListItem() {
  const list = getListItems();

  list.forEach((listItem) => {
    listItem.addEventListener('dblclick', (event) => {
      const item = event.target;
      // const classes = item.classList;
      // console.log(classes)
      item.classList.toggle('completed');
    });
  });
}

function addTask() {
  const button = document.querySelector('#criar-tarefa');

  button.addEventListener('click', () => {
    const list = getListOl();
    const li = document.createElement('li');

    li.innerHTML = getInputText();
    li.classList.add('list-item');
    list.appendChild(li);
    clearInputText();
    selectListItem();
    completeListItem();
  });
}

selectListItem();

addTask();

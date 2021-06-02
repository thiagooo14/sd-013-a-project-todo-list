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
    let show = true;
    listItem.addEventListener('dblclick', (event) => {
      const item = event.target;
      if (show) {
        item.classList.add('completed');
      } else {
        item.classList.remove('completed');
      }
      show = !show;
    });
  });
}

function clearListItems() {
  const button = document.querySelector('#apaga-tudo');
  const list = getListOl();

  button.addEventListener('click', () => {
    list.innerHTML = '';
  });
}

function clearCompletedItems() {
  const button = document.querySelector('#remover-finalizados');
  const list = document.getElementsByClassName('completed');

  button.addEventListener('click', () => {
    for (const item in list) {
      if (Object.hasOwnProperty.call(list, item)) {
        list[item].remove();
      }
    }
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

clearCompletedItems();

clearListItems();

selectListItem();

addTask();

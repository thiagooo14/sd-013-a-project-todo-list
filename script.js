const input = document.querySelector('#texto-tarefa');

const btn = document.querySelector('#criar-tarefa');

function generateList() {
  if (input.value === '') {
    alert('"You ta de brincation uite me cara?"');
  } else {
    const listItem = document.createElement('li');
    listItem.classList.add('items');
    listItem.innerText = input.value;
    document.querySelector('#lista-tarefas').appendChild(listItem);
    input.value = '';
  }
}

btn.addEventListener('click', generateList);

function giveClass(element) {
  if (element.target.className === 'items') {
    const selected = document.querySelector('.selected');
    element.target.classList.add('selected');
    selected.classList.remove('selected');
  }
}

const giveProp = document.querySelector('#lista-tarefas');
giveProp.addEventListener('click', giveClass);

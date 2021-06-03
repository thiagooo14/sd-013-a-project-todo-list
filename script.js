const input = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const btn = document.querySelector('#criar-tarefa');

function generateList() {
  if (input.value === '') {
    alert('"You ta de brincation uite me cara?"');
  } else {
    const listItem = document.createElement('li');
    listItem.classList.add('items');
    listItem.innerText = input.value;
    taskList.appendChild(listItem);
    input.value = '';
  }
}

btn.addEventListener('click', generateList);

function giveClass(element) {
  if (element.target.className === 'items') {
    const selected = document.querySelector('.selected');
    element.target.classList.add('selected');
    if (selected !== null) {
      selected.classList.remove('selected');
    }
  }
}

const giveProp = document.querySelector('#lista-tarefas');
giveProp.addEventListener('click', giveClass);

function giveCompleted(element) {
  if (element.target.classList.contains('completed') === false) {
    element.target.classList.add('completed');
  } else if (element.target.classList.contains('completed')) {
    element.target.classList.remove('completed');
  }
}

taskList.addEventListener('dblclick', giveCompleted);

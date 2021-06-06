const list = document.getElementById('lista-tarefas');
const button = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');

function createNew() {
const listItem = document.createElement('li');
listItem.innerText = input.value;
listItem.classList = 'pinta';
list.appendChild(listItem);
input.value = '';
}

function selecting(event) {
  const lastItem = document.querySelector('.cinza');
if (event.target.classList.contains('pinta')) {
event.target.classList.add('cinza');
if (lastItem) {
lastItem.classList.remove('cinza');
}
}
}


 function completed(event) {
if (event.target.classList.contains('completed')) {
event.target.classList.remove('completed');
} else {
event.target.classList.add('completed');
}
}

button.addEventListener('click', createNew);
list.addEventListener('click', selecting);
list.addEventListener('dblclick', completed);
list.innerText = localStorage.getItem('list');  
const toDoList = document.querySelector('#lista-tarefas');
const btnCreateItem = document.querySelector('#criar-tarefa');
const textTask = document.querySelector('#texto-tarefa');

btnCreateItem.addEventListener('click', function() {
  console.log('botão de adicionar item foi clicado.');
  let item = document.createElement('li');
  let createdItem = toDoList.appendChild(item);
  createdItem.className = 'list-item';
  createdItem.innerHTML = textTask.value;
  textTask.value = '';
  textTask.focus();
});

document.addEventListener('click', function(event) {
  if (event.target.classList.contains('list-item')) {
    console.log('item da lista foi clicado.');
    event.target.style.backgroundColor = 'rgb(128,128,128)';
  }
});

window.onload = function() {

}
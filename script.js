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

function clearSelectedItem() {
  for (let index = 0; index < toDoList.childElementCount; index += 1) {
    toDoList.children[index].className = 'list-item';
    toDoList.children[index].style.backgroundColor = 'white';
  }
}

document.addEventListener('click', function(event) {
  if (event.target.classList.contains('list-item')) {
    clearSelectedItem();
    console.log('item da lista foi clicado.');
    event.target.className = 'list-item selected';
    event.target.style.backgroundColor = 'rgb(128,128,128)';
  }
});

window.onload = function() {

}
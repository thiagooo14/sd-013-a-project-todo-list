const toDoList = document.querySelector('#lista-tarefas');
const btnCreateItem = document.querySelector('#criar-tarefa');
const textTask = document.querySelector('#texto-tarefa');

function clearLastSelected() {
  for (let index = 0; index < toDoList.childElementCount; index += 1) {
    toDoList.children[index].classList.remove('selected');
  }
}

//Botão que quando clicado insere novos itens
btnCreateItem.addEventListener('click', function() {
  console.log('botão de adicionar item foi clicado.');
  let item = document.createElement('li');
  let createdItem = toDoList.appendChild(item);
  createdItem.className = 'list-item';
  createdItem.innerHTML = textTask.value;
  textTask.value = '';
  textTask.focus();
});

//Listener que seleciona o item da lista
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('list-item')) {
    console.log('item da lista foi clicado.');
    clearLastSelected();
    event.target.classList.add('selected');
  }
});

//Listener que ao ter 2 cliques marca como completa a tarefa
document.addEventListener('dblclick', function(event) {
  if(event.target.classList.contains('list-item')) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  }
});

window.onload = function() {

}
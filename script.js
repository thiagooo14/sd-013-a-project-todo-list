function createListItem() {
  let button = document.querySelector('#criar-tarefa');
  button.addEventListener('click', function() {
    let input = document.querySelector('#texto-tarefa').value;
    let lista = document.querySelector('#lista-tarefas');
    let item = document.createElement('li');
    item.innerText = input
    lista.appendChild(item);
    document.querySelector('#texto-tarefa').value = '';
  });
}
createListItem();
const lista = document.querySelector('#lista-tarefas');
const clearAllButton = document.querySelector('#apaga-tudo');
const clearCompleteButton = document.querySelector('#remover-finalizados');
function selectItem() {
  const itensLista = document.getElementsByTagName('li');
  for (let i = 0; i < itensLista.length; i += 1) {
    itensLista[i].addEventListener('click', () => {
      const currentlySelected = document.getElementById('selected');
      if (currentlySelected !== null) {
        currentlySelected.removeAttribute('id');
        itensLista[i].id = 'selected';
      } else {
        itensLista[i].id = 'selected';
      }
    });
  }
}
lista.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
});
function createListItem() {
  const button = document.querySelector('#criar-tarefa');
  button.addEventListener('click', () => {
    const input = document.querySelector('#texto-tarefa').value;
    const item = document.createElement('li');
    item.innerText = input;
    lista.appendChild(item);
    document.querySelector('#texto-tarefa').value = '';
    selectItem();
  });
}
clearAllButton.addEventListener('click', () => {
  lista.innerHTML = '';
});
clearCompleteButton.addEventListener('click', () => {
  const completos = document.querySelectorAll('.completed');
  for (let i = 0; i < completos.length; i += 1) {
    completos[i].remove();
  }
});
createListItem();
selectItem();

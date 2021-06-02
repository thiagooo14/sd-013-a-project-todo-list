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
function createListItem() {
  const button = document.querySelector('#criar-tarefa');
  button.addEventListener('click', () => {
    const input = document.querySelector('#texto-tarefa').value;
    const lista = document.querySelector('#lista-tarefas');
    const item = document.createElement('li');
    item.innerText = input;
    lista.appendChild(item);
    document.querySelector('#texto-tarefa').value = '';
    selectItem();
  });
}
createListItem();

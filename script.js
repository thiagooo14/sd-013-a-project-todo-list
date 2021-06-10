// Cria uma lista ordenada (ol)
function createOrderedList() {
  const lista = document.getElementById('ol-tarefas');
  const listaOrdenada = document.createElement('ol');
  listaOrdenada.setAttribute('id', 'lista-tarefas');
  lista.appendChild(listaOrdenada);
}
createOrderedList();

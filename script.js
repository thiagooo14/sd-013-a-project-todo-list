// Cria uma lista ordenada (ol)
function createOrderedList() {
  const lista = document.getElementById('ol-tarefas');
  const listaOrdenada = document.createElement('ol');
  listaOrdenada.setAttribute('id', 'lista-tarefas');
  lista.appendChild(listaOrdenada);
}
createOrderedList();

// Cria a lista de tarefas as (li)
function createLi() {
  const tarefas = document.getElementById('lista-tarefas');
  const inputTarefa = document.getElementById('texto-tarefa');
  const btn = document.getElementById('criar-tarefa');
  btn.addEventListener('click', function() {
    const lista = document.createElement('li');
    lista.innerText = inputTarefa.value;
    tarefas.appendChild(lista);
    inputTarefa.value = '';
  });
}
createLi();

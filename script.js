const listaOrdenada = document.querySelector('#lista-tarefas');
const botaoCriarTask = document.getElementById('criar-tarefa');
const inputField = document.querySelector('#texto-tarefa');
const botaoRemoveTudo = document.querySelector('#apaga-tudo');

function criaTarefa() {
  const inputTask = inputField.value;
  if (inputTask === '') {
    return null;
  } else {
  const elementoDaLista = document.createElement('li');
  elementoDaLista.innerHTML = inputTask;
  elementoDaLista.className = 'tarefa';
  listaOrdenada.appendChild(elementoDaLista);
  inputField.value = '';
  }
}

botaoCriarTask.addEventListener('click', criaTarefa);

// Matheus Camillo me ajudou a reduzir este código, por capricho, atribuíndo estilo na classe selected no CSS e não aqui.
function coloreItem(origem) {
  const itemSelecionado = document.querySelector('.selected');
  if (origem.target.className === 'tarefa') {
    origem.target.classList.add('selected');
    if (itemSelecionado !== null) {
      itemSelecionado.classList.remove('selected');
    }
  } 
}

listaOrdenada.addEventListener('click', coloreItem);

function riscaItem(origem) {
  if (origem.target.classList.contains('completed') === false) {
    origem.target.classList.add('completed');
  } else if (origem.target.classList.contains('completed')) {
  origem.target.classList.remove('completed');
  }
}

listaOrdenada.addEventListener('dblclick', riscaItem);

function apagaTudo() {
  while (listaOrdenada.lastElementChild !== null) {
    listaOrdenada.removeChild(listaOrdenada.lastElementChild);
  }
}

botaoRemoveTudo.addEventListener('click', apagaTudo);



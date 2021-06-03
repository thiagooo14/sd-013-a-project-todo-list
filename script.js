const listaOrdenada = document.querySelector('#lista-tarefas');
const botaoCriarTask = document.getElementById('criar-tarefa');
const inputField = document.querySelector('#texto-tarefa');

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

function coloreItem(origem) {
  const itemSelecionado = document.querySelector('.selected');
  if (origem.target.className === 'tarefa') {
    origem.target.classList.add('selected');
    if (itemSelecionado !== null) {
      itemSelecionado.style.backgroundColor = "white";
      itemSelecionado.classList.remove('selected');
    }
    const novoItemSelecionado = document.querySelector('.selected');
    novoItemSelecionado.style.backgroundColor = 'rgb(128,128,128)';
  } 
}

listaOrdenada.addEventListener('click', coloreItem);
const listaTarefa = document.querySelector('#lista-tarefas');
const textoTarefa = document.querySelector('#texto-tarefa');
const botaoTarefa = document.querySelector('#criar-tarefa');

function clicou () {
  if (textoTarefa.value === '') {
    return null;
  }
  const criaLi = document.createElement('li');
  criaLi.innerHTML = textoTarefa.value;
  criaLi.classList.add('tarefa');
  listaTarefa.appendChild(criaLi);
  textoTarefa.value = '';
}

botaoTarefa.addEventListener('click', clicou);


function colore (value) {
  const liSelecionada = document.querySelector('.selected');
  if (value.target.className === 'tarefa') {
    value.target.classList.add('selected');
    if (liSelecionada !== null) {
      liSelecionada.classList.remove('selected');
    }
  }
}

listaTarefa.addEventListener('click', colore);
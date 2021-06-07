const listaTarefa = document.querySelector('#lista-tarefas');
const textoTarefa = document.querySelector('#texto-tarefa');
const botaoTarefa = document.querySelector('#criar-tarefa');

function clicou() {
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

function colore(value) {
  const liSelecionada = document.querySelector('.selected');
  if (value.target.className === 'tarefa') {
    value.target.classList.add('selected');
    if (liSelecionada !== null) {
      liSelecionada.classList.remove('selected');
    }
  }
}

listaTarefa.addEventListener('click', colore);

function doubleClick(value) {
  value.target.classList.toggle('completed');
}

listaTarefa.addEventListener('dblclick', doubleClick);

const botaoApaga = document.querySelector('#apaga-tudo');

function apaga() {
  const lis = document.querySelectorAll('li');
  for (let i = 0; i < lis.length; i += 1) {
    const element = lis[i];
    listaTarefa.removeChild(element);
  }
}

botaoApaga.addEventListener('click', apaga);

const botaoApagaSelecionados = document.querySelector('#remover-finalizados');

function apagaSelecionados() {
  const lis = document.querySelectorAll('li');
  for (let i = 0; i < lis.length; i += 1) {
    const element = lis[i];
    if (element.classList.contains('completed')) {
      listaTarefa.removeChild(element);
    }
  }
}

botaoApagaSelecionados.addEventListener('click', apagaSelecionados);

const botaoSalvarTarefas = document.querySelector('#salvar-tarefas');

function salva() {
  const htmlista = listaTarefa.innerHTML;
  localStorage.setItem('listaSalva', htmlista);
}

function recupera() {
  const listaSalva = localStorage.getItem('listaSalva');
  listaTarefa.innerHTML = listaSalva;
}

recupera();

botaoSalvarTarefas.addEventListener('click', salva);

const botaoRemoveSelecionado = document.querySelector('#remover-selecionado');

function removeSelecionado() {
  const lis = document.querySelectorAll('li');
  for (let i = 0; i < lis.length; i += 1) {
    const element = lis[i];
    if (element.classList.contains('selected')) {
      listaTarefa.removeChild(element);
    }
  }
}

botaoRemoveSelecionado.addEventListener('click', removeSelecionado);

const textInput = document.querySelector('#texto-tarefa');
const botaoAdc = document.querySelector('#criar-tarefa');
const item = document.getElementsByTagName('li');
const botaoLimpar = document.querySelector('#apaga-tudo');
const btnSalvarTarefas = document.querySelector('#salvar-tarefas');
const bntMoverCima = document.getElementById('mover-cima');
const bntMoverBaixo = document.getElementById('mover-baixo');
const bntRemoverSelecionado = document.getElementById('remover-selecionado');
// let listaOrdenada = document.querySelector('#lista-tarefas');

// Adicionar Lista Ordenada
const listaOrdenada = document.createElement('ol');
document.body.appendChild(listaOrdenada);
listaOrdenada.setAttribute('id', 'lista-tarefas');
//  listaOrdenada.addEventListener('click', selectClass)

// EFEITO RISCADO
function duploClick(event) {
  event.target.classList.toggle('completed');
}

// Adiciona cor ao item clicado.
function mudaCor(event) {
  for (let i = 0; i < item.length; i += 1) {
    item[i].id = 'unselected';
  }event.target.id = 'selected';
}
// Adicionar Botão
function adicionaTarefa() {
  const item = document.createElement('li');
  listaOrdenada.appendChild(item);
  item.innerHTML = textInput.value;
  textInput.value = '';
  item.id = 'unselected';
  item.classList.add('item');
  item.addEventListener('click', mudaCor);
  item.addEventListener('dblclick', duploClick);
}

// BOTÃO LIMPAR LISTA
function resetBoard() {
  const li = document.querySelectorAll('.item');
  for (let i = 0; i < li.length; i += 1) {
    listaOrdenada.removeChild(li[i]);
    localStorage.clear();
  }
// listaOrdenada.innerHTML = null;
}
botaoLimpar.addEventListener('click', resetBoard);

// BOTÃO REMOVER TAREFAS FINALIZADAS

const btnRemoverTarefas = document.querySelector('#remover-finalizados');

function removeFinalizados() {
  const list = document.querySelectorAll('.item');
  for (let i = 0; i < list.length; i += 1) {
    if (list[i].classList.contains('completed')) {
      listaOrdenada.removeChild(list[i]);
    }
  }
}

function salvaTarefa() {
  btnSalvarTarefas.addEventListener('click', () => {
    localStorage.setItem('tarefasSalvas', listaOrdenada.innerHTML);
  });
}
salvaTarefa();
listaOrdenada.innerHTML = localStorage.getItem('tarefasSalvas');

const tarefaSelecionada = () => {
  const tarefaSelecionada = document.querySelector('#selected');
  return tarefaSelecionada;
};

function movePraCima() {
  if (tarefaSelecionada() && tarefaSelecionada() !== item[0]) {
    listaOrdenada.insertBefore(tarefaSelecionada(), tarefaSelecionada().previousElementSibling);
  }
}

function moverBaixo() {
  if (tarefaSelecionada() && tarefaSelecionada() !== item[item.length - 1]) {
    listaOrdenada.insertBefore(tarefaSelecionada().nextElementSibling, tarefaSelecionada());
  }
}

function removerSelecionado() {
  const selected = document.querySelector('#selected');
  selected.remove();
}

bntMoverBaixo.addEventListener('click', moverBaixo);
bntMoverCima.addEventListener('click', movePraCima);
btnRemoverTarefas.addEventListener('click', removeFinalizados);
botaoAdc.addEventListener('click', adicionaTarefa);
bntRemoverSelecionado.addEventListener('click', removerSelecionado);

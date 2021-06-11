// Variaveis
const listaTarefa = document.getElementById('lista-tarefas');

// Botao 'Adicionar'
const button = document.createElement('button');
button.id = 'criar-tarefa';
button.classList.add('btn');
button.classList.add('btn-primary');
const posicaoBotao = document.querySelector('#botao-adicionar');
button.innerHTML = 'Adicionar';
posicaoBotao.appendChild(button);

// Botao 'Apagar todas as tarefas'
const button2 = document.createElement('button');
button2.id = 'apaga-tudo';
button2.classList.add('btn');
button2.classList.add('btn-danger');
button2.innerHTML = 'Apagar todas as tarefas';
const posicaoBotao2 = document.querySelector('#botao-apagar');
posicaoBotao2.appendChild(button2);

// Botao 'Remover tarefas finalizadas'
const button3 = document.createElement('button');
button3.id = 'remover-finalizados';
button3.classList.add('btn');
button3.classList.add('btn-warning');
button3.innerHTML = 'Remover tarefas finalizadas';
const posicaoBotao3 = document.querySelector('#botao-remover');
posicaoBotao3.appendChild(button3);

// Botao 'Salvar Tarefas'
const button4 = document.createElement('button');
button4.id = 'salvar-tarefas';
button4.classList.add('btn');
button4.classList.add('btn-success');
button4.innerHTML = 'Salvar Tarefas';
const posicaoBotao4 = document.querySelector('#botao-salvar');
posicaoBotao4.appendChild(button4);

// Botao "Cima" botao "baixo"
const button5 = document.createElement('button');
const button6 = document.createElement('button');
button5.id = 'mover-cima';
button6.id = 'mover-baixo';
button5.innerHTML = 'Mover para Cima';
button6.innerHTML = 'Mover para Baixo';
button5.classList.add('btn');
button5.classList.add('btn-secondary');
button6.classList.add('btn');
button6.classList.add('btn-secondary');
const posicaoBotao56 = document.querySelector('#botao-cima-baixo');
posicaoBotao56.appendChild(button5);
posicaoBotao56.appendChild(button6);

// Botao "Remover Selecionado"
const button7 = document.createElement('button');
button7.id = 'remover-selecionado';
button7.classList.add('btn');
button7.classList.add('btn-dark');
button7.innerHTML = 'Remover tarefa selecionada';
const posicaoBotao7 = document.querySelector('#botao-remover-selecionado');
posicaoBotao7.appendChild(button7);

// Funcao para adicionar tarefas
function adicionarLista() {
  button.addEventListener('click', () => {
    const texto = document.getElementById('texto-tarefa').value;
    const lista = document.createElement('li');
    listaTarefa.appendChild(lista);
    lista.innerHTML = texto;
    document.getElementById('texto-tarefa').value = '';
  });
}

// Funcao para adicionar cor de fundo cinza em um item clicado
function corDeFundo(event) {
  const elementoClicado = event.target;
  let itensTarefa = [];
  elementoClicado.classList.add('listaClicado');
  itensTarefa = document.getElementsByClassName('listaClicado');
  for (let index = 0; index < itensTarefa.length; index += 1) {
    itensTarefa[index].id = '';
    itensTarefa[index].classList.add('corBranca');
  }
  const elementoClicado2 = event.target;
  elementoClicado2.classList.remove('corBranca');
  elementoClicado2.id = 'corCinza';
}

// Funcao para riscar tarefas completas
function linhaRiscada(event) {
  const elementoClicado = event.target;
  if (elementoClicado.classList.contains('completed')) {
    elementoClicado.classList.remove('completed');
  } else {
    elementoClicado.classList.add('completed');
  }
}

// Funcao para apagar todas as tarefas
function apagarTodasTarefas() {
  listaTarefa.textContent = ' ';
}

// Funcao para apagar tarefas finalizadas
function tarefasFinalizadas() {
  listaTarefa.querySelectorAll('.completed').forEach((n) => n.remove());
}

// Funcao para salvar as tarefas
function salvarTarefas() {
  localStorage.setItem('listaSalva', listaTarefa.innerHTML);
}

// Funcao para carregar as tarefas salvas
function carregarTarefas() {
  if (localStorage.getItem('listaSalva')) {
    listaTarefa.innerHTML = localStorage.getItem('listaSalva');
  }
}

// Funcao para mover para cima
function moverCima() {
  const selecionado = document.querySelector('#corCinza');
  if (selecionado !== null && selecionado !== listaTarefa.firstElementChild) {
    const anteriorElemento = selecionado.previousSibling;
    listaTarefa.insertBefore(selecionado, anteriorElemento);
  }
}

// Funcao para mover para baixo
function moverBaixo() {
  const selecionado = document.querySelector('#corCinza');
  if (selecionado !== null && selecionado !== listaTarefa.lastElementChild) {
    const proximoElemento = selecionado.nextElementSibling;
    listaTarefa.insertBefore(selecionado, proximoElemento.nextElementSibling);
  }
}

// Funcao remover tarefa selecionada
function removeSelecionada() {
  const selecionado = document.querySelector('#corCinza');
  listaTarefa.removeChild(selecionado);
}

// Funcoes e eventos a serem executados na pagina
adicionarLista();
carregarTarefas();
listaTarefa.addEventListener('click', corDeFundo);
listaTarefa.addEventListener('dblclick', linhaRiscada);
button2.addEventListener('click', apagarTodasTarefas);
button3.addEventListener('click', tarefasFinalizadas);
button4.addEventListener('click', salvarTarefas);
button5.addEventListener('click', moverCima);
button6.addEventListener('click', moverBaixo);
button7.addEventListener('click', removeSelecionada);

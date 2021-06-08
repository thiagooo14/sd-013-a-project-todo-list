// ADD TITLE -> DESAFIO 1

// Cria uma variável 'titulo' para armazenar o texto 'Minha Lista de Tarefas':

const titulo = document.querySelector('#titulo');
titulo.innerHTML = 'Minha Lista de Tarefas';

// -------------------------------------------------------

// ADD FUNCIONAMENTO -> DESAFIO 2

// Cria uma variável 'funcionamento' para armazenar o texto 'Clique duas vezes em um item para marcá-lo como completo':

const funcionamento = document.querySelector('#funcionamento');
funcionamento.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';

// -------------------------------------------------------

// ADD INPUT -> DESAFIO 3

// Ver HTML (#texto-tarefa).

// -------------------------------------------------------

// ADD LISTA ORDENADA -> DESAFIO 4

// Ver HTML (#lista-tarefas).

// -------------------------------------------------------

// ADD BOTÃO 'ADICIONAR' -> DESAFIOS 5 E 6

// Cria botão 'Adicionar':

const botaoAdicionar = document.querySelector('#criar-tarefa');
botaoAdicionar.innerHTML = 'Adicionar';

// Cria variáveis para armazenar texto de entrada + lista:

const inputText = document.querySelector('#texto-tarefa');
const theList = document.querySelector('#lista-tarefas');

// Cria função para adicionar o texto digitado na lista:

function adicionar() {
  const listRow = document.createElement('li');
  listRow.innerHTML = inputText.value;
  theList.appendChild(listRow);

  // Limpa o campo de entrada.
  inputText.value = '';
}

// Cria função que ouve o clique e chama a função 'Adicionar':

function clique() {
  botaoAdicionar.addEventListener('click', adicionar);
}

clique();

// -------------------------------------------------------

// COLORE ITEM DE CINZA (NO REPEAT) -> DESAFIOS 7 E 8

// Cria função que traz a cor cinza ao background do item clicado:

function trazOCinza(event) {
  if (document.querySelector('.corCinza') === null) {
    event.target.classList.add('corCinza');
    document.querySelector('.corCinza').style.backgroundColor = 'rgb(128, 128, 128)';
  } else {
    document.querySelector('.corCinza').style.backgroundColor = 'white';
    document.querySelector('.corCinza').classList.remove('corCinza');

    event.target.classList.add('corCinza');
    document.querySelector('.corCinza').style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

theList.addEventListener('click', trazOCinza);

// -------------------------------------------------------

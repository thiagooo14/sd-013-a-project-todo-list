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
function Adicionar() {
  const listRow = document.createElement('li');
  listRow.innerHTML = inputText.value;
  theList.appendChild(listRow);

  // Limpa o campo de entrada.
  inputText.value = '';
}

// Cria função que ouve o clique e chama a função 'Adicionar:
function Clique() {
  botaoAdicionar.addEventListener('click', Adicionar);
}
Clique();

// -------------------------------------------------------

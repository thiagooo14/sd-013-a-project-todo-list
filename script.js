// Requisito 1 - Adicione à sua lista o título "Minha Lista de Tarefas" em uma tag
function adicionaTitulo() {
  const titulo = document.getElementsByTagName('body')[0];
  const header = document.createElement('header');
  header.className = 'boxTitle';
  titulo.appendChild(header);
  const h1 = document.createElement('h1');
  h1.innerHTML = 'Minha Lista de Tarefas';
  header.appendChild(h1);
}
adicionaTitulo();

// Requisito 2 - Adicione abaixo do título um pequeno e discreto parágrafo com id="funcionamento" e com o texto "Clique duas vezes em um item para marcá-lo como completo"
function addParagraph() {
  const h1 = document.getElementsByTagName('h1')[0];
  const paragraph = document.createElement('p');
  paragraph.id = 'funcionamento';
  paragraph.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
  h1.appendChild(paragraph);
}
addParagraph();

// Requisito 3 - Adicione um input com o id="texto-tarefa" onde a pessoa usuária poderá digitar o nome do item que deseja adicionar à lista
function addInput() {
  const header = document.getElementsByTagName('header')[0];
  const saida = document.createElement('input');
  saida.id = 'texto-tarefa';
  header.appendChild(saida);
}
addInput();

// Requisito 4 - Adicione uma lista ordenada de tarefas com o id="lista-tarefas"
function addListOrder() {
  const getSaida = document.getElementsByTagName('input')[0];
  const listOrder = document.createElement('ol');
  listOrder.id = 'lista-tarefas';
  getSaida.appendChild(listOrder);
}
addListOrder();

// * Requisitos 1 e 2;
function createHeaderChild() {
  const headContainer = document.querySelector('#head-container');
  const newTitle = document.createElement('h1');
  newTitle.innerText = 'Minha Lista de Tarefas';
  newTitle.setAttribute('id', 'title-h1');
  headContainer.appendChild(newTitle);

  const newParagraph = document.createElement('p');
  newParagraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
  newParagraph.setAttribute('id', 'funcionamento');
  headContainer.appendChild(newParagraph);
}

createHeaderChild();

// * Requisito 3;
function createInputBox() {
  const inputBoxContainer = document.querySelector('#input-box');
  const newInputBox = document.createElement('input');
  newInputBox.setAttribute('id', 'texto-tarefa');
  inputBoxContainer.appendChild(newInputBox);
}

createInputBox();

// * Requisito 4;
function createToDoList() {
  const tdlContainer = document.querySelector('#tdl-container');
  const newOrderList = document.createElement('ol');
  newOrderList.setAttribute('id', 'lista-tarefas');
  tdlContainer.appendChild(newOrderList);
}

createToDoList();

// * Requisito 5 e 10(botões);
function createButton() {
  const inputBoxContainer = document.querySelector('#input-box');
  const newButton = document.createElement('button');
  newButton.setAttribute('id', 'criar-tarefa');
  newButton.classList.add('btn');
  newButton.innerText = 'add';
  inputBoxContainer.appendChild(newButton);

  const newClearButton = document.createElement('button');
  newClearButton.setAttribute('id', 'apaga-tudo');
  newClearButton.classList.add('btn');
  newClearButton.innerText = 'clear';
  inputBoxContainer.appendChild(newClearButton);

  const btnClearCompleted = document.createElement('button');
  btnClearCompleted.setAttribute('id', 'remover-finalizados');
  btnClearCompleted.classList.add('btn');
  btnClearCompleted.innerText = 'clear completed';
  inputBoxContainer.appendChild(btnClearCompleted);
}

createButton();

// * Requisitos 5 e 6;
let getInputBox = document.getElementById('texto-tarefa');
let getButton = document.getElementById('criar-tarefa');
let getOrderList = document.getElementById('lista-tarefas');

getButton.addEventListener('click', function() {
  let createLi = document.createElement('li');
  getOrderList.appendChild(createLi);
  createLi.classList.add('itens-lista');
  let getTextIB = document.getElementById('texto-tarefa').value;
  createLi.innerText = getTextIB;
  getInputBox.value = '';
});

// * Requisitos 7 e 8;
getOrderList.addEventListener('click', function(event) {
  let clickedItem = event.target;
  let getChildNodes = getOrderList.childNodes;
  for (let index = 0; index < getChildNodes.length; index += 1) {
    getChildNodes[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
  clickedItem.style.backgroundColor = 'rgb(128, 128, 128)';
})

// * Requisito 9;
getOrderList.addEventListener('dblclick', function(event) {
  let doubleClicked = event.target;
  doubleClicked.classList.toggle('completed');
})

// * Requisito 10;
let getClearButton = document.getElementById('apaga-tudo');

getClearButton.addEventListener('click', function() {
  // const getItens = document.getElementsByTagName('li');
  const getItens = document.querySelectorAll('.itens-lista');
  for (let index = 0; index < getItens.length; index += 1) {
    getItens[index].remove();
  }
})

// * Requisito 11;
let getBtnClearComp = document.getElementById('remover-finalizados');

getBtnClearComp.addEventListener('click', function() {
  const getItensComp = document.querySelectorAll('.completed');
  for (let index = 0; index < getItensComp.length; index += 1) {
    getItensComp[index].remove();
  }
})

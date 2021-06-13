//  variaveis

const buttomNew = document.getElementById('criar-tarefa');
const tasklist = document.getElementById('lista-tarefas');
const erase = document.getElementById('apaga-tudo');
const eraseCompleted = document.getElementById('remover-finalizados');
const eraseSelected = document.getElementById('remover-selecionado');

//  adiciona a class selected

function select(input) {
  const selector = input.target;
  const nowSelected = document.getElementsByClassName('selected');
  if (nowSelected.length > 0) {
    nowSelected[0].classList.remove('selected');
  }
  selector.classList.add('selected');
}

//  apaga tudo

function eraseall() {
  tasklist.innerHTML = '';
}

erase.addEventListener('click', eraseall);

//  addiciona a class completed

function complete(input) {
  const comp = input.target;
  if (comp.classList.contains('completed')) {
    comp.classList.remove('completed');
  } else {
    comp.classList.add('completed');
  }
}

//  remove itens com a class completed

function eraseComplete() {
  const completeds = document.querySelectorAll('.completed');
  for (let i = 0; i < completeds.length; i += 1) {
    completeds[i].remove();
  }
}

eraseCompleted.addEventListener('click', eraseComplete);

function eraseSelect() {
  const slc = document.getElementsByClassName('selected');
  for (let i = 0; i < slc.length; i += 1) {
    slc[i].remove();
  }
}

eraseSelected.addEventListener('click', eraseSelect);

//  cria os elementos da lista

function createList() {
  const task = document.getElementById('texto-tarefa').value;
  const newItem = document.createElement('li');
  newItem.innerText = task;
  newItem.classList.add('itemList');
  tasklist.appendChild(newItem);
  document.getElementById('texto-tarefa').value = '';
  newItem.addEventListener('click', select);
  newItem.addEventListener('dblclick', complete);
}

buttomNew.addEventListener('click', createList);

const criarButton = document.querySelector('#criar-tarefa');
const text = document.querySelector('#texto-tarefa');
const limpar = document.querySelector('#apaga-tudo');
const limparCompletos = document.querySelector('#remover-finalizados');
const salvar = document.querySelector('#salvar-tarefas');
const cima = document.querySelector('#mover-cima');
const baixo = document.querySelector('#mover-baixo');
const remove = document.querySelector('#remover-selecionado');
const listMom = document.querySelector('#lista-tarefas');

function completeItem(allItems) {
  const last = allItems.length - 1;
  allItems[last].addEventListener('dblclick', () => {
    if (allItems[last].classList.contains('completed')) {
      allItems[last].classList.remove('completed');
    } else {
      allItems[last].classList.add('completed');
    }
  });
}

function checkIfSelected() {
  const alreadySelected = document.querySelector('.selected');
  if (alreadySelected !== null) {
    alreadySelected.classList.remove('selected');
  }
}

function SelectItem(allItems) {
  const last = allItems.length - 1;
  allItems[last].addEventListener('click', () => {
    checkIfSelected();
    allItems[last].classList.add('selected');
  });
}

function addElement() {
  criarButton.addEventListener('click', () => {
    const listItem = document.createElement('li');
    listItem.innerHTML = text.value;
    text.value = '';
    listMom.appendChild(listItem);
    const allItems = document.querySelectorAll('li');
    SelectItem(allItems);
    completeItem(allItems);
  });
}

addElement();

function deleteList() {
  limpar.addEventListener('click', () => {
    const allItems = document.querySelectorAll('li');
    for (let i = 0; i < allItems.length; i += 1) {
      listMom.removeChild(allItems[i]);
    }
  });
}

deleteList();

function deleteCompleted() {
  limparCompletos.addEventListener('click', () => {
    const allCompleted = document.querySelectorAll('.completed');
    for (let i = 0; i < allCompleted.length; i += 1) {
      listMom.removeChild(allCompleted[i]);
    }
  });
}

deleteCompleted();

function saveList() {
  salvar.addEventListener('click', () => {
    localStorage.setItem('lista', listMom.innerHTML);
  });
}

saveList();

function moveAuxiliar(itemSelected) {
  if (itemSelected.previousElementSibling) {
    itemSelected.parentNode.insertBefore(itemSelected, itemSelected.previousElementSibling);
  }
}

function moveUp() {
  cima.addEventListener('click', () => {
    if (document.querySelector('.selected') !== null) {
      const itemSelected = document.querySelector('.selected');
      moveAuxiliar(itemSelected);
    }
  });
}

function moveDown() {
  baixo.addEventListener('click', () => {
    const value = document.querySelector('.selected');
    if (value) {
      const nextSibling = document.querySelector('.selected').nextElementSibling;
      if (nextSibling) {
        const itemSelected = value.nextElementSibling;
        moveAuxiliar(itemSelected);
      }
    }
  });
}

moveUp();
moveDown();

function removerSelected() {
  remove.addEventListener('click', () => {
    if (document.querySelector('.selected') !== null) {
      const itemSelected = document.querySelector('.selected');
      listMom.removeChild(itemSelected);
    }
  });
}

removerSelected();

window.onload = () => {
  const backup = localStorage.getItem('lista');
  if (backup !== null) {
    listMom.innerHTML = backup;
    const allItems = document.querySelectorAll('li');
    const itemsToGo = [];
    for (let i = 0; i < allItems.length; i += 1) {
      itemsToGo.push(allItems[i]);
      SelectItem(itemsToGo);
      completeItem(itemsToGo);
    }
  }
};
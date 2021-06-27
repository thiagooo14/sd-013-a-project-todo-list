const captureOl = document.querySelector('#lista-tarefas');
function addNewItem () {
  const btn = document.getElementById('criar-tarefa');
  const list = document.getElementById('lista-tarefas')
  btn.addEventListener('click', () => {
    const newLi = document.createElement('li')
    const newText = list.appendChild(newLi);
    newText.className = 'Item'
    const inputText = document.getElementById('texto-tarefa');
    newText.innerHTML = `${inputText.value}`;
    inputText.value = '';
  });
}
addNewItem();

function markItem() {
  captureOl.addEventListener('click', (event) => {
    const captureLi = document.getElementsByClassName('Item')
    for (let index = 0; index < captureLi.length; index += 1) {
      if (captureLi[index].classList.contains('Selected')) {
        captureLi[index].classList.remove('Selected');
      }
      event.target.classList.add('Selected');
    }
  });
}
markItem()

function riskItem () {
  captureOl.addEventListener('dblclick', (event) => {
    const captureLi = event.target;
    if(captureLi.classList.contains('completed') ) {
      captureLi.classList.remove('completed');
    } else
    captureLi.classList.add('completed');
  });
}
riskItem();

function clearAll () {
  const btnclear = document.getElementById('apaga-tudo');
  btnclear.addEventListener('click', () => {
    captureOl.innerHTML = '';
  });
}
clearAll();

function clearCompleted() {
  const btnclearSome = document.getElementById('remover-finalizados');
  btnclearSome.addEventListener('click', () => {
    const completedTasks = document.querySelectorAll('.completed');
    for (let index = 0; index < completedTasks.length; index += 1) {
      completedTasks[index].remove();
    }
  })
}
clearCompleted();

function moveUp() {
  const btnUp = document.querySelector('#mover-cima');
  btnUp.addEventListener('click', () => {
    const getSelected = document.querySelector('.Selected');
    const child1 = captureOl.firstChild;
    if (child1 !== getSelected && getSelected !== null) {
    captureOl.insertBefore(getSelected, getSelected.previousSibling);
    }
  });
}
moveUp();

function moveDown() {
  const btnDown = document.querySelector('#mover-baixo')
  btnDown.addEventListener('click', () => {
    const getSelected = document.querySelector('.Selected');
    const lastChild = captureOl.lastChild;
    if (lastChild !== getSelected && getSelected !== null) {
      captureOl.insertBefore(getSelected.nextSibling, getSelected);
    }
  });
}
moveDown();

function removeSelected() {
  const btnRemove = document.querySelector('#remover-selecionado');
  btnRemove.addEventListener('click', () => {
    const getSelected = document.querySelector('.Selected');
    getSelected.remove()
  });
}
removeSelected();
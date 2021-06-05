let arrayLi = [];
let posAtual = 0;
function addTask(evento) {
  const elementText = document.getElementById('texto-tarefa').value;
  const list = document.getElementById('lista-tarefas');
  const elementList = document.createElement('li');
  elementList.innerHTML = elementText;
  list.appendChild(elementList);
  document.getElementById('texto-tarefa').value = '';
  elementList.addEventListener('dblclick', finished);
  elementList.addEventListener('click', changeSelectedColor);
  arrayLi = Array.from(document.querySelectorAll('li'));
}

function changeSelectedColor(evento) {
  removeAllSelectedLi();
  evento.target.classList.add('selected');
  posAtual = arrayLi.findIndex((li) => li.className.includes('selected'));
}

function finished(evento) {
  if (evento.target.classList.contains('completed')) {
    evento.target.classList.remove('completed');
  } else {
    evento.target.classList.add('completed');
    evento.target.classList.remove('selected');
  }
}

function clearList(evento) {
  document.getElementById('lista-tarefas').innerHTML = '';
}

function deleteComplete() {
  const comp = document.querySelectorAll('.completed');
  const lista = document.getElementById('lista-tarefas');
  for (let i = 0; i < comp.length; i++) {
    lista.removeChild(comp[i]);
  }
}

function deleteSelected() {
  const comp = document.querySelectorAll('.selected');
  const lista = document.getElementById('lista-tarefas');
  for (let i = 0; i < comp.length; i++) {
    lista.removeChild(comp[i]);
  }
}

function moveDown() {
  removeAllSelectedLi();
  posAtual++;
  let moverDown = arrayLi[posAtual];
  moverDown.classList.add('selected');
}

function moveUp() {
  removeAllSelectedLi();
  posAtual--;
  let moverUp = arrayLi[posAtual];
  moverUp.classList.add('selected');
}

function removeAllSelectedLi() {
  let list = document.querySelectorAll('li');
  for (let i = 0; i < list.length; i++) {
    if (list[i].classList.contains('selected')) {
      list[i].classList.remove('selected');
    }
  }
}

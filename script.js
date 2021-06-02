const input = document.getElementById('texto-tarefa');
const button = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');

// Botão e enter adicionam uma 'li' na 'ol' com o valor dado no input
function addTask() {
  function add() {
    const inputvalue = input.value;
    const newItem = document.createElement('li');
    newItem.innerText = inputvalue;
    newItem.className = 'item';

    lista.appendChild(newItem);
    input.value = '';
  }

  button.addEventListener('click', add);
  input.addEventListener('keydown', (event) => {
    const key = event.code;
    if (key === 'Enter' || key === 'NumpadEnter') {
      add();
    }
  });
}
addTask();

// Troca a cor de background de uma 'li' quando clicada
const arrayList = document.getElementsByClassName('item');
const ol = document.getElementById('lista-tarefas');

function changeSelected() {
  function changeIntoElements(event) {
    for (let index = 0; index < arrayList.length; index += 1) {
      if (arrayList[index].classList.contains('selected')) {
        arrayList[index].classList.remove('selected');
      }
    }
    event.target.classList.add('selected');
  }

  ol.addEventListener('click', changeIntoElements);
}
changeSelected();

// DoubleClick para remover item da lista
function completedTask() {
  ol.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
  });
}
completedTask();

// Botão para apagar todos o itens da lista ordenada
const buttonRmvAll = document.getElementById('apaga-tudo');

function removeAll() {
  while (ol.firstChild) {
    ol.removeChild(ol.firstChild);
  }
}
buttonRmvAll.addEventListener('click', removeAll);

// Botão para remover tarefas completas
const buttonRmvCompleted = document.querySelector('#remover-finalizados');

function removeCompleted() {
  for (let i = 0; i < arrayList.length; i += 1) {
    if (arrayList[i].classList.contains('completed')) {
      arrayList[i].remove();
    }
  }
}
buttonRmvCompleted.addEventListener('click', removeCompleted);

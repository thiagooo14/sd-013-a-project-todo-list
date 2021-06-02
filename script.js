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

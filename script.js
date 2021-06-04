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
    if (event.target.classList.contains('item')) {
      for (let index = 0; index < arrayList.length; index += 1) {
        if (arrayList[index].classList.contains('selected')) {
          arrayList[index].classList.remove('selected');
        }
      }
      event.target.classList.add('selected');
    }
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
  const completedItem = document.querySelectorAll('.completed');

  for (let i = 0; i < completedItem.length; i += 1) {
    completedItem[i].parentNode.removeChild(completedItem[i]);
  }
}
buttonRmvCompleted.addEventListener('click', removeCompleted);

// Botão para salvar a lista de tarefas
const buttonSave = document.querySelector('#salvar-tarefas');

function loadList() {
  buttonSave.addEventListener('click', () => {
    localStorage.setItem('lista-de-tarefas', ol.innerHTML);
  });
}
  ol.innerHTML = localStorage.getItem('lista-de-tarefas');

loadList();

// Criar botão que mova item selecionado para cima ou para baixo na lista de tarefas
const buttonUp = document.querySelector('#mover-cima');
const buttonDown = document.querySelector('#mover-baixo')

function moveTask() {
  buttonUp.addEventListener('click', () => {
    const selectedElement = document.querySelector('.selected');
    if (selectedElement && selectedElement.previousElementSibling) {
      ol.insertBefore(selectedElement, selectedElement.previousElementSibling);
    }
  });

// Funções criadas com ajuda do Erick Santos (turma 13 - tribo A)

  buttonDown.addEventListener('click', () => {
    const selectedElement = document.querySelector('.selected');
    if (selectedElement && selectedElement.nextElementSibling) {
      ol.insertBefore(selectedElement.nextElementSibling, selectedElement);
    }
  });
}
moveTask();

// Criar função para remover item selecionado
const buttonRmvItem = document.querySelector('#remover-selecionado');

function removeItem() {
  buttonRmvItem.addEventListener('click', () => {
    const selectedEl = document.querySelector('.selected');
    selectedEl.parentNode.removeChild(selectedEl);
  })
}
removeItem();

const addButton = document.getElementById('criar-tarefa');
const task = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');
let lastMarked = null;
const cleanButton = document.getElementById('apaga-tudo');
const cleanCheckedButton = document.getElementById('remover-finalizados');
const removeSelectedButton = document.getElementById('remover-selecionado');
// tamanho do texto para marcar somente área escrita
function getTextWidth(text, font) {
  console.log(text.length);
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  context.font = font || getComputedStyle(document.body).font;

  const pxSize = (Math.round(context.measureText(text).width * 1.8)).toString();
  return pxSize.concat('px');
}

const onButtonClick = function () {
  if (task.value.length > 0) {
    const newTask = document.createElement('li');
    newTask.innerHTML = task.value;
    newTask.style.width = getTextWidth(task.value);
    newTask.style.margin = '10px';
    taskList.appendChild(newTask);
    task.value = '';
  }
};

const onItem = function (e) {
  if (e.target.tagName === 'LI') {
    if (lastMarked != null) {
      lastMarked.style.backgroundColor = 'white';
    }
    e.target.style.backgroundColor = 'rgb(128, 128, 128)';
    lastMarked = e.target;
  }
};

const checkedItem = function (e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('completed');
  }
};

const cleanList = function () {
  taskList.innerHTML = '';
};

const cleanFinished = function () {
  var riskedItens = taskList.getElementsByClassName('completed');
    while(riskedItens[0]){
      riskedItens[0].parentNode.removeChild(riskedItens[0]);

  }
}

const selected = function () {
    lastMarked.parentNode.removeChild(lastMarked);
}

// Listeners
addButton.addEventListener('click', onButtonClick);
taskList.addEventListener('click', onItem);
taskList.addEventListener('dblclick', checkedItem);
cleanButton.addEventListener('click', cleanList);
cleanCheckedButton.addEventListener('click',cleanFinished);
removeSelectedButton.addEventListener('click',selected);
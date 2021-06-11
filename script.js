const button = document.getElementById('criar-tarefa');
const textAdd = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');

button.addEventListener('click', increase);

function increase() {
  const item = document.createElement('li');
  item.innerText = textAdd.value;
  list.appendChild(item);
  textAdd.value = '';

  const itemLista = document.getElementsByTagName('li');

  for (let index = 0; index < itemLista.length; index += 1) {
    itemLista[index].addEventListener('click', function (event) {

      for (let refresh = 0; refresh < itemLista.length; refresh += 1) {
        itemLista[refresh].style.backgroundColor = '#e9d8d8';
      }
      event.target.style.backgroundColor = 'rgb(128,128,128)';
    });
  }
}

const itemLista = document.getElementById('lista-tarefas');

itemLista.addEventListener('dblclick', function (event) {
  event.target.classList.toggle('completed');
});

const botaoReset = document.querySelector('#apaga-tudo');

botaoReset.addEventListener('click', function () {
  location.reload();
});

const botaResetFinished = document.getElementById('remover-finalizados');
const classCompleted = document.getElementsByTagName('li');

botaResetFinished.addEventListener('click', function () {
  if (itemLista.childNodes.classList === 'completed') {
    itemLista.removeChild(classCompleted);
  }
})

const buttonRemoveFinish = document.getElementById('remover-finalizados');
let classeCompletada = document.getElementsByClassName('completed');

buttonRemoveFinish.addEventListener('click', function () {
  
  for (let index = 0; index < classeCompletada.length; index += 1) {
    let pai = document.getElementById('lista-tarefas');
    while (classeCompletada.length > 0) {
      pai.removeChild(classeCompletada[index]);
    }
  }
})

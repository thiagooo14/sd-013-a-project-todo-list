const button = document.getElementById('criar-tarefa');
const textAdd = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');
const botaoReset = document.querySelector('#apaga-tudo');
const buttonRemoveFinish = document.getElementById('remover-finalizados');
let classeCompletada = document.getElementsByClassName('completed');
const botaoRemoveSelected = document.querySelector('#remover-selecionado');
let classSelected = document.getElementsByClassName('selected');

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
        itemLista[refresh].classList.remove('selected');
      }
      event.target.style.backgroundColor = 'rgb(128,128,128)';
      event.target.classList.add('selected');
    });
  }
}

list.addEventListener('dblclick', function (event) {
  event.target.classList.toggle('completed');
});

botaoReset.addEventListener('click', function () {
  location.reload();
});

buttonRemoveFinish.addEventListener('click', function () {
  
  for (let index = 0; index < classeCompletada.length; index += 1) {
    while (classeCompletada.length > 0) {
      list.removeChild(classeCompletada[index]);
    }
  }
})

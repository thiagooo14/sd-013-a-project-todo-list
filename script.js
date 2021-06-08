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
        itemLista[refresh].style.backgroundColor = 'white';
      }
      event.target.style.backgroundColor = 'rgb(128,128,128)';
    });
  }

  // for (let index = 0; index < itemLista.length; index += 1) {
  //   itemLista[index].addEventListener('dblclick', function(event) {
      
  //     if (itemLista[index].style.textDecoration === 'none') {
  //       event.target.style.textDecoration = 'line-through';
  //       event.target.classList.add('completed');
  //     } else {
  //       itemLista[index].classList.remove('completed');
  //       event.target.style.textDecoration = 'none';
  //     }
  //   });
  // }
}

const botao = document.querySelector("#apaga-tudo");

botao.addEventListener('click', clicaBotao);

function clicaBotao() {
  location.reload();
}

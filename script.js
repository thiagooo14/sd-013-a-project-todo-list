// ================================================================
const clickB = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');

function tarefa(evento) {
  const res = document.getElementById('texto-tarefa').value;
  const listItem = document.createElement('li');
  listItem.innerText = res;
  lista.appendChild(listItem);
  input.value = '';
}
clickB.addEventListener('click', tarefa);

// ================================================================
function selectLi(evento) {
  //console.log('ok');
  const listGray = document.getElementsByClassName('gray');

  if (listGray.length > 0) {
    for (let index = 0; index < listGray.length; index += 1) {
      listGray[index].classList.remove('gray');
    }
    evento.target.classList.add('gray');
  } else {
    evento.target.classList.add('gray');
  }
  lista.style.backgroundColor = 'white';
}
lista.addEventListener('click', selectLi);

// ================================================================
function completo(evento) {
  const listCompleted = document.getElementsByClassName('completed');
  const teste = evento.target.classList.value;

  if (teste === 'completed gray') {
    evento.target.classList.remove('completed');
  } else {
    evento.target.classList.add('completed');
  }
  console.log(document.body)
}
lista.addEventListener('dblclick', completo);

// ================================================================
function createButton() {
  const recuperaContainer = document.querySelector('.container');
  const cleanButton = document.createElement('button');
  const buttonID = 'apaga-tudo';
  const listLi = document.getElementsByTagName('li');

  cleanButton.innerHTML = 'Apaga';
  cleanButton.id = buttonID;
  recuperaContainer.appendChild(cleanButton);

  cleanButton.addEventListener('click', function () {
    //console.log(listLi.length);

    for (let index = listLi.length - 1; index > -1; index -= 1) {
      console.log(listLi);
      //lista.removeChild(lista.childNodes[index]);
      lista.removeChild(listLi[index]);
    }

  });

  //console.log(document.body)
}
createButton();

console.log(document.body)
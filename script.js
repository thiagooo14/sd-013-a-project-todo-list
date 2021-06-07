// ================================================================
const clickB = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');

function tarefa() {
  const res = document.getElementById('texto-tarefa').value;
  const listItem = document.createElement('li');
  listItem.innerText = res;
  lista.appendChild(listItem);
  input.value = '';
}
clickB.addEventListener('click', tarefa);

// ================================================================
function selectLi(evento) {
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
  // const listCompleted = document.getElementsByClassName('completed');
  const teste = evento.target.classList.value;

  if (teste === 'completed gray') {
    evento.target.classList.remove('completed');
  } else {
    evento.target.classList.add('completed');
  }
}
lista.addEventListener('dblclick', completo);

// ================================================================
function createButtonClean() {
  const recuperaContainer = document.querySelector('.container');
  const cleanButton = document.createElement('button');
  const listLi = document.getElementsByTagName('li');
  const buttonID = 'apaga-tudo';

  cleanButton.innerHTML = 'Apaga';
  cleanButton.id = buttonID;
  recuperaContainer.appendChild(cleanButton);

  cleanButton.addEventListener('click', function() {
    for (let index = listLi.length - 1; index > -1; index -= 1) {
      console.log(listLi);
      lista.removeChild(listLi[index]);
    }
  });
}
createButtonClean();

// ================================================================
function createButtonRemove() {
  const recuperaContainer = document.querySelector('.container');
  const removeButton = document.createElement('button');
  const listCompleted = document.getElementsByClassName('completed')
  const buttonID = 'remover-finalizados';

  removeButton.innerHTML = 'Remover';
  removeButton.id = buttonID;
  recuperaContainer.appendChild(removeButton);

  removeButton.addEventListener('click', function() {
    if(listCompleted.length > 0) {
      for (let index = listCompleted.length -1; index > -1; index -= 1){
        listCompleted[index].remove();
      }
    }
  })
}
createButtonRemove();

//console.log(document.body);

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
    for(let index = 0; index < listGray.length; index += 1) {
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
  //console.log(document.body)
}
lista.addEventListener('dblclick', completo);



// console.log(document.body)
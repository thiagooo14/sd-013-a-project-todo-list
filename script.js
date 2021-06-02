//================================================================
const clickB = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');

function tarefa(evento) {
  const res = document.getElementById('texto-tarefa').value;
  listItem = document.createElement('li')
  listItem.innerText = res;
  lista.appendChild(listItem)
  input.value = '';
}

clickB.addEventListener('click', tarefa);

//================================================================
function selectLi(evento) {
  console.log('ok')
  evento.target.style.backgroundColor = 'rgb(128, 128, 128)'
} 

lista.addEventListener('click', selectLi);

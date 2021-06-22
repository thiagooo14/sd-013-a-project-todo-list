const criarTarefaBt = document.getElementById('criar-tarefa');

function novaTarefa() {
  const input = document.querySelector('input').value;
  const tarefa = document.createElement('li');
  tarefa.innerHTML = input;
  document.querySelector('ol').appendChild(tarefa);
}

criarTarefaBt.addEventListener('click', novaTarefa);

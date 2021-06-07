function getTextoTarefa() {
  return document.getElementById('texto-tarefa').value;
}

function clearTextoTarefa() {
  document.getElementById('texto-tarefa').value = '';
}

const lista = document.getElementById('lista-tarefas');
let li = '';

function criarTarefa() {
  li = document.createElement('li');
  li.innerText = getTextoTarefa();
  lista.appendChild(li);
  clearTextoTarefa();
  li.addEventListener("click", (event) => event.target.style.backgroundColor = 'rgb(128, 128, 128)');
}

// lista.addEventListener("click", corFundoItem => li.style.backgroundColor = 'rgb(128, 128, 128)');

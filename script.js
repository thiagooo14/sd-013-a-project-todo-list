const listaTarefas = document.querySelector('#lista-tarefas');
const input = document.querySelector('#texto-tarefa');
const botaoAdicionar = document.querySelector('#criar-tarefa');

function completarTarefa(event) {
  if (event.target.className === 'completed') {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function trocaCorTarefa(event) {
  const unicacor = document.querySelectorAll('li');
  for (let i = 0; i < unicacor.length; i += 1) {
    unicacor[i].style.backgroundColor = '';
  }
  event.target.style.backgroundColor = 'rgb(128,128,128)';
}

function criarTarefa() {
  const li = document.createElement('li');
  li.innerText = input.value;
  input.value = null;
  li.addEventListener('click', trocaCorTarefa);
  li.addEventListener('dblclick', completarTarefa);
  listaTarefas.appendChild(li);
}

botaoAdicionar.addEventListener('click', criarTarefa);

const inputi = document.getElementById('texto-tarefa');
const button = document.getElementById('criar-tarefa');
const listaDeTarefas = document.getElementById('lista-tarefas');

// Referência Josué Lobo//
listaDeTarefas.addEventListener('click', (event) => {
  const alvo = event.target;
  if (alvo.className === 'item-list') {
    const selected = document.querySelector('.selected');
    if (selected !== null) {
      selected.classList.remove('selected');
      selected.style.backgroundColor = 'white';
    }
    alvo.classList.add('selected');
    alvo.style.backgroundColor = 'rgb(128,128,128)';
  }
});

function adicionaTarefa() {
  const CreateText = document.createElement('li');
  listaDeTarefas.appendChild(CreateText);
  CreateText.innerText = inputi.value;
  inputi.value = '';
  CreateText.className = 'item-list';
}
button.addEventListener('click', adicionaTarefa);
inputi.addEventListener('keypress', (g) => {
  if (g.key === 'Enter') {
    adicionaTarefa();
  }
});

function riscaLinha(evento) {
  const alvo = evento.target;
  if (alvo.classList.contains('completed')) {
    alvo.classList.remove('completed');
  } else {
    alvo.classList.add('completed');
  }
}
listaDeTarefas.addEventListener('dblclick', riscaLinha);

const listaDeTarefas = document.getElementById('lista-tarefas');

function adicionaTarefas() {
  const getInputElement = document.getElementById('texto-tarefa');
  const getInputValue = getInputElement.value;
  const novaTarefa = document.createElement('li');
  novaTarefa.innerHTML = getInputValue;
  novaTarefa.className = 'tarefa';
  listaDeTarefas.appendChild(novaTarefa);
  const clearInput = '';
  getInputElement.value = clearInput;
}

function selecionaTarefa(tarefaSelecionada) {
  const tarefaSelecionadaElement = document.querySelector('.selected');
  if (tarefaSelecionadaElement === null) {
    tarefaSelecionada.classList.add('selected');
  } else {
    tarefaSelecionadaElement.classList.remove('selected');
    tarefaSelecionada.classList.add('selected');
  }
}

document.addEventListener('click', (event) => {
  if (event.target.id === 'criar-tarefa') {
    const getInputElement = document.getElementById('texto-tarefa');
    const getInputValue = getInputElement.value;
    if (getInputValue === '') {
      alert('Faltou escrever a tarefa a fazer');
    } else {
      adicionaTarefas();
    }
  }
  if (event.target.classList.contains('tarefa')) {
    const getEventElement = event.target;
    selecionaTarefa(getEventElement);
  }
});
const listaTarefas = document.querySelector('#lista-tarefas');

const creatingTask = () => {
  document.querySelector('#criar-tarefa').addEventListener('click', () => {
    const textoTarefa = document.querySelector('#texto-tarefa');
    const li = document.createElement('li');
    li.textContent = textoTarefa.value;

    if (textoTarefa.value === '') {
      window.alert('Inserir Texto');
    } else {
      listaTarefas.appendChild(li);
    }
    textoTarefa.value = '';
    textoTarefa.focus();
  });
};

window.addEventListener('load', creatingTask);

const selectTask = () => {  
  listaTarefas.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
    localStorage.setItem('completed', event.target.classList);
  });
};

window.addEventListener('load', selectTask);

const completedTask = () => {
  listaTarefas.addEventListener('click', (event) => {
    event.target.classList.toggle('selected');
    localStorage.setItem('selected', event.target.classList);
  });
};

window.addEventListener('click', completedTask);

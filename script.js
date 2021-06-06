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
  });
};

window.addEventListener('load', selectTask);

const completeTask = () => {
  listaTarefas.addEventListener('click', (event) => {
    event.target.classList.toggle('selected');
  });
};

window.addEventListener('load', completeTask);

const deleteAllTasks = () => {
  const deleteTask = document.querySelector('#apaga-tudo');
  deleteTask.addEventListener('click', () => {
    listaTarefas.innerText = '';
  });
};

window.addEventListener('load', deleteAllTasks);

const deleteSelectedTasks = () => {
  const completedTask = document.querySelector('#remover-selecionado');
  completedTask.addEventListener('click', () => {
    const taskSelected = document.querySelector('.selected');
    taskSelected.parentNode.removeChild(taskSelected);
  });
};

window.addEventListener('load', deleteSelectedTasks);

const deleteCompletedTasks = () => {
  const completedTask = document.querySelector('#remover-finalizados');
  completedTask.addEventListener('click', () => {
    const taskCompleted = document.querySelectorAll('.completed');
    for (let i = 0; i < taskCompleted.length; i += 1) {
      taskCompleted[i].parentNode.removeChild(taskCompleted[i]);
    }
  });
};

window.addEventListener('load', deleteCompletedTasks);

const loadTask = () => {
  const buttonSave = document.querySelector('#salvar-tarefas');
  buttonSave.addEventListener('click', () => {
    localStorage.setItem('list-task', listaTarefas.innerHTML);
  });
  listaTarefas.innerHTML = localStorage.getItem('list-task');
};

window.addEventListener('load', loadTask);

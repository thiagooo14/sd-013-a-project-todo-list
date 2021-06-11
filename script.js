const listaTarefas = document.querySelector('#lista-tarefas');

const creatingTask = () => {
  document.querySelector('#criar-tarefa').addEventListener('click', () => {
    const textoTarefa = document.querySelector('#texto-tarefa');
    const li = document.createElement('li');
    li.classList.add('item');
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

const dblMarkupTask = () => {
  listaTarefas.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
  });
};

window.addEventListener('load', dblMarkupTask);

const completeTask = () => {
  listaTarefas.addEventListener('click', (event) => {
    const li = document.querySelectorAll('.item');
    for (let index = 0; index < li.length; index += 1) {
      li[index].classList.remove('selected');
    }
    event.target.classList.toggle('selected');
  });
};

window.addEventListener('load', completeTask);

const moveUpTask = () => {
  const elementoSelecionado = document.querySelector('.selected');
  if (elementoSelecionado && elementoSelecionado.previousElementSibling) {
    listaTarefas.insertBefore(elementoSelecionado, elementoSelecionado.previousElementSibling);
  }
};

const buttonUp = document.querySelector('#mover-cima');
buttonUp.addEventListener('click', moveUpTask);

const moveDownTask = () => {
  const elementoSelecionado = document.querySelector('.selected');
  if (elementoSelecionado && elementoSelecionado.nextElementSibling) {
    listaTarefas.insertBefore(elementoSelecionado.nextElementSibling, elementoSelecionado);
  }
};

const buttonDown = document.querySelector('#mover-baixo');
buttonDown.addEventListener('click', moveDownTask);

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

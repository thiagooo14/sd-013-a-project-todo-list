// Botão Criar Tarefa
const lista = document.getElementById('lista-tarefas');
const task = document.getElementById('texto-tarefa');
const newTaskBtn = document.getElementById('criar-tarefa');

newTaskBtn.addEventListener('click', function () {
  const newTask = document.createElement('li');
  newTask.innerText = task.value;
  selectOnClick(newTask);
  completeOnDblClick(newTask);
  lista.appendChild(newTask);
  task.value = '';
});

// Função selecionar
function selectOnClick(element) {
  element.addEventListener('click', function () {
    if (this.classList.contains('selected')) {
      this.classList.remove('selected');
    } else {
      const selectedTask = document.querySelector('.selected');
      if (selectedTask !== null) selectedTask.classList.remove('selected');
      this.classList.add('selected');
    }
  });
}

// Função completar
function completeOnDblClick(element) {
  element.addEventListener('dblclick', function () {
    if (this.classList.contains('completed')) {
      this.classList.remove('completed');
    } else {
      this.classList.add('completed');
    }
  });
}

// Botão Limpar tudo
const clearBtn = document.getElementById('apaga-tudo');

clearBtn.addEventListener('click', function () {
  lista.innerHTML = '';
});

// Botão remover finalizados
const clearCompletedBtn = document.getElementById('remover-finalizados');

clearCompletedBtn.addEventListener('click', function() {
  const completed = document.querySelectorAll('.completed');
  for (let i of completed) {
    i.remove();
  }
})
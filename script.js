window.onload = function () {
  addingTask();
}

// Cria função para criação de tarefas.
function addingTask() {
  let taskText = document.getElementById('texto-tarefa');
  let btnCreate = document.getElementById('criar-tarefa');
  let list = document.getElementById('lista-tarefas');

  btnCreate.addEventListener('click', function () {
    let task = document.createElement('li');
    task.classList.add('task');
    task.innerText = taskText.value
    list.appendChild(task);
    taskText.value = null;
  })
}

// Cria função de remover classes.
function removeClass(element, eClass) {
  element = document.querySelectorAll(element);
  for (let iterator of element) {
    if (iterator.classList.contains(eClass)) {
      iterator.classList.remove(eClass);
    }
  }
}

// Cria função de selecionar tarefas.
function taskSelected() {

  document.addEventListener('click', function (event) {
    let task = event.target;
    if (task.classList.contains('task')) {



      removeClass('li', 'selected');


      if (task.classList.contains('selected')) {
        task.classList.remove('selected');
      } else {
        task.classList.add('selected');
      }
    }
  })
}

taskSelected();
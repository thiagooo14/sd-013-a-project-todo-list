window.onload = function () {
  addingTask();
}

function addingTask() {
  let taskText = document.getElementById('texto-tarefa');
  let btnCreate = document.getElementById('criar-tarefa');
  let list = document.getElementById('lista-tarefas');

  btnCreate.addEventListener('click', function () {
    let task = document.createElement('li');
    task.innerText = taskText.value
    list.appendChild(task);
    taskText.value = null;
  })
}

function () {

  document.addEventListener('click' function () {
    if
})
}
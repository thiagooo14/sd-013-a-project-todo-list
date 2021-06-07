// Pega o botão de adicionar task
const getButton = document.querySelector('#criar-tarefa');
// Pega o botão de limpar lista
const clearButton = document.querySelector('#apaga-tudo');
// Pega o botão de remover finalizados
const completedButton = document.querySelector('#remover-finalizados');
// Pega o input
const inputField = document.querySelector('#texto-tarefa');
// Lista completa de tarefas
const fullList = document.querySelector('#lista-tarefas');
// Array com todas as tarefas
const everyTask = document.getElementsByClassName('task');
// Adiciona as tarefas à lista
function addTask() {
  getButton.addEventListener('click', () => {
    // Cria uma nova li
    const newElement = document.createElement('li');
    // Coloca o valor do campo input numa nova li e adiciona à lista
    newElement.innerHTML = inputField.value;
    newElement.classList.add('task');
    fullList.appendChild(newElement);
    // Zera o campo
    inputField.value = null;
  });
}
addTask();
// Seleciona um elemento
function taskSelected() {
  fullList.addEventListener('click', (event) => {
    for (let i = 0; i < everyTask.length; i += 1) {
      if (everyTask[i].classList.contains('selected')) {
        everyTask[i].classList.remove('selected');
      }
    }
    event.target.classList.add('selected');
  });
}
taskSelected();
// Risca a task realizada
function taskCompleted() {
  fullList.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
}
taskCompleted();
// Limpa todas as tasks
function clearEveryTask() {
  clearButton.addEventListener('click', () => {
    fullList.innerHTML = '';
  });
}
clearEveryTask();
// Limpa as tasks completas
function clearCompleted() {
  completedButton.addEventListener('click', () => {
    const completedTasks = document.getElementsByClassName('completed');
    while (completedTasks.length > 0) {
      completedTasks[0].parentNode.removeChild(completedTasks[0]);
    }
  });
}
clearCompleted();
// Move o item para cima
const upButton = document.querySelector('#mover-cima');
function moveUp () {
  upButton.addEventListener('click', () => {
    let toMove = document.querySelector('.selected');
    if (toMove && toMove.previousElementSibling){
    fullList.insertBefore(toMove, toMove.previousElementSibling);
    }
  });
}
moveUp();
// Move o item para baixo
const downButton = document.querySelector('#mover-baixo');
function moveDown () {
  downButton.addEventListener('click', () => {
    let toMove = document.querySelector('.selected');
    if (toMove && toMove.nextElementSibling){
    fullList.insertBefore(toMove.nextElementSibling, toMove);
    }
  });
}
moveDown();
// Exclui o item selecionado
const deleteButton = document.querySelector('#remover-selecionado');
function deleteSelected () {
  let selected = document.getElementsByClassName('selected');
  deleteButton.addEventListener('click', () => {
    selected[0].parentNode.removeChild(selected[0]);
  })

}
deleteSelected();

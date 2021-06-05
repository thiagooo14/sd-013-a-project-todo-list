// Pega o botão de adicionar task
var getButton = document.querySelector('#criar-tarefa');
// Pega o botão de limpar lista
var clearButton = document.querySelector('#apaga-tudo');
//Pega o botão de remover finalizados
var completedButton = document.querySelector('#remover-finalizados');
// Pega o input
var inputField = document.querySelector('#texto-tarefa');
//Lista completa de tarefas
let fullList = document.querySelector('#lista-tarefas');
//Array com todas as tarefas
let everyTask = document.getElementsByClassName('task');
// Adiciona as tarefas à lista
function addTask (){
  getButton.addEventListener('click', function (){
    //cria uma nova li
    let newElement = document.createElement('li');
     //coloca o valor do campo input numa nova li e adiciona à lista
    newElement.innerHTML = inputField.value;
    newElement.classList.add('task');
    fullList.appendChild(newElement);
    //Zera o campo
    inputField.value = null;
  })
};
addTask();
// Seleciona um elemento
function taskSelected (){
  fullList.addEventListener('click', function (event){
    for (i = 0; i < everyTask.length; i += 1){
      if (everyTask[i].classList.contains('selected')){
        everyTask[i].classList.remove('selected')
      }
    }
    event.target.classList.add('selected');
  })
}
taskSelected();
// Risca a task realizada
function taskCompleted (){
  fullList.addEventListener('dblclick', function (event){
    if (event.target.classList.contains('completed')){
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  })
}
taskCompleted();
// Limpa todas as tasks
function clearEveryTask (){
  clearButton.addEventListener('click', function (){
    fullList.innerHTML = '';
  })
}
clearEveryTask();
// Limpa as tasks completas
function clearCompleted(){
  completedButton.addEventListener('click', function (){
    let completedTasks = document.getElementsByClassName('completed');
    while (completedTasks.length > 0){
      completedTasks[0].parentNode.removeChild(completedTasks[0]);
    }
  })
}
clearCompleted();
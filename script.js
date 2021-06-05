// Pega o botão
var getButton = document.querySelector('#criar-tarefa');
// Pega o input
var inputField = document.querySelector('#texto-tarefa');
//Lista completa de tarefas
let fullList = document.querySelector('#lista-tarefas');
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
  let everyTask = document.getElementsByClassName('task');
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
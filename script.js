// Pega o botão
var getButton = document.querySelector('#criar-tarefa');
// Pega o input
var inputField = document.querySelector('#addTaskButton');
//Lista completa de tarefas
let fullList = document.querySelector('#lista-tarefas');
// Adiciona as tarefas à lista
function addTask (){
  getButton.addEventListener('click', function (){
    //cria uma nova li
    let newElement = document.createElement('li');
     //coloca o valor do campo input numa nova li e adiciona à lista
    newElement.innerText = inputField.value;;
    fullList.appendChild(newElement);
    //Zera o campo
    inputField.value = null;
  })
};
addTask();
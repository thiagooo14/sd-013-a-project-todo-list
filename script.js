//Chama o conteúdo (adicionar o input dentro do content)
// var content = document.querySelector('#content');
// console.log(content);

// Cria o input
var inputField = document.createElement('input');
inputField.id = 'texto-tarefa';
inputField.setAttribute('type', 'text');
document.body.appendChild(inputField);


// Cria o botão
var addButton = document.createElement('button');
addButton.id = 'criar-tarefa';
addButton.innerText = 'Adicionar';
document.body.appendChild(addButton);

// Adiciona as tarefas à lista
function addTask (){
  addButton.addEventListener('click', function (){
    //pega o valor do campo input
    let newTask = inputField.value;
    let newElement = document.createElement('li');
    //coloca o valor do campo input numa nova li e adiciona à lista
    newElement.innerText = newTask;
    let wholeList = document.querySelector('#lista-tarefas');
    wholeList.appendChild(newElement);
    //zera o campo
    inputField.value = '';
  })
};

addTask();
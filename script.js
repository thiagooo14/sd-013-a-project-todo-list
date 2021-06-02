//Chama o conteúdo (adicionar o input dentro do content)
// var content = document.querySelector('#content');
// console.log(content);

// Cria o input
var inputField = document.createElement('input');
inputField.id = 'texto-tarefa';
inputField.setAttribute('type', 'text');
document.body.appendChild(inputField);


// Cria o botão
var addTask = document.createElement('button');
addTask.id = 'criar-tarefa';
addTask.innerText = 'Adicionar';
document.body.appendChild(addTask);
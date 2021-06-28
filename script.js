// Pega o campo input.
const inputField = document.getElementById('texto-tarefa');

// Pega o botão criar tarefa.
const buttonCreateTask = document.getElementById('criar-tarefa');

// Pega a lista de tarefas.
const taskList = document.getElementById('lista-tarefas');

// Cria uma nova tarefa.
function createNewTask() {
  buttonCreateTask.addEventListener('click', () => {
    // Cria uma nova li.
    let newTask = document.createElement('li');
    // Pega o texto do campo input.
    const textInput = inputField.value;
    // Coloca o texto do input dentro da li
    newTask.innerHTML = textInput;
    // Adiciona a nova li como filha da ol
    taskList.appendChild(newTask);
    // Apaga o contúdo do campo input.
    inputField.value = null;
  })
}
createNewTask();

// Ao clicar em um item da lista deve alterar a cor de fundo do item.
function selectedTask() {
  taskList.addEventListener('click', (event) => {
    event.target.classList.add('selected');
  })
}
selectedTask();

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
// Executa a função.
createNewTask();

// Ao clicar em um item da lista, altera a cor de fundo do item.
function selectedTask() {
  // Adiciona um EventListener a constante taskList (ol) que, ao clicar,
  // verificar a existência de li com classe "selected" e, se for o caso, remove
  // então, adiciona uma classe (selected) à li clicada.
  taskList.addEventListener('click', (event) => {
    const allTask = document.querySelectorAll('li');
    for (let index = 0; index < allTask.length; index +=1) {
      if (allTask[index].classList.contains('selected')) {
        allTask[index].classList.remove('selected');
      }
    }
    event.target.classList.add('selected');
  })
}
//Executa a função.
selectedTask();

// Ao clicar duas vezes em um item da lista, faz com que ele seja riscado,
// sendo possível desfazer essa ação clicando novamente duas vezes no item.
function lineThrough() {
  taskList.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else event.target.classList.add('completed');
  })
}
//Executa a função.
lineThrough();

// Pega o campo input.
const inputField = document.getElementById('texto-tarefa');

// Pega o botão criar tarefa.
const buttonCreateTask = document.getElementById('criar-tarefa');

// Pega a lista de tarefas.
const taskList = document.getElementById('lista-tarefas');

// Pega o botão de apagar tudo.
const deleteAllButton = document.getElementById('apaga-tudo');

// Pega o botão de apagar elementos finalizados.
const deleteCompletedButton = document.getElementById('remover-finalizados');

// Pega o botão de apagar elemento selecionado.
const deleteSelectedButton = document.getElementById('remover-selecionado');

// Cria uma nova tarefa.
function createNewTask() {
  buttonCreateTask.addEventListener('click', () => {
    // Cria uma nova li.
    const newTask = document.createElement('li');
    // Pega o texto do campo input.
    const textInput = inputField.value;
    // Coloca o texto do input dentro da li
    newTask.innerHTML = textInput;
    // Adiciona a nova li como filha da ol
    taskList.appendChild(newTask);
    // Apaga o contúdo do campo input.
    inputField.value = null;
  });
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
    for (let index = 0; index < allTask.length; index += 1) {
      if (allTask[index].classList.contains('selected')) {
        allTask[index].classList.remove('selected');
      };
    }
    event.target.classList.add('selected');
  })
}
// Executa a função.
selectedTask();

// Ao clicar duas vezes em um item da lista, faz com que ele seja riscado,
// sendo possível desfazer essa ação clicando novamente duas vezes no item.
function lineThrough() {
  taskList.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else event.target.classList.add('completed');
  });
}
// Executa a função.
lineThrough();

// Adiciona um botão que, ao ser clicado, apaga todos os itens da lista.
function deleteAll() {
  deleteAllButton.addEventListener('click', () => {
    taskList.innerHTML = null;
  })
}
// Excuta a função.
deleteAll();

// Adiciona um botão que, ao ser clicado, apaga somente os elementos finalizados da sua lista.
function deleteCompleted() {
  deleteCompletedButton.addEventListener('click', () => {
    // Trata-se de um array que possui elementos com a classe 'completed'.
    const completedTask = document.getElementsByClassName('completed');
    // o While verifica se existe algum elemento dentro do array.
    while (completedTask.length > 0) {
      // o laço while irá verificar a constante pai do primeiro elemento do array e irá remover o filho desse pai, enquanto existir algum elemento dentro do array.
      completedTask[0].parentNode.removeChild(completedTask[0]);
    }
  })
}
// Excuta a função.
deleteCompleted();

// Adiciona um botão que, ao ser clicado, apaga o item selecionado.
function deleteSelected () {
  deleteSelectedButton.addEventListener('click', () => {
    const selectedElement = document.getElementsByClassName('selected');
    selectedElement[0].parentNode.removeChild(selectedElement[0])
  })
}
// Excuta a função.
deleteSelected();

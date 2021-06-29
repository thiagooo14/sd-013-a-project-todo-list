const text = [];
const inform = document.querySelector('input');
const orderedList = document.getElementById('lista-tarefas');
const createTask = document.getElementById('criar-tarefa');
const markPosition = text.indexOf('tasks');
const removeAll = document.getElementById('apaga-tudo');
const removeCompleted = document.getElementById('remover-finalizados');
const selectItemList = document.querySelectorAll('#lista-tarefas');
const removeSelect = document.getElementById('remover-selecionado');
// Referência: https://www.youtube.com/watch?v=k9MKdl5_2yc&t=1649s
// Cria li (de forma ordenada por conta do html <ol>) e as adicina o id task
function addTask() {
  orderedList.innerHTML = '';

  for (let tasks of text) {
    const listItem = document.createElement('li');
    const taskText = document.createTextNode(tasks);

    listItem.appendChild(taskText);
    orderedList.appendChild(listItem);
    listItem.className = 'task';
    // elemento.classList.add('tasks');
  }
}
addTask();
// Pega os valores do input e após serem inseridos na lista, limpa o que foi digitado e impede que os valores digitados se dupliquem.
function taskTask() {
  const taskText = inform.value;
  text.push(taskText);
  inform.value = '';
  addTask();
}
createTask.addEventListener('click', taskTask);
// Remove toda a lista de tarefas, 'markPosition' contém as posições das tarefas do array, dessa forma o método splice, remove toda a lista criada ao clicar no botão 'apagar tudo'.
function removeList(markPosition) {
  text.splice(markPosition);
  addTask();
}
// setAttribute, permite atribuir ao elemento botão um atributo sem precisar inserir diretamente no html.
// removeAll.setAttribute('onclick', 'removelist()');
removeAll.addEventListener('click', removeList);
// Referência: https://github.com/Luishsk93/Trybe-ToDoList/blob/main/script.js
const selectItem = document.getElementById('lista-tarefas');

function colorSilver(event) {
  const silver = event.target;
  for (let i = 0; i < selectItem.childElementCount; i += 1) {
    selectItem.children[i].style.backgroundColor = 'white';
  }
  silver.style.backgroundColor = 'rgb(128, 128, 128)';
}
selectItem.addEventListener('click', colorSilver);

// Aplica um stilo css: text-decoration: line-through solid rgb(0, 0, 0) ao clicar duas vezes em uma tarefa.
function completeItem(event) {
  const crossOff = event.target;
  crossOff.classList.toggle('completed');
}
for (let i = 0; i < selectItemList.length; i += 1) {
  const itemList = selectItemList[i];
  itemList.addEventListener('dblclick', completeItem);
}

// Remove itens com a classe 'completed', porém ao criar nova tarefa retorna os já removidos.
function removeItemsCompleted() {
  const positions = document.querySelectorAll('.task');

  for (let i = 0; i < positions.length; i += 1) {
    if (positions[i].classList.contains('completed')) {
      positions[i].remove();
    }
  }
}
removeCompleted.addEventListener('click', removeItemsCompleted);

function removeSelecionado() {
  const position = document.querySelectorAll('.task');

  for (let i = 0; i < position.length; i += 1) {
    if (position[i].style.backgroundColor === 'rgb(128, 128, 128)') {
      position[i].remove();
    }
  }
}
removeSelect.addEventListener('click', removeSelecionado);

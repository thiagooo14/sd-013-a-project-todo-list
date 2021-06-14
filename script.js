const text = [];
const inform = document.querySelector('input');
const orderedList = document.getElementById('lista-tarefas');
const createTask = document.getElementById('criar-tarefa');
const removeAll = document.getElementById('apaga-tudo');
// Insere as tarefas de forma ordenada, ao lado da tarefa tem um linl de remover a tarefa.
// Referência: https://www.youtube.com/watch?v=k9MKdl5_2yc&t=1649s
function addTask() {
  orderedList.innerHTML = '';

  for (let task of text) {
    const listItem = document.createElement('li');
    const taskText = document.createTextNode(task);
    const markPosition = text.indexOf(task);

    listItem.appendChild(taskText);
    orderedList.appendChild(listItem);
  }
}
addTask();

// Pega os valores do input e a após serem inseridos na lista, lima o que foi digitado.
function taskTask() {
  const taskText = inform.value;
  text.push(taskText);
  inform.value = '';
  addTask();
}
createTask.addEventListener('click', taskTask);

// remove o item do array no caso remove uma tarefa por meio do link remover tarefa com o método 'splice' e seus parâmetros.
// function removeTask(markPosition) {
//   text.splice(markPosition, 1);
//   addTask();
// }

// Remove toda a lista de tarefas, 'markPosition' contém as tarefas no array, dessa forma o método splice, remove toda a lista criada ao clicar no botão 'apagar tudo'.
function removelist(markPosition) {
  text.splice(markPosition);
  addTask();
}
// setAttribute, permite atribuir ao elemento botão um atributo sem precisar inserir diretamente no html.
// removeAll.setAttribute('onclick', 'removelist()');
removeAll.addEventListener('click', removelist);

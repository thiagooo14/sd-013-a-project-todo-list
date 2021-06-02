

function addTask() {
  let valueInput = document.querySelector("#texto-tarefa");
  let list = document.createElement('li');
  list.innerHTML = valueInput.value
  document.querySelector("#lista-tarefas").appendChild(list)
  valueInput.value = "";
}
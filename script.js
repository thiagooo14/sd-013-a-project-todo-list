window.onload = function () {

}
function getInput() {
  let txtbox = document.getElementById("texto-tarefa").value;
  console.log(txtbox);
  document.getElementById("lista-tarefas").appendChild(document.createElement("li")).textContent = txtbox;
  document.getElementById("texto-tarefa").value = '';

}
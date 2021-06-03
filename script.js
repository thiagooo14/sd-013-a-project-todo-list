window.onload = function () {

}
function getInput() {
  let txtbox = document.getElementById("texto-tarefa").value;
  console.log(txtbox);
  document.getElementById("lista-tarefas").appendChild(document.createElement("li")).textContent = txtbox;
  document.getElementById("texto-tarefa").value = '';
}

function changeBg(event) {
  const liList = document.querySelectorAll('li');
  liList.forEach(e => e.classList.remove('selectLi'));
  event.target.classList.add('selectLi');
}

function line(list) {
  list.target.classList.toggle('completed');
}

function clearList() {
  let liList = document.getElementById("lista-tarefas");
  while(liList.firstChild) liList.removeChild(liList.firstChild);
}

function removeFinished() {
  let list = document.getElementsByClassName("completed");
  while(list.length > 0){
  list[0].parentNode.removeChild(list[0]);
  }
}
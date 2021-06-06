let button = document.querySelector('#criar-tarefa')
button.addEventListener("click",addText);

function addText() {
  let textTarefa = document.getElementById('texto-tarefa').value;
  let lista  = document.getElementById('lista-tarefas').innerHTML;
  lista = lista +"<li>"+textTarefa+"</li>";
  
  
  document.getElementById("lista-tarefas").innerHTML = lista;
  document.getElementById('texto-tarefa').value = ''
}


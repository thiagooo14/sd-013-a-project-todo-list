function addTar(){
  var x = document.getElementById("texto-tarefa").value;
  var b = document.createTextNode(x)
  var li = document.createElement("li")
  li.appendChild(b)

  document.getElementById("lista-tarefas").appendChild(li);
  document.getElementById("texto-tarefa").value = "";
}
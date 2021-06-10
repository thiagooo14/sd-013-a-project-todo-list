function addTar(){
  var x = document.getElementById("texto-tarefa").value;
  var b = document.createTextNode(x)
  var li = document.createElement("li")
  li.appendChild(b)

  document.getElementById("lista-tarefas").appendChild(li);
  document.getElementById("texto-tarefa").value = "";
}

function addSelected (event){
  let x = event.target;
  let element = document.getElementsByTagName("li")

  for (let i = 0; i < element.length; i++){
    element[i].classList.remove('selected')
  }

  x.classList.add('selected')
} 

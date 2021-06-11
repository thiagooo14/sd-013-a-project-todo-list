function addTar(){
  var x = document.getElementById("texto-tarefa").value;
  var b = document.createTextNode(x)
  var li = document.createElement("li")
  li.appendChild(b)

  document.getElementById("lista-tarefas").appendChild(li);
  document.getElementById("texto-tarefa").value = "";
}

function addSelected (event){
  let x = event.target
  let element = document.getElementsByTagName("li")

  for (let i = 0; i < element.length; i++){
    element[i].classList.remove('selected')
  }

  x.classList.add('selected')
} 

function riscaOp (event){
  let x = event.target

  if (x.classList.contains("completed") === true){
    x.classList.remove("completed")
  } else {
    x.classList.add("completed")
  }
}

function clear(){
  let x = document.getElementById("lista-tarefas")

  while (x.hasChildNodes()) {
    x.removeChild(x.firstChild)
  }
}

function clearDone(){
  let x = document.getElementsByClassName("completed");

  while(x.length > 0){
    x[0].parentNode.removeChild(x[0]);
  }
}

document.getElementById("apaga-tudo").addEventListener("click", clear)
document.getElementById("remover-finalizados").addEventListener("click", clearDone)
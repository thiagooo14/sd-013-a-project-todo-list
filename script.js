function addTar(){
  var x = document.getElementById("texto-tarefa").value;
  var b = document.createTextNode(x)
  var li = document.createElement("li")
  li.appendChild(b)

  document.getElementById("lista-tarefas").appendChild(li);
  document.getElementById("texto-tarefa").value = "";
}

/* function applyGray(){
  let y = document.getElementsByTagName("li")
  let pixels = document.querySelector('#lista-tarefa');

  pixels.addEventListener('click', function(event){
    if (y.length > 0){
      let color = y[0].style.backgroundColor;
      event.target.style.backgroundColor = color;
    }
  });
}; */

applyGray()
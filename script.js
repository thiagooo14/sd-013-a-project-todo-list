var main = document.querySelector('main');

inputCreator();
listCreator ();

console.log(main);
function inputCreator(){
  var inputText = document.createElement("INPUT");
  inputText.setAttribute("type", "text");
  inputText.setAttribute("id", "texto-tarefa");
  main.appendChild(inputText);
}

function listCreator() {
  var list = document.createElement("ol");
  list.setAttribute("id", 'lista-tarefas');
  main.appendChild(list);
}





window.onload = function () {
  document.getElementById('texto-tarefa').focus();

  document.getElementById("criar-tarefa").onclick = function cria() {
    console.log("click");
    let text = document.getElementById('texto-tarefa').value;
    let lista = document.getElementById('lista-tarefas');
    let li = document.createElement("li");
    let input = document.createTextNode(text);
    li.appendChild(input)
    lista.appendChild(li)
    document.getElementById('texto-tarefa').value = null;
  
  }
}
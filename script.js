document.getElementById("criar-tarefa").onclick = function cria() {
  console.log("click");
  let text = document.getElementById('text-tarefa').value;
  let lista = document.getElementById('lista-tarefas');
  let li = document.createElement("li");
  let input = document.createTextNode(text);

  li.appendChild(input)
  lista.appendChild(li)

  document.getElementById('text-tarefa').value = null;

}

window.onload = function () {
  document.getElementById('text-tarefa').focus();
  document.addEventListener("keydown", function (cria) {
    if (e.code === "Enter") {
      cria();
    }
  })
}
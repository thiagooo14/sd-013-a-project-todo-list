
const lista = document.querySelector("#lista-tarefas");
const butao = document.querySelector("#criar-tarefa");

function adicionaItem(){

  const inputTexto = document.querySelector("#texto-tarefa");

  let itemLista = document.createElement("li");
      itemLista.innerText = inputTexto.value;
      itemLista.className="lista";
      lista.appendChild(itemLista);
      inputTexto.value ="";

}

butao.addEventListener("click", adicionaItem);
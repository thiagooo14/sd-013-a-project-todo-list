/* Variaveis */
let inputAdd = document.getElementById("texto-tarefa");
let btnAdd = document.getElementById("criar-tarefa");
let listOrd = document.getElementById("lista-tarefas");

/*criando itens apos clicar no botão adicionar*/

btnAdd.addEventListener("click", criarItens)

function criarItens () {
  
  let itens = document.createElement('li');
  listOrd.appendChild(itens);
  itens.innerText=inputAdd.value
  inputAdd.value = ""
}
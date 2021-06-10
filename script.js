let textoX = ""
const ol = document.querySelector("#lista-tarefas")
const button = document.querySelector("#criar-tarefa")
const input = document.querySelector("#texto-tarefa")
const apagarTudo = document.querySelector("#apaga-tudo")
const removeFinalizados = document.querySelector("#remover-finalizados")
const tarefa = document.getElementsByClassName ("tarefa")

function addTarefa () {
  const tarefa = document.createElement("li")
  tarefa.innerHTML = input.value
  tarefa.classList.add("tarefa")
  ol.appendChild(tarefa)
  input.value = textoX
  clicarTarefa()
}
  button.addEventListener("click", addTarefa)

  function clicarTarefa () {

  }
  
  function selecionar () {

  }

function removerFinalizado() {
  let completed = document.getElementsByClassName("completed")
  console.log(completed)
  for(let index = 0; index < completo.length; i++){
    completed[index].remove();
  }
}
  removeFinalizados.addEventListener("click", removerFinalizado)

function apagaTudo () {
  ol.innerHTML = textoX
}
  apagarTudo.addEventListener("click", apagaTudo)

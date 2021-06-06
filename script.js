let textoX = ""
const ol = document.querySelector("#lista-tarefas")
const button = document.querySelector("#criar-tarefa")
const input = document.querySelector("#texto-tarefa")
const apagarTudo = document.querySelector("#apaga-tudo")
const removeFinalizados = document.querySelector("#remover-finalizados")
const tarefa = document.getElementsByClassName ("tarefa")

function addTarefa () {
  const tarefa2 = document.createElement("li")
  tarefa2.innerHTML = input.value
  tarefa2.classList.add("tarefa2")
  ol.appendChild(tarefa2)
  input.value = textoX
  clicarTarefa()
}

function selecionarTarefa(event) {
  event.target.classList.add("selecionada")
}

function tarefaCompleta(event) {
  event.target.classList.toggle("completa")
}

function clicarTarefa() {
  for(let index = 0; index < tarefa.lenght; index++) {
    tarefa[index].addEventListener("click", selecionarTarefa)
    tarefa[index].addEventListener("dblclick", tarefaCompleta)
  }
}

function removerFinalizado() {
  let completo = document.getElementsByClassName("completo")
  console.log(completo)
  for(let index = 0; index < completo.length; i++){
    completo[index].remove();
  }
}

function apagaTudo () {
  ol.innerHTML = textoX
}

button.addEventListener ('click', criaTarefa)
removeFinalizados.addEventListener('click', removerFinalizados)
apagarTudo.addEventListener('click', apagaTudo)
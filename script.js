const ol = document.querySelector('#lista-tarefas')
const botao = document.querySelector('#criar-tarefa')
const input = document.querySelector('#texto-tarefa')
const tarefas = document.getElementsByClassName('tarefa')
const deleteAll = document.querySelector('#apaga-tudo')
const deleteComplete = document.querySelector('#remover-finalizados')

clicarTarefa()
var textoNulo = ""

botao.addEventListener('click', adicionarTarefa)
deleteAll.addEventListener('click', apagarTudo)
deleteComplete.addEventListener('click', apagarFinalizado)

function apagarTudo () {
  ol.innerHTML = textoNulo
}

function apagarFinalizado() {
  var completed = document.getElementsByClassName('completed')
  console.log(completed)
  for (var i = 0; i < completed.length; i++){
    completed[i].remove();
  }
}

function adicionarTarefa() {
  const tarefa = document.createElement('li')
  tarefa.innerHTML = input.value
  tarefa.classList.add('tarefa')
  ol.appendChild(tarefa)
  input.value = textoNulo
  clicarTarefa()
}


function clicarTarefa() {
  for (var i = 0; i < tarefas.length; i++) {
    tarefas[i].addEventListener('click', selecionarItem)
    tarefas[i].addEventListener('dblclick', tarefaCompleta)
  }
}

function apagarClasses(){
  for (var i = 0; i < tarefas.length; i++) {
    tarefas[i].classList.remove('selected')
  }
}

function selecionarItem(event) {
  apagarClasses()
  event.target.classList.add('selected')
}

function tarefaCompleta(event) {
  event.target.classList.toggle('completed')
}






//

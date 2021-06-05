const ol = document.querySelector('#lista-tarefas')
const botao = document.querySelector('#criar-tarefa')
const input = document.querySelector('#texto-tarefa')
const tarefas = document.getElementsByClassName('tarefa')

clicarTarefa()
var textoNulo = ""

botao.addEventListener('click', adicionarTarefa)


function adicionarTarefa() {
  const tarefa = document.createElement('li')
  tarefa.innerHTML = input.value
  tarefa.classList.add('tarefa')
  ol.appendChild(tarefa)
  input.value = textoNulo
  clicarTarefa()
}


function clicarTarefa() {
  console.log(tarefas)
  for (var i = 0; i < tarefas.length; i++) {
    tarefas[i].addEventListener('click', selecionarItem)
    tarefas[i].addEventListener('dbclick', tarefaCompleta)
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

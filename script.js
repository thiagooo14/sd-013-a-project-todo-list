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
  }
}

function selecionarItem(event) {
  event.target.style.backgroundColor = 'rgb(128,128,128)'
}

function tarefaCompleta() {

}






//

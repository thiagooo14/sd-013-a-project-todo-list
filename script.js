const ol = document.querySelector('#lista-tarefas')
const botao = document.querySelector('#criar-tarefa')
const input = document.querySelector('#texto-tarefa')

var textoNulo = ""

botao.addEventListener('click', adicionarTarefa)

function adicionarTarefa () {
  const li = document.createElement('li')
  li.innerHTML = input.value
  li.classList.add('tarefa')
  li.addEventListener('click', selecionarTarefa)
  li.addEventListener('dbclick', tarefaCompleta)
  ol.appendChild(li)
  input.value = textoNulo
}

function selecionarTarefa () {

}

function tarefaCompleta () {

}






//


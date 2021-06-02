const ul = document.querySelector('#lista-tarefas')
const botao = document.querySelector('#criar-tarefa')
const input = document.querySelector('#texto-tarefa')
const li = document.createElement('li')

var textoNulo = "";

botao.addEventListener('click', adicionarTarefa)

function adicionarTarefa () {
  li.innerHTML = input.value
  ul.appendChild(li)
  input.value = textoNulo
}








//


const ul = document.querySelector('#lista-tarefas')
const botao = document.querySelector('#criar-tarefa')
const input = document.querySelector('#texto-tarefa')

var textoNulo = ""
var tarefas = [];
console.log(tarefas)

botao.addEventListener('click', adicionarTarefa)

function adicionarTarefa () {
  let nomeTarefa = input.value
  tarefas.push(nomeTarefa)
  for (let i = 0; i < tarefas.length; i++) {
    let li = document.createElement('li')
    li.innerHTML = tarefas[i]
    ul.appendChild(li)
  }
}








//


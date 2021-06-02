const listaTarefas = document.querySelector('#lista-tarefas');
const input = document.querySelector('#texto-tarefa');
const botaoAdicionar = document.querySelector('#criar-tarefa');


function criarTarefa() {

  const li = document.createElement('li');
  li.innerText = input.value;
  li.className = 'tarefa'
  input.value = null;
  li.addEventListener('click',trocaCorTarefa);
  listaTarefas.appendChild(li);

}
function trocaCorTarefa(event) {
  event.target.style.backgroundColor = 'rgb(128,128,128)';
  console.log(listaTarefas);
}

botaoAdicionar.addEventListener('click', criarTarefa);

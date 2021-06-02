const lista = document.querySelector('#lista-tarefas');
const botaoCriarTarefa = document.querySelector('#criar-tarefa');
const inputTarefa = document.querySelector('#texto-tarefa');

function adicionaTarefa() {
  botaoCriarTarefa.addEventListener('click', function(){
    const item = document.createElement('li');
    item.className = 'item';
    lista.appendChild(item).innerText = inputTarefa.value;
    inputTarefa.value = '';
  });
}
adicionaTarefa();
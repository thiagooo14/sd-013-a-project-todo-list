const lista = document.querySelector('#lista-tarefas');
const botaoCriarTarefa = document.querySelector('#criar-tarefa');
const inputTarefa = document.querySelector('#texto-tarefa');

function adicionaTarefa() {
  botaoCriarTarefa.addEventListener('click', function() {
    const item = document.createElement('li');
    item.className = 'item';
    lista.appendChild(item).innerText = inputTarefa.value;
    inputTarefa.value = '';
  });
}
adicionaTarefa();

function selecionarTarefa() {
  lista.addEventListener('click', function(event) {
    for (let i = 0; i < lista.children.length; i += 1) {
      lista.children[i].classList.remove('selected');
    }
    event.target.classList.add('selected');
    lista.classList.remove('selected');
  });
}
selecionarTarefa();

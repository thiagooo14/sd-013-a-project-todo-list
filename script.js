const lista = document.querySelector('#lista-tarefas');
const botaoCriarTarefa = document.querySelector('#criar-tarefa');
const inputTarefa = document.querySelector('#texto-tarefa');

function adicionaTarega() {
  botaoCriarTarefa.addEventListener('click', function () {
    const item = document.createElement('li');
    item.className = 'item';
    lista.appendChild(item).innerText = inputTarefa.Value;
    inputTarefa.value = '';
  });
}

adicionaTarega();

function selecionarTarefa() {
  const tarefaTodas = document.querySelectorAll('.item');
  for (let i in tarefaTodas) {
    tarefaTodas[i].addEventListener('click', function(event) {
      event.target.style.backgroundColor = 'rgb(155, 163, 111)';
    })
  }
}
const btnCriarTarefa = document.querySelector('#criar-tarefa');
const inputCriarTarefa = document.querySelector('#texto-tarefa');
const olTarefa = document.querySelector('#lista-tarefas');

btnCriarTarefa.addEventListener('click', function() {
  let liTarefa = document.createElement('li');
  olTarefa.appendChild(liTarefa);

  liTarefa.innerHTML = inputCriarTarefa.value;
  inputCriarTarefa.value = '';
});

olTarefa.addEventListener('click', function(event) {
  const liIrmaos = olTarefa.childNodes;

  for (const i of liIrmaos) {
    i.classList.remove('select');
  }

  event.target.classList.add('select');
});

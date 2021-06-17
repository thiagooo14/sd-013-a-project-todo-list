let btnCriarTarefa = document.querySelector('#criar-tarefa');
let inputCriarTarefa = document.querySelector('#texto-tarefa');
let olTarefa = document.querySelector('#lista-tarefas')

btnCriarTarefa.addEventListener('click', function() {
  let liTarefa = document.createElement('li');
  olTarefa.appendChild(liTarefa);

  liTarefa.innerHTML = inputCriarTarefa.value;
  inputCriarTarefa.value = '';
})

olTarefa.addEventListener('click', function(event) {
  let liIrmaos = olTarefa.childNodes;

  for (let i of liIrmaos) {
    i.classList.remove('select');
  }

  event.target.classList.add('select');
})
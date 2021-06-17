const btnCriarTarefa = document.querySelector('#criar-tarefa');
const inputCriarTarefa = document.querySelector('#texto-tarefa');
const olTarefa = document.querySelector('#lista-tarefas');
const btnApagarTudo = document.querySelector('#apaga-tudo');
const btnRemoverFinalizados = document.querySelector('#remover-finalizados');

btnCriarTarefa.addEventListener('click', function() {
  let liTarefa = document.createElement('li');
  olTarefa.appendChild(liTarefa);
  liTarefa.classList.add('li-style')

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

olTarefa.addEventListener('dblclick', function(event) {
    event.target.classList.toggle('completed');
});

btnApagarTudo.addEventListener('click', function(){
  olTarefa.innerHTML = '';
});

btnRemoverFinalizados.addEventListener('click', function(){
  const liIrmaos = document.querySelectorAll('.li-style');
  
  for (const i of liIrmaos) {
    if (i.classList.contains('completed') === true) {
        i.remove()
    }
  }  
});
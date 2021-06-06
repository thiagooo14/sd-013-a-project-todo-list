const inicia = () => {
  document.querySelector('#criar-tarefa').addEventListener('click', function() {
    const listaTarefas = document.querySelector('#lista-tarefas');
    const textoTarefa = document.querySelector('#texto-tarefa');
    const li = document.createElement('li');    
    console.log(listaTarefas);
    console.log(textoTarefa);
    li.textContent = textoTarefa.value;
    listaTarefas.appendChild(li);
    textoTarefa.value = '';
    textoTarefa.focus();
  });
};



window.addEventListener('load', inicia);

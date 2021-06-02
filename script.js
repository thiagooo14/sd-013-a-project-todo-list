window.onload = function() {

  function criarTarefa() {
    let inputTarefa = document.querySelector('#texto-tarefa');
    let btnCriarTarefa = document.querySelector('#criar-tarefa');
    let listaDeTarefas = document.querySelector('#lista-tarefas');
    
    btnCriarTarefa.addEventListener('click', ()=> {
      let tarefa = inputTarefa.value;
      let itemLista = document.createElement('li');
      itemLista.innerHTML = tarefa;
      listaDeTarefas.appendChild(itemLista);
      inputTarefa.value = "";
    });
    
  }
  criarTarefa();

















}
window.onload = function() {

  function criarTarefa() {
    let inputTarefa = document.querySelector('#texto-tarefa');
    let btnCriarTarefa = document.querySelector('#criar-tarefa');
    let listaDeTarefas = document.querySelector('#lista-tarefas');
    
    btnCriarTarefa.addEventListener('click', ()=> {
      let tarefa = inputTarefa.value;
      let itemLista = document.createElement('li');
      itemLista.classList.add('item-da-lista');
      itemLista.innerHTML = tarefa;
      listaDeTarefas.appendChild(itemLista);
      inputTarefa.value = "";
    }); 
  }
  criarTarefa();

  function selecionarTarefa() {
    let listaDeTarefas = document.querySelector('#lista-tarefas');

    listaDeTarefas.addEventListener('click', (event)=> {

      if(event.target.classList.contains('item-da-lista')) {
        let itensDaLista = document.querySelectorAll('#lista-tarefas .item-da-lista');
        for (let i = 0; i < itensDaLista.length; i += 1) {
          itensDaLista[i].classList.remove('selected');
        }
        event.target.classList.add('selected');
      }
    });
  }
  selecionarTarefa();

  function riscarTarefa() {
    let listaDeTarefas = document.querySelector('#lista-tarefas');

    listaDeTarefas.addEventListener('dblclick', (event)=> {

      if(event.target.classList.contains('item-da-lista')) {
        console.log(event.target);
        event.target.classList.toggle('completed');
        
        // event.target.classList.toggle('completed');

        // if(event.target.classList.contains('riscado')) {
        //   event.target.classList.remove('riscado');
        // } else if () {
        //   event.target.classList.add('riscado');
        // }
          
        // }
      }
    });
  }
  riscarTarefa();















}
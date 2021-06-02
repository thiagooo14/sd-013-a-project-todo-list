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
        event.target.classList.toggle('completed');
      }
    });
  }
  riscarTarefa();

  function limparLista() {
    let btnLimparLista = document.querySelector('#apaga-tudo');
    let listaDeTarefas = document.querySelector('#lista-tarefas');

    btnLimparLista.addEventListener('click', () => {
      listaDeTarefas.innerHTML = "";
    });
  }
  limparLista();


  function removerFinalizados() {
    let btnRemoverFinalizados = document.querySelector('#remover-finalizados');
    btnRemoverFinalizados.addEventListener('click', ()=> {
      let tarefasFinalizadas = document.querySelectorAll('#lista-tarefas .completed');
      console.log(tarefasFinalizadas);
      for (let i = 0; i < tarefasFinalizadas.length; i += 1) {
        let parent = tarefasFinalizadas[i].parentElement;
        parent.removeChild(tarefasFinalizadas[i]);
      }
    })
  }
  removerFinalizados();








}
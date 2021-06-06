window.onload = function () {
  const listaDeTarefas = document.querySelector('#lista-tarefas');
  const itemDaLista = 'item-da-lista';

  function criarTarefa() {
    const inputTarefa = document.querySelector('#texto-tarefa');
    const btnCriarTarefa = document.querySelector('#criar-tarefa');
    // const listaDeTarefas = document.querySelector('#lista-tarefas');
    btnCriarTarefa.addEventListener('click', () => {
      const tarefa = inputTarefa.value;
      const itemLista = document.createElement('li');
      // itemLista.classList.add('item-da-lista');
      itemLista.classList.add(itemDaLista);
      itemLista.innerHTML = tarefa;
      listaDeTarefas.appendChild(itemLista);
      inputTarefa.value = '';
    });
  }
  criarTarefa();

  function selecionarTarefa() {
    // let listaDeTarefas = document.querySelector('#lista-tarefas');

    listaDeTarefas.addEventListener('click', (event) => {
      if (event.target.classList.contains(itemDaLista)) {
        // let itensDaLista = document.querySelectorAll('#lista-tarefas .item-da-lista');
        const itensDaLista = listaDeTarefas.querySelectorAll('.item-da-lista');
        for (let i = 0; i < itensDaLista.length; i += 1) {
          itensDaLista[i].classList.remove('selected');
        }
        event.target.classList.add('selected');
      }
    });
  }
  selecionarTarefa();

  function riscarTarefa() {
    // let listaDeTarefas = document.querySelector('#lista-tarefas');

    listaDeTarefas.addEventListener('dblclick', (event) => {
      if (event.target.classList.contains(itemDaLista)) {
        event.target.classList.toggle('completed');
      }
    });
  }
  riscarTarefa();

  function limparLista() {
    const btnLimparLista = document.querySelector('#apaga-tudo');
    // let listaDeTarefas = document.querySelector('#lista-tarefas');

    btnLimparLista.addEventListener('click', () => {
      listaDeTarefas.innerHTML = '';
    });
  }
  limparLista();

  function removerFinalizados() {
    const btnRemoverFinalizados = document.querySelector('#remover-finalizados');
    btnRemoverFinalizados.addEventListener('click', () => {
      const tarefasFinalizadas = document.querySelectorAll('#lista-tarefas .completed');
      console.log(tarefasFinalizadas);
      for (let i = 0; i < tarefasFinalizadas.length; i += 1) {
        const parent = tarefasFinalizadas[i].parentElement;
        parent.removeChild(tarefasFinalizadas[i]);
      }
    });
  }
  removerFinalizados();

  function salvarTarefas() {
    const btnSalvarTarfeas = document.querySelector('#salvar-tarefas');
    btnSalvarTarfeas.addEventListener('click', () => {
      // let lista = document.querySelector('#lista-tarefas').innerHTML;
      const lista = listaDeTarefas.innerHTML;
      localStorage.setItem('todoList', '');
      localStorage.setItem('todoList', JSON.stringify(lista));
    });
  }
  salvarTarefas();

  function recuperarLista() {
    const lista = JSON.parse(localStorage.getItem('todoList'));
    if (lista) {
      // let listaDeTarefas = document.querySelector('#lista-tarefas');
      listaDeTarefas.innerHTML = lista;
    }
  }
  recuperarLista();

  function moverParaCima() {
    const btnMover = document.querySelector('#mover-cima');
    // let listaDeTarefas = document.querySelector('#lista-tarefas');

    btnMover.addEventListener('click', () => {
      // let selected = document.querySelector('#lista-tarefas .selected');
      const selected = listaDeTarefas.querySelector('.selected');
      if (!selected) return;
      const irmaoAnterior = selected.previousElementSibling;
      if (irmaoAnterior) {
        listaDeTarefas.insertBefore(selected, irmaoAnterior);
      }
    });
  }
  moverParaCima();

  function moverParaBaixo() {
    const btnMover = document.querySelector('#mover-baixo');
    // let listaDeTarefas = document.querySelector('#lista-tarefas');

    btnMover.addEventListener('click', () => {
      const selected = document.querySelector('#lista-tarefas .selected');
      if (!selected) return;
      const irmaoPosterior = selected.nextElementSibling;
      if (irmaoPosterior) {
        listaDeTarefas.insertBefore(irmaoPosterior, selected);
      }
    });
  }
  moverParaBaixo();

  function removerSelecionado() {
    const btnRemoverSelecionado = document.querySelector('#remover-selecionado');
    // let listaTarefas = document.querySelector('#lista-tarefas');
    btnRemoverSelecionado.addEventListener('click', () => {
      const selecionado = document.querySelector('.selected');
      listaDeTarefas.removeChild(selecionado);
    });
  }
  removerSelecionado();
};

function tarefas() {
    const getTarefas = document.getElementById('lista-tarefas');
    const getTarefaElement = document.getElementById('texto-tarefa');
    const getNovoValor = getTarefaElement.value;
    const novaTarefa = document.createElement('li');
    novaTarefa.innerHTML = getNovoValor;
    novaTarefa.classList.add('tarefa');
    getTarefas.appendChild(novaTarefa);
    const limparInput = '';
    getTarefaElement.value = limparInput;
  }
  
  document.addEventListener('click', (event) => {
    if (event.target.id === 'criar-tarefa') {
      tarefas();
    }
  });
  
  const list = document.querySelector('#lista-tarefas');
  
  function grayColor() {
    const tarefaSelected = document.querySelectorAll('.tarefa');
    for (let index = 0; index < tarefaSelected.length; index += 1) {
      if (tarefaSelected[index].classList.contains('selected')) {
        tarefaSelected[index].style.backgroundColor = 'rgb(128, 128, 128)';
      } else {
        tarefaSelected[index].style.backgroundColor = 'white';
      }
    }
  }
  
  function selectTarefa() {
    list.addEventListener('click', (event) => {
      const tarefaSelected = document.querySelector('.selected');
      if (tarefaSelected !== null) {
        tarefaSelected.classList.remove('selected');
      }
      event.target.classList.add('selected');
      grayColor();
    });
  }
  
  selectTarefa();
  // https://www.w3schools.com/jsref/prop_style_textdecoration.asp
  function riscadoStyle() {
    const tarefaRiscada = document.querySelectorAll('.tarefa');
    for (let index = 0; index < tarefaRiscada.length; index += 1) {
      if (tarefaRiscada[index].classList.contains('completed')) {
        tarefaRiscada[index].style.textDecoration = 'line-through solid black';
      } else {
        tarefaRiscada[index].style.textDecoration = '';
      }
    }
  }
  
  riscadoStyle();
  
  function riscarTarefa() {
    list.addEventListener('dblclick', (event) => {
      event.target.classList.toggle('completed');
      riscadoStyle();
    });
  }
  
  riscarTarefa();
  
  const limparButton = document.querySelector('#apaga-tudo');
  
  function limparTarefa() {
    limparButton.addEventListener('click', () => {
      const tarefasNaLista = document.querySelector('#lista-tarefas');
      while (tarefasNaLista.hasChildNodes()) {
        tarefasNaLista.removeChild(tarefasNaLista.firstChild);
      }
    });
  }
  
  limparTarefa();
  
  const removerButton = document.querySelector('#remover-finalizados');
  
  removerButton.addEventListener('click', () => {
    const listFinished = document.querySelectorAll('.completed');
  
    for (let index = 0; index < listFinished.length; index += 1) {
      listFinished[index].parentNode.removeChild(listFinished[index]);
    }
  });


    const lista = document.querySelector('#lista-tarefas');
    const txt = document.querySelector('#texto-tarefa');
    const botao = document.querySelector('#criar-tarefa');

  function criar() {
    if (txt.value === '') {
      return null;
    }
    const criarLi = document.createElement('li');
    criarLi.innerHTML = txt.value;
    criarLi.classList.add('item');
    lista.appendChild(criarLi);
    txt.value = '';
  }

  botao.addEventListener('click', criar);


  function selecionar(value) {
    const itemSelected = document.querySelector('.selected');
    if (value.target.className === 'item') {
      value.target.classList.add('selected');
      if (itemSelected !== null) {
        itemSelected.classList.remove('selected');
      }
    }
  }

  lista.addEventListener('click', selecionar);
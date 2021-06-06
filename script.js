let selecionado;

function textFunc(inputSub) {
  const main = document.querySelector('.inputButtons');

  main.appendChild(inputSub);

  inputSub.addEventListener('click', () => {
    const li = document.createElement('li');
    const criarTarefa = document.getElementById('lista-tarefas');
    const textoTarefa = document.getElementById('texto-tarefa');
    if (textoTarefa.value === '') {
      return alert('Erro: Texto Vazio!');
    }
    const texto = document.createTextNode(textoTarefa.value);
    li.className = 'listado';
    li.appendChild(texto);
    criarTarefa.appendChild(li);

    textoTarefa.value = '';
  });
}

function inputCreator() {
  const main = document.querySelector('.inputButtons');

  // Cria o botão input Text abaixo
  const inputText = document.createElement('input');
  inputText.setAttribute('type', 'text');
  inputText.setAttribute('id', 'texto-tarefa');
  main.appendChild(inputText);
  // Cria o botão Adicionar embaixo
  const inputSub = document.createElement('button');
  inputSub.setAttribute('id', 'criar-tarefa');
  inputSub.innerText = 'ADICIONAR';
  textFunc(inputSub);
}

// Cria a OL onde vai receber a lista das tarefas
function listOlCreator() {
  const main = document.querySelector('.listas');

  const listOl = document.createElement('ol');
  listOl.setAttribute('id', 'lista-tarefas');
  main.appendChild(listOl);
}

// ===========================

// ==============================

function clickTarefas(clack) {
  if (clack.target.classList.contains('listado')) {
    if (selecionado === clack.target) return;

    if (selecionado) selecionado.classList.remove('selected');

    clack.target.classList.add('selected');

    selecionado = clack.target;
  }
}

function completed(lista) {
  const completado = document.querySelector('.completed');

  if (lista.target.classList.contains('listado') && lista.target !== completado) {
    lista.target.classList.add('completed');
  } else if (lista.target.classList.contains('completed')) {
    lista.target.classList.remove('completed');
  }
}

function apagar() {
  document.getElementById('apaga-tudo').addEventListener('click', () => {
  // source: https://www.codegrepper.com/code-examples/javascript/how+to+delete+all+elements+with+a+class+name
    const listed = document.getElementsByClassName('listado');
    while (listed.length > 0) {
      listed[0].parentNode.removeChild(listed[0]);
    }
    return alert('Lista de tarefas deletada com sucesso! (:');
  });
  document.getElementById('remover-finalizados').addEventListener('click', () => {
    const complete = document.getElementsByClassName('completed');
    while (complete.length > 0) {
      complete[0].parentNode.removeChild(complete[0]);
    }
    return alert('Tarefa completada deletada com sucesso! (:');
  });
}

function salvar() {
  // source https://gomakethings.com/saving-html-to-localstorage-with-vanilla-js/
  const salvarButton = document.querySelector('#salvar-tarefas');
  const verificarOl = document.querySelector('#lista-tarefas');

  salvarButton.addEventListener('click', () => {
    localStorage.setItem('verificarOl', verificarOl.innerHTML);
    return alert('Lista Salva com Sucesso');
  });
  const saved = localStorage.getItem('verificarOl');

  if (saved) {
    verificarOl.innerHTML = saved;
  }
}

function seletados() {
  const deletarSeletado = document.querySelector('#remover-selecionado');

  deletarSeletado.addEventListener('click', () => {
    const selected = document.getElementsByClassName('selected');
    selected[0].parentNode.removeChild(selected[0]);
  });
}

function buttonsLi() {
  const listButtons = document.getElementById('buttonsList');

  const idText = ['remover-selecionado', 'mover-cima', 'mover-baixo ', 'remover-finalizados',
    'apaga-tudo', 'salvar-tarefas'];
  const innerText = ['X', '⬆', '⬇', 'Limpar Completos', 'Limpar Lista', 'Salvar'];

  for (let index = 0; index < idText.length; index += 1) {
    const idIndex = idText[index];
    const identificador = document.createElement('button');
    identificador.id = idIndex;
    identificador.innerText = innerText[index];
    listButtons.appendChild(identificador);
  }
}

function createDivButtons() {
  const divButtons = document.querySelector('.buttonsFooter');
  const buttonsDiv = document.createElement('div');
  buttonsDiv.id = ('buttonsList');
  divButtons.appendChild(buttonsDiv);
  buttonsLi();
  apagar();
  salvar();
  seletados();
}

window.onload = () => {
  inputCreator();
  listOlCreator();
  createDivButtons();

  document.addEventListener('dblclick', completed);
  document.addEventListener('click', clickTarefas);
};

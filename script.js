function textFunc(inputSub) {
  const main = document.querySelector('.inputButtons');

  main.appendChild(inputSub);

  inputSub.addEventListener('click', () => {
    const li = document.createElement('li');
    const criarTarefa = document.getElementById('lista-tarefas');
    const textoTarefa = ('texto-tarefa');
    const texto = document.createTextNode(document.getElementById(textoTarefa).value);
    li.className = 'listado';
    li.appendChild(texto);

    criarTarefa.appendChild(li);

    document.getElementById(textoTarefa).value = '';
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
  return textFunc(inputSub);
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
  const selecionado = document.querySelector('.selecionado');

  if (clack.target.classList.contains('listado') && clack.target !== selecionado) {
    selecionado.classList.remove('selecionado');
    clack.target.classList.add('selecionado');
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
  });
}

function buttonsLi() {
  const listButtons = document.getElementById('buttonsList');
  const apaga = document.createElement('button');
  apaga.id = ('apaga-tudo');
  apaga.innerHTML = 'APAGAR TUDO';
  listButtons.appendChild(apaga);
}

function createDivButtons() {
  const divButtons = document.querySelector('.buttonsFooter');
  const buttonsDiv = document.createElement('div');
  buttonsDiv.id = ('buttonsList');
  divButtons.appendChild(buttonsDiv);
  buttonsLi();
  apagar();
}

window.onload = () => {
  inputCreator();
  listOlCreator();
  createDivButtons();

  document.addEventListener('dblclick', completed);
  document.addEventListener('click', clickTarefas);
};

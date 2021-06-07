let selecionado;

// função que recebe o input com o valor digitado, cria uma lista em seguida
function add() {
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
}
//                      << ================== - - - ================== >>

// Vai criar o botão para executar o input seja com enter ou clicando no botão
function textFunc(inputSub, text) {
  const main = document.querySelector('.inputButtons');
  main.appendChild(inputSub);
  const textoTarefa = document.getElementById(text);

  inputSub.addEventListener('click', add);
  textoTarefa.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      add();
    }
  });
}
//                      << ================== - - - ================== >>

// Cria os elementos html do input e o botão dinamicamente
function inputCreator(text) {
  const main = document.querySelector('.inputButtons');

  // Cria o botão input Text abaixo
  const inputText = document.createElement('input');
  inputText.setAttribute('type', 'text');
  inputText.id = text;
  main.appendChild(inputText);
  // Cria o botão Adicionar embaixo
  const inputSub = document.createElement('button');
  inputSub.setAttribute('id', 'criar-tarefa');
  inputSub.innerText = 'ADICIONAR';
  textFunc(inputSub, text);
}
//                      << ================== - - - ================== >>

// Cria a OL onde vai receber a lista das tarefas
function listOlCreator() {
  const main = document.querySelector('.listas');

  const listOl = document.createElement('ol');
  listOl.setAttribute('id', 'lista-tarefas');
  main.appendChild(listOl);
}
//                      << ================== - - - ================== >>

// Cria uma div dinamicamente onde vai ficar os botões embaixo das tarefas listadas.
function createDivButtons() {
  const divButtons = document.querySelector('.buttonsFooter');
  const buttonsDiv = document.createElement('div');
  buttonsDiv.id = ('buttonsList');
  divButtons.appendChild(buttonsDiv);
}
//                      << ================== - - - ================== >>

// Cria os botões na div com os ids e textos dentro do array usando um loop.
// Motivo de eu ter feito isso é por conta do lint mandando refatorar.
function buttonsLi() {
  const listButtons = document.getElementById('buttonsList');

  const idText = ['remover-selecionado', 'mover-cima', 'mover-baixo', 'remover-finalizados',
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
//                      << ================== - - - ================== >>

// Salva a lista atual no localstorage para que o usuário não perca ao dar F5
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
//                      << ================== - - - ================== >>

// Apaga todas as tarefas de uma vez só
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
//                      << ================== - - - ================== >>

// Apaga apenas a tarefa selecionada
function seletados() {
  const deletarSeletado = document.querySelector('#remover-selecionado');
  const selected = document.getElementsByClassName('selected');
  deletarSeletado.addEventListener('click', () => {
    selected[0].parentNode.removeChild(selected[0]);
  });
}
//                      << ================== - - - ================== >>

// Move para cima a tarefa selecionada
// source https://stackoverflow.com/questions/34913953/move-an-element-one-place-up-or-down-in-the-dom-tree-with-javascript
function moverCima() {
  const upMove = document.querySelector('#mover-cima');

  upMove.addEventListener('click', () => {
    const selected = document.getElementsByClassName('selected');
    if (selecionado && selected[0].previousElementSibling) {
      selected[0].parentNode.insertBefore(selected[0], selected[0].previousElementSibling);
    }
  });
}

// Move para baixo a tarefa selecionada
function moverBaixo() {
  const downMove = document.querySelector('#mover-baixo');

  downMove.addEventListener('click', () => {
    const selected = document.getElementsByClassName('selected');
    if (selecionado && selected[0].nextElementSibling) {
      selected[0].parentNode.insertBefore(selected[0].nextElementSibling, selected[0]);
    }
  });
}
//                      << ================== - - - ================== >>

// Apaga apenas a tarefa selecionada.
function completed(lista) {
  const completado = document.querySelector('.completed');

  if (lista.target.classList.contains('listado') && lista.target !== completado) {
    lista.target.classList.add('completed');
  } else if (lista.target.classList.contains('completed')) {
    lista.target.classList.remove('completed');
  }
}
//                      << ================== - - - ================== >>

// Ao clicar na tarefa, ele verifica se é uma tarefa selecionada ou não
function clickTarefas(clack) {
  if (clack.target.classList.contains('listado')) {
    if (selecionado === clack.target) return;

    if (selecionado) selecionado.classList.remove('selected');

    clack.target.classList.add('selected');

    selecionado = clack.target;
  }
}
//                      << ================== - - - ================== >>

window.onload = () => {
  const text = 'texto-tarefa';
  inputCreator(text);
  listOlCreator();
  createDivButtons();
  buttonsLi();
  apagar();
  salvar();
  seletados();
  moverCima();
  moverBaixo();

  document.addEventListener('dblclick', completed);
  document.addEventListener('click', clickTarefas);
};

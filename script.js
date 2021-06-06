const recuperaOl = document.querySelector('#lista-tarefas');
const btnCriarTarefa = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');

// ======================================================================================
// Função que adiciona o texto do input à lista Ol ao clicar no botão 'adiconar tarefa':
// =====================================================================================

function criaTarefas() {
  btnCriarTarefa.addEventListener('click', () => {
    const inputTexto = document.querySelector('#texto-tarefa').value;
    const criaTarefa = document.createElement('li');
    criaTarefa.innerText = inputTexto;
    criaTarefa.classList.add('tarefa');
    recuperaOl.appendChild(criaTarefa);
    input.value = '';
  });
}
criaTarefas();

// ======================================================================================
// Função que adiciona classe 'selected' para o backgroundColor cinza (via css)
// ======================================================================================

const recuperaTarefas = document.getElementsByClassName('tarefa');

function selecionaCor(event) {
  for (let index = 0; index < recuperaTarefas.length; index += 1) {
    if (recuperaTarefas[index].classList.contains('selected')) {
      recuperaTarefas[index].classList.remove('selected');
    }
  }
  event.target.classList.add('selected');
}
recuperaOl.addEventListener('click', selecionaCor);

// ======================================================================================
// Função que adiciona classe 'scratched', risca tarefa completa e faz o inverso
// ======================================================================================

function riscado(event) {
  const elementoClicado = event.target;
  elementoClicado.classList.toggle('completed');
}
recuperaOl.addEventListener('dblclick', riscado);

// ======================================================================================
//     Função de apagar todos os itens da lista ao clicar no botão 'apaga tudo'
// ======================================================================================

const recuperaBotaoApagar = document.querySelector('#apaga-tudo');

function apagaTudo() {
  const recuperaTarefasNode = document.querySelectorAll('.tarefa');
  for (let index = 0; index < recuperaTarefasNode.length; index += 1) {
    recuperaTarefasNode[index].remove();
  }
}
recuperaBotaoApagar.addEventListener('click', apagaTudo);

// ======================================================================================
//     Função de apagar todos os itens da lista marcados como concluídos
// ======================================================================================

const recuperaBotaoApagarConcluidos = document.querySelector('#remover-finalizados');

function removeConcluidos() {
  const recuperaTarefasConcluidasNode = document.querySelectorAll('.completed');
  for (let index = 0; index < recuperaTarefasConcluidasNode.length; index += 1) {
    recuperaTarefasConcluidasNode[index].remove();
  }
}

recuperaBotaoApagarConcluidos.addEventListener('click', removeConcluidos);

// ======================================================================================
//     Função que salva dados no localStorage, quando clicar no botão salvar
//      Exercício realizado com ajuda da aluna Julia Baptista
// ======================================================================================

const recuperaBotaoSalvar = document.querySelector('#salvar-tarefas');

function salvarLista() {
  const lista = document.querySelector('#lista-tarefas').innerHTML;
  localStorage.setItem('list_tarefas', '');
  localStorage.setItem('list_tarefas', JSON.stringify(lista));
}

recuperaBotaoSalvar.addEventListener('click', salvarLista);

window.onload = function () {
  const recuperaLocalStorage = JSON.parse(localStorage.getItem('list_tarefas'));
  if (recuperaLocalStorage !== null) {
    recuperaOl.innerHTML = recuperaLocalStorage;
  }
};

// ======================================================================================
//       Requisito 13 - Função que move tarefa selecionada para cima
//      Exercício realizado com ajuda da aluna Julia Baptista
// ======================================================================================

const recuperaBotaoCima = document.querySelector('#mover-cima');

function moveParaCima() {
  const selecionado = document.querySelector('.selected');

  if (selecionado) {
    const irmao = selecionado.previousElementSibling;

    if (irmao) {
      recuperaOl.insertBefore(selecionado, irmao);
    }
  }
}

recuperaBotaoCima.addEventListener('click', moveParaCima);

// ======================================================================================
//       Requisito 13 - Função que move tarefa selecionada para baixo
//      Exercício realizado com ajuda da aluna Julia Baptista
// ======================================================================================

const recuperaBotaoBaixo = document.querySelector('#mover-baixo');

function moveParaBaixo() {
  const selecionado = document.querySelector('.selected');

  if (selecionado) {
    const irmao = selecionado.nextElementSibling;

    if (irmao) {
      recuperaOl.insertBefore(irmao, selecionado);
    }
  }
}

recuperaBotaoBaixo.addEventListener('click', moveParaBaixo);

// ======================================================================================
//    Requisito 14 - Função que remove item selecionado ao clicar no botão
// ======================================================================================

const recuperaBotaoApagarSelecionado = document.querySelector('#remover-selecionado');

function removeElementoSelecionado() {
  const selecionado = document.querySelector('.selected');

  selecionado.remove();
}

recuperaBotaoApagarSelecionado.addEventListener('click', removeElementoSelecionado);

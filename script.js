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

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

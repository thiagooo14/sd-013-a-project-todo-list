document.getElementById('criar-tarefa').addEventListener('click', adicionarTarefaAoLiEResetaInput)

function AdicionarCorDeFundoSeClicado(event) {
  const existe = document.querySelectorAll('.selected')
  if (existe.length === 0 ){
    elemento = event.target
    elemento.classList = 'selected'
  } else {
    document.querySelectorAll('.selected')[0].classList.remove('selected')
    elemento = event.target
    elemento.classList.add('selected')
  }
}

function adicionarTarefaAoLiEResetaInput() {
  let tarefa = document.querySelector('input');
  const lista = document.querySelector('#lista-tarefas');
  const elementoLi = document.createElement('li');
  if (tarefa.value != "") {
    lista.appendChild(elementoLi).innerText = tarefa.value;
    tarefa.value = "";
    elementoLi.addEventListener('click', AdicionarCorDeFundoSeClicado);
    elementoLi.addEventListener('dblclick', RiscaOuNãoOLi);
  }
}

function RiscaOuNãoOLi(event) {
  const elementoASerRiscado = event.target;
  if (elementoASerRiscado.classList.contains('completed') == true){
    elementoASerRiscado.classList.remove('completed');
  } else {
  elementoASerRiscado.classList.add('completed');
  }
}

document.querySelector('#apaga-tudo').addEventListener('click', () => {
  const itensDaLista = document.querySelectorAll('li')
  if (itensDaLista[0] != undefined) {
    const lista = itensDaLista[0].parentElement;
    for (let i = 0; i < itensDaLista.length; i += 1) {
      lista.removeChild(itensDaLista[i]);
    }
  }
});

document.querySelector('#remover-finalizados').addEventListener('click', () => {
  const itensDaLista = document.querySelectorAll('li')
  if (itensDaLista[0] != undefined) {
    const lista = itensDaLista[0].parentElement
    for (let i = 0; i < itensDaLista.length; i += 1) {
      if (itensDaLista[i].classList.contains('completed') == true) {
        lista.removeChild(itensDaLista[i])
      }
    }
  }
})
// 11 - Adicione um botão com id="remover-finalizados" que quando clicado remove somente os elementos finalizados da sua lista
// O que será verificado:

// Será verificado que existe um elemento button com o id remover-finalizados

// Será verificado que, ao clicar no botão, todos os elementos marcados como feitos são removidos da lista
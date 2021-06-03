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
document.querySelector('input').addEventListener('keyup', (event) => {
  if (event.keyCode === 13){
    adicionarTarefaAoLiEResetaInput()
  }
});

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

document.querySelector('#salvar-tarefas').addEventListener('click', () => {
  localStorage.clear();
  const itensDaLista = document.querySelectorAll('li');
  for (let i = 0; i < itensDaLista.length; i += 1) {
    localStorage.setItem(i,itensDaLista[i].innerText)
  }
  localStorage.sort()
})

window.onload = recebeDadosSalvos;

function recebeDadosSalvos() {
  armazenamento = localStorage
  const lista = document.querySelector('#lista-tarefas');
  for (let i = 0; i < armazenamento.length; i += 1){
    const elementoLi = document.createElement('li');
    lista.appendChild(elementoLi).innerText = armazenamento.getItem(armazenamento.key(i));
  }
}
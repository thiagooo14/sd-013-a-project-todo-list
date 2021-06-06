document.getElementById('criar-tarefa').addEventListener('click', adicionarTarefaAoLiEResetaInput);
// verifica se o elemento selected ja esta inserido em algum elemento da
// lista senao adiciona ao event target, se houver tira o selected 
// anterior e adiciona no event target
function AdicionarCorDeFundoSeClicado(event) {
  const existe = document.querySelectorAll('.selected')
  if (existe.length === 0 ) {
    elemento = event.target;
    elemento.classList = 'selected';
  } else {
    document.querySelectorAll('.selected')[0].classList.remove('selected');
    elemento = event.target;
    elemento.classList.add('selected');
  }
}

document.querySelector('input').addEventListener('keyup', (event) => {
  if (event.keyCode === 13){
    adicionarTarefaAoLiEResetaInput();
  }
});
// lê o que foi escrito no input seleciona a lista e adiciona um li com o
// valor posto no input se diferente de "", reseta o input para "" e
// adiciona dois eventos ao li
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
//risca o li se não existir nele uma classe complete. caso exista, tira
// a classe completed deixando de ser riscado
function RiscaOuNãoOLi(event) {
  const elementoASerRiscado = event.target;
  if (elementoASerRiscado.classList.contains('completed') === true){
    elementoASerRiscado.classList.remove('completed');
  } else {
    elementoASerRiscado.classList.add('completed');
  }
}
// seleciona o botao com id apaga tudo e atribui ao click uma arrow function
//nesta function todos os itens da lista caso não seja undefined serão
// removidos do seu parente superior, a lista, além de limpar o localstorage
document.querySelector('#apaga-tudo').addEventListener('click', () => {
  const itensDaLista = document.querySelectorAll('li')
  if (itensDaLista[0] != undefined) {
    const lista = itensDaLista[0].parentElement;
    for (let i = 0; i < itensDaLista.length; i += 1) {
      lista.removeChild(itensDaLista[i]);
    }
  }
  localStorage.clear()
});
// seleciona o botao com id remov finalizados e atribui ao click uma arrow function
// seleciona todos os itens da lista e caso não seja undefined, percorre toda a lista
// e os elementos que contem a classe completed serão removidos
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
// seleciona o botao com salvar tarefas finalizados e atribui ao click uma arrow function
// primeiro limpa o localStorage, depois seleciona todos os itens da lista
// e vai colocando um por um conforme percorre a lista dentro do localStorage
document.querySelector('#salvar-tarefas').addEventListener('click', () => {
  localStorage.clear();
  const itensDaLista = document.querySelectorAll('li');
  for (let i = 0; i < itensDaLista.length; i += 1) {
    localStorage.setItem(i*3,itensDaLista[i].innerText)
    if (itensDaLista[i].classList.contains('completed') === true) {
      localStorage.setItem(i*3+1,'completed');
    } else {localStorage.setItem(i*3+1,'')}
    if (itensDaLista[i].classList.contains('selected') === true) {
      localStorage.setItem(i*3+2,'selected');
    } else {localStorage.setItem(i*3+2,'')}
  }
})

window.onload = recebeDadosSalvos;

// esta função é executada após o load da pagina, ela recebe o local storage
// seleciona a lista e recebe o texto e atributos de class do elemento
function recebeDadosSalvos() {
  const lista = document.querySelector('#lista-tarefas');
  for (let i = 0; i < localStorage.length; i += 3){
    const elementoLi = document.createElement('li');
    lista.appendChild(elementoLi).innerText = localStorage[i]
    if (localStorage[i+1] != ""){
    elementoLi.classList.add(localStorage[i+1])}
    if (localStorage[i+2] != ""){
    elementoLi.classList.add(localStorage[i+2])}
    elementoLi.addEventListener('click', AdicionarCorDeFundoSeClicado);
    elementoLi.addEventListener('dblclick', RiscaOuNãoOLi);
  }
}

//seleciona o botao com mover pra cima e atribui ao click uma arrow function
// ela deve mover o item para cima caso não seja o primeiro elemento
// codigo fonte: https://github.com/Fraitz/todolist.github.io
document.querySelector('#mover-cima').addEventListener('click', () => {
  let elementoSelecionado = document.querySelector('.selected');
  const lista = document.querySelector('#lista-tarefas');
  if (elementoSelecionado === null || elementoSelecionado === lista.firstChild ) {
  } else {
    const elementoDeCima = elementoSelecionado.previousElementSibling;
    lista.insertBefore(elementoSelecionado, elementoDeCima);
}})

document.querySelector('#mover-baixo').addEventListener('click', () => {
  let elementoSelecionado = document.querySelector('.selected');
  const lista = document.querySelector('#lista-tarefas');
  if (elementoSelecionado === null || elementoSelecionado === lista.lastChild ) {
  } else {
    const elementoDeBaixo = elementoSelecionado.nextElementSibling;
    lista.insertBefore(elementoSelecionado, elementoDeBaixo.nextElementSibling);
}})


document.querySelector('#remover-selecionado').addEventListener('click', (event) => {
  const selecionado = document.querySelector('.selected');
  const lista = selecionado.parentElement
  lista.removeChild(selecionado)
})
const listaTarefas = document.querySelector('#lista-tarefas');
const input = document.querySelector('#texto-tarefa');
const botaoAdicionar = document.querySelector('#criar-tarefa');
const botaoApagar = document.querySelector('#apaga-tudo');
const botaoRemoveFinalizadas = document.querySelector('#remover-finalizados');
const botaoRemoveSelec = document.querySelector('#remover-selecionado');
const botaoSubir = document.querySelector('#mover-cima');
const botaoDescer = document.querySelector('#mover-baixo');
const botaoSalvar = document.querySelector('#salvar-tarefas');

function recuperaTexto() {
  if (localStorage.getItem('textoLista')){
    let textos = localStorage.getItem('textoLista').split('\n');
    let classes = localStorage.getItem('classeLi').split('\n');
    const tamanho = textos.length;
    console.log(textos);
    console.log(classes);
      for (let i =0; i < tamanho; i += 1) {
        const li = document.createElement('li');
        li.className = classes [i];
        li.innerText = textos[i];
        li.addEventListener('click', trocaCorTarefa);
        li.addEventListener('dblclick', completarTarefa);
        listaTarefas.appendChild(li);
      }
    }
  }
  
  function salvartarefas() {
    let texto = listaTarefas.innerText;
    console.log(texto);
    let classes = "";
    let listaclasse = document.querySelectorAll('li');
    for (let i =0; i < listaclasse.length; i += 1) {
      classes += listaclasse[i].className + '\n'
    }
    console.log(classes);
    localStorage.setItem('textoLista', texto);
    localStorage.setItem('classeLi', classes);
    console.log(localStorage);
  }

function verificaSelected() {
  let verifica = false;
  const lista = document.querySelectorAll('li');
  const cS = 'completed selected';
  const sC = 'selected completed';
  const s = 'selected';
  for (let i = 0; i < lista.length; i += 1) {
    if (lista[i].className === cS || lista[i].className === sC || lista[i].className === s) {
      verifica = true;
    }
  }
  return verifica;
}

function descerItem() {
  if (verificaSelected() === true) {
    const elemento = document.querySelector('.selected');
    const proximoElemento = elemento.nextElementSibling;
    if (proximoElemento !== null) {
      listaTarefas.insertBefore(elemento, proximoElemento.nextElementSibling);
    }
  }
}

function subirItem() {
  if (verificaSelected() === true) {
    const primeioLista = document.querySelectorAll('li')[0];
    const elemento = document.querySelector('.selected');
    const elementoAnterior = elemento.previousElementSibling;
    if (primeioLista !== elemento) {
      listaTarefas.insertBefore(elemento, elementoAnterior);
    }
  }
}

function removeSelect() {
  listaTarefas.removeChild(document.querySelector('.selected'));
}

function apagaFinalizadas() {
  const listaCompletas = document.getElementsByClassName('completed');
  const tamanhoOriginal = listaCompletas.length;
  for (let i = 0; i < tamanhoOriginal; i += 1) {
    listaTarefas.removeChild(document.querySelector('.completed'));
  }
}

function completarTarefa(event) {
  const listaClasses = event.target.className;
  if (listaClasses === 'completed selected' || listaClasses === 'selected completed') {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function apagaLista() {
  let tamanhoDalista = listaTarefas.children.length;
  for (let i = 0; i < tamanhoDalista; i += 1) {
    listaTarefas.removeChild(listaTarefas.lastElementChild);
  }
  tamanhoDalista = 0;
}

function trocaCorTarefa(event) {
  const unicacor = document.querySelectorAll('li');
  for (let i = 0; i < unicacor.length; i += 1) {
    unicacor[i].style.backgroundColor = '';
    unicacor[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
  event.target.style.backgroundColor = 'rgb(128,128,128)';
}

function criarTarefa() {
  const li = document.createElement('li');
  li.innerText = input.value;
  input.value = null;
  li.addEventListener('click', trocaCorTarefa);
  li.addEventListener('dblclick', completarTarefa);
  listaTarefas.appendChild(li);
}
window.document.onload = recuperaTexto();
botaoAdicionar.addEventListener('click', criarTarefa);
botaoApagar.addEventListener('click', apagaLista);
botaoRemoveFinalizadas.addEventListener('click', apagaFinalizadas);
botaoRemoveSelec.addEventListener('click', removeSelect);
botaoSubir.addEventListener('click', subirItem);
botaoDescer.addEventListener('click', descerItem);
botaoSalvar.addEventListener('click', salvartarefas);


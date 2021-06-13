const criat = document.querySelector('#lista-tarefas');
const movCima = document.querySelector('#mover-cima');
const movBaixo = document.querySelector('#mover-baixo');
const listaMain = document.querySelector('#lista-tarefas');

function input() {
  const adi = document.querySelector('#criar-tarefa');
  adi.addEventListener('click', () => {
    const text = document.querySelector('#texto-tarefa');
    const criaLi = document.createElement('li');
    criaLi.innerText = text.value;
    listaMain.appendChild(criaLi);
    text.value = '';
  });
}
input();
// questão 7 e 8
function cor() {
  criat.addEventListener('click', (event) => {
    const li = criat.children;
    for (let i = 0; i < li.length; i += 1) {
      li[i].classList.remove('cor');
    }
    event.target.classList.add('cor');
  });
}
cor();
// questão9
function risco() {
  criat.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
  });
}
risco();

function deletC() {
  const botDel = document.querySelector('#apaga-tudo');
  botDel.addEventListener('click', () => {
    while (criat.firstChild) { // usando o while para navegar sobre os filhos e assim ir deletando
      criat.removeChild(criat.firstChild);
    }
  });
}
deletC();

function removeFin() {
  const botRemFin = document.querySelector('#remover-finalizados');
  botRemFin.addEventListener('click', () => {
    const li = document.querySelectorAll('li');
    for (let i = 0; i < li.length; i += 1) {
      if (li[i].classList.contains('completed')) {
        criat.removeChild(li[i]);
      }
    }
  });
}
removeFin();

function removeSel() {
  const botRemSel = document.querySelector('#remover-selecionado');
  botRemSel.addEventListener('click', () => {
    const li = document.querySelectorAll('li');
    for (let i = 0; i < li.length; i += 1) {
      if (li[i].classList.contains('cor')) {
        criat.removeChild(li[i]);
      }
    }
  });
}
removeSel();

const salvar = document.querySelector('#salvar-tarefas');

function salvaTare() {
  const lista = criat.innerHTML;
  localStorage.setItem('teste', lista);
}
function t() {
  const test = localStorage.getItem('teste');
  criat.innerHTML = test;
}
t();
salvar.addEventListener('click', salvaTare);

function movUp() {
  const lis = document.querySelectorAll('li');
  for (let i = 0; i < lis.length; i += 1) {
    if (lis[0].classList.contains('cor')) {
      return alert('ação inválida');
    } if (lis[i].classList.contains('cor')) {
      const liPrev = lis[i];
      listaMain.insertBefore(liPrev, lis[i].previousElementSibling);
    }
  }
}
movCima.addEventListener('click', movUp);
function movDown() {
  const lis = document.querySelectorAll('li');
  for (let i = 0; i < lis.length; i += 1) {
    if (lis[lis.length - 1].classList.contains('cor')) {
      return alert('ação inválida');
    } if (lis[i].classList.contains('cor')) {
      listaMain.insertBefore(lis[i], lis[i + 1].nextElementSibling);
    }
  }
}
movBaixo.addEventListener('click', movDown);

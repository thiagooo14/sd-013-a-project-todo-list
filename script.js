const criat = document.querySelector('#lista-tarefas');

function input() {
  const adi = document.querySelector('#criar-tarefa');
  adi.addEventListener('click', () => {
    const text = document.querySelector('#texto-tarefa');
    const lis = document.querySelector('#lista-tarefas');
    const criaLi = document.createElement('li');
    criaLi.innerText = text.value;
    lis.appendChild(criaLi);
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

function final() {
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
final();

function remove() {
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
remove();

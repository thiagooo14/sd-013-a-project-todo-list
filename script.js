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
// questão 7
function cor() {
  const criat = document.querySelector('#lista-tarefas');
  criat.addEventListener('click', (event) => {
    const li = criat.children;
    for (let i = 0; i < li.length; i += 1) {
      li[i].classList.remove('cor');
    }
    event.target.classList.add('cor');
  });
}
cor();

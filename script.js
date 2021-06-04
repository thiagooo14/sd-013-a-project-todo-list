const button = document.querySelector('#criar-tarefa');
button.addEventListener('click', () => {
  const input = document.querySelector('#texto-tarefa');
  const texto = input.value;
  const criarLi = document.createElement('li');
  criarLi.innerHTML = texto;
  criarLi.classList.add('cor-li');
  criarLi.addEventListener('click', (evento) => {
    const elementoClicado = evento.target;
    elementoClicado.style.backgroundColor = 'rgb(128, 128, 128)';
  });
  const lista = document.getElementById('lista-tarefas');
  lista.appendChild(criarLi);
  input.value = '';
});

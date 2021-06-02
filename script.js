const button = document.querySelector('#criar-tarefa');
button.addEventListener('click', () => {
  const input = document.querySelector('#texto-tarefa');
  const texto = input.value;
  const criarLi = document.createElement('li');
  criarLi.innerHTML = texto;
  const lista = document.getElementById('lista-tarefas');
  lista.appendChild(criarLi);
  input.value = '';
});

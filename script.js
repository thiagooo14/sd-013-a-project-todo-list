function adicionaCor(evento) {
  const elementoClicado = evento.target;
  const todosLi = document.querySelectorAll('.cor-li');
  for (let i = 0; i < todosLi.length; i += 1) {
    const posicaoLi = todosLi[i];
    if (posicaoLi.classList.contains('clicado')) {
      posicaoLi.classList.remove('clicado');
    }
  }
  elementoClicado.classList.add('clicado');
}
const button = document.querySelector('#criar-tarefa');
// Adiciona addEventListener:
button.addEventListener('click', () => {
  // Guarda o texto que foi digitado no input:
  const input = document.querySelector('#texto-tarefa');
  const texto = input.value;
  // Cria o li:
  const novaLi = document.createElement('li');
  novaLi.innerHTML = texto;
  // Adicona classe a li:
  novaLi.classList.add('cor-li');
  novaLi.addEventListener('click', adicionaCor);
  const lista = document.getElementById('lista-tarefas');
  lista.appendChild(novaLi);
  input.value = '';
});

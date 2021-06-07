// botão criar tarefa e campo de texto.
const lista = document.getElementById('lista-tarefas');
const inputTarefa = document.getElementById('texto-tarefa');
const botao = document.getElementById('criar-tarefa');

botao.addEventListener('click', () => {
  const item = document.createElement('li');
  item.innerText = inputTarefa.value;
  lista.appendChild(item);
  console.log('deu certo');
  inputTarefa.value = '';
});

// botão de apagar!!!!!!!!!11111111111111111111111

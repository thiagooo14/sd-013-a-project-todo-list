function getTextoTarefa() {
  return document.getElementById('texto-tarefa').value;
};

function clearTextoTarefa() {
  return document.getElementById('texto-tarefa').value = '';
};

function criarTarefa() {
  const lista = document.getElementById('lista-tarefas');
  const filhoLista = document.createElement('li');
  filhoLista.innerText = getTextoTarefa();
  lista.appendChild(filhoLista);
  clearTextoTarefa();
};

function addTask() {
  const getInput = document.getElementById('texto-tarefa').value;
  const ol = document.getElementById('lista-tarefas');
  const li = document.createElement('li');

  if (getInput === '') {
    alert('Insira uma tarefa!');
  } else {
    li.appendChild(document.createTextNode(getInput));
    ol.appendChild(li);
    document.getElementById('texto-tarefa').value = '';
  }
}

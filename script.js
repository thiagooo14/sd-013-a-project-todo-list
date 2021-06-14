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

function changeItemBackground() {
  const input = document.querySelector('#lista-tarefas');

  input.addEventListener('click', (event) => {
    const getLists = document.querySelectorAll('.lista');
    for (let i = 0; i < getLists.length; i += 1) {
      getLists[i].classList.remove('lista');
    } event.target.classList.add('lista');
  });
}

changeItemBackground();

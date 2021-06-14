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
//debugger
function changeItemBG() {
  let input = document.querySelector('ol').children;

  for (let i = 0; i < input.length; i += 1) {
    input[i].addEventListener('click', () => {
      item = input[i];
      item.style.backgroundColor = 'rgb(128, 128, 128)';
    });
  }
}

//changeItemBG();

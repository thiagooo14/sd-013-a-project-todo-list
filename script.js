const button = document.getElementById('criar-tarefa');
const textAdd = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas')

button.addEventListener('click', increase);

function increase() {
  const item = document.createElement('li');
  item.innerText = textAdd.value;
  list.appendChild(item);
  textAdd.value = '';

  item.addEventListener('click', mudaFundo);

  function mudaFundo() {
    item.style.backgroundColor = 'rgb(128,128,128)';
  }

  item.addEventListener('dblclick', riscar);

  function riscar() {
    if (item.style.textDecoration = 'none') {
      item.style.textDecoration = 'line-through';
    } else {
      item.style.textDecoration = 'none';
    }
  }
}

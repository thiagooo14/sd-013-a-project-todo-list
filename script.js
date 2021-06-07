let enterBotao = document.getElementById('criar-tarefa');
let input = document.getElementById('texto-tarefa');
let ol = document.getElementById('lista-tarefas');
let item = document.getElementsByTagName('li');

function inputList() {
  return input.value.length;
}

function criarlist() {
  let li = document.createElement('li');

  li.appendChild(document.createTextNode(input.value));
  ol.appendChild(li);
  input.value = '';

  function criarHover() {
    li.classList.toggle('listHover');
  }

  li.addEventListener('dblclick', criarHover);

  let dbtn = document.createElement('button');
  dbtn.appendChild(document.createTextNode('Apagar'));
  li.appendChild(dbtn);
  dbtn.addEventListener('click', deletListItem);

  function deletListItem() {
    li.classList.add('delete');
  }
}

enterBotao.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterKeypress);

function addListAfterClick() {
  if (inputList() > 0) {
    criarlist();
  }
}

function addListAfterKeypress() {
  if (inputList() > 0 && event.which === 13) {
    criarlist();
  }
}

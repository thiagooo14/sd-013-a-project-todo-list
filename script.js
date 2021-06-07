const buttonAdd = document.getElementById('criar-tarefa');// Constante para resgatar o botão "Adicionar"
const buttonDeleteAll = document.getElementById('apaga-tudo');
const ol = document.getElementById('lista-tarefas');

// Adiciona som de erro e placeholder quando o valor do input esta em branco e o usuário envia a tarefa
function soundError() {
  const snd2 = new Audio('/assets/input2.mp3');
  snd2.play();
  const input = document.getElementsByTagName('input')[0];
  input.placeholder = ('TAREFA EM BRANCO, POR FAVOR ESCREVA SUA TAREFA AQUI!');
}

// Adiciona som quando o usuário envia a tarefa
function soundAccept() {
  const snd = new Audio('/assets/input.mp3');
  snd.play();
}

// Cria a tarefa com o valor digitado pelo usuário
function button1() {
  const task = document.getElementById('texto-tarefa');
  const input = document.getElementById('texto-tarefa').value;
  const li = document.createElement('li');
  if (input !== '') {
    li.innerHTML = input;
    ol.appendChild(li);
    ol.className = 'color';
    li.id = 'li';
    task.value = '';
    soundAccept();
    document.getElementsByTagName('input')[0].placeholder = 'DIGITE SUA TAREFA';
  } else {
    soundError();
  }
}

//  Aciona botão 'Enviar" ao apertar Enter
function enterKey(e) {
  if (e.key === 'Enter') {
    buttonAdd.click();
  }
}

// Remove todas as tarefas quando clicar no botão "Apagar Tudo"
function deleteAll() {
  ol.innerHTML = '';
  ol.classList.remove('color');
}

// Altera cor de fundo da li ao clicar no item
function addSelected(e) {
  e.target.classList.add('selected');
}

// Altera o estilo do item ao clicar duas vezes
function complete(e) {
  if (e.target.classList.contains('completed') === false) {
    e.target.classList.add('completed');
  } else if (e.target.classList.contains('completed')) {
    e.target.classList.remove('completed');
  }
}

buttonDeleteAll.addEventListener('click', deleteAll);
buttonAdd.addEventListener('click', button1);
document.addEventListener('keypress', enterKey);
ol.addEventListener('click', addSelected);
ol.addEventListener('dblclick', complete);
ol.addEventListener('dblclick', complete);

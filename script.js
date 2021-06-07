const buttonAdd = document.getElementById('criar-tarefa');// Constante para resgatar o botão "Adicionar"
const buttonDeleteAll = document.getElementById('apaga-tudo');

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
  const ol = document.querySelector('#lista-tarefas');

  if (input !== '') {
    li.innerHTML = input;
    ol.appendChild(li);
    li.className = 'color';
    li.id = 'li';
    ol.className = 'color color2';
    task.value = '';
    soundAccept();
    document.getElementsByTagName('input')[0].placeholder = 'DIGITE SUA TAREFA';
  } else {
    soundError();
  }
}
buttonAdd.addEventListener('click', button1);

//  Aciona botão 'Enviar" ao apertar Enter
function enterKey(e) {
  if (e.key === 'Enter') {
    buttonAdd.click();
  }
}
document.addEventListener('keypress', enterKey);

// Remove todas as tarefas quando clicar no botão "Apagar Tudo"
function deleteAll() {
  const ol = document.getElementsByTagName('ol')[0];
  ol.innerHTML = '';
  ol.classList.remove('color2');
}
buttonDeleteAll.addEventListener('click', deleteAll);

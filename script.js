const snd = new Audio('/assets/Enviar.mp3'); // Constante para adicionar Audio ao botão 'Adicionar'
const paiLi = document.getElementById('lista-tarefas'); // Constante para resgatar elemento pai da 'li'
const buttonAdd = document.getElementById('criar-tarefa');// Constante para resgatar o botão "Adicionar"
const buttonDeleteAll = document.getElementById('apaga-tudo');

//  Cria a LI com o valor digitado pelo usuário
buttonAdd.addEventListener('click', () => {
  const task = document.getElementById('texto-tarefa');
  const input = document.getElementById('texto-tarefa').value;
  const li = document.createElement('li');
  const ol = document.querySelector('#lista-tarefas');
  if (input !== '') {
    li.innerHTML = input;
    ol.appendChild(li);
    li.className = 'color';
    ol.className = 'color2 color';
    task.value = '';
  }
});

//  Aciona botão 'Enviar" ao apertar Enter
document.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    buttonAdd.click();
  }
});

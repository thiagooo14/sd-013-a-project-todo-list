const ol = document.createElement('ol');
ol.id = 'lista-tarefas';
document.body.appendChild(ol);

function CreateTask() {
  inputtext = document.querySelector('#texto-tarefa'); //criei variavel para o input
  buttonAddTask = document.querySelector('#criar-tarefa'); //variavel para o botao
  buttonAddTask.addEventListener('click', function () {
    //botao ao clicar
    if (inputtext.value !== '') {
      //se estiver diferente de vazio , ou seja você escreveu
      const list = document.createElement('li'); //cria uma lista
      list.classList = 'lista'; //lista ganha classe
      list.addEventListener('click', ChangeBackground);
      list.innerHTML = inputtext.value; //insere o valor
      ol.appendChild(list); //filho da ol
    }
    inputtext.value = ''; //zera
  });
}

CreateTask();

function ChangeBackground(event) {
  const arrayList = document.querySelectorAll('.lista');
  for (let index = 0; index < arrayList.length; index += 1) {
    arrayList[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}
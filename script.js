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
      list.addEventListener('dblclick', Strikeout);
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
/* Com a ajuda do Zezé coloquei essa função para ser ouvida pela li assim que ela foi criada, pega toda a lista
faz um for para percorrer ela toda, e remove a classe selecionada, e onde eu clicar que é o alvo adiciona a classe
o elemento que ganha essa classe , no css colocou a classe selected e colocou para ganhar a cor cinza*/ 

function Strikeout(event) {
  event.target.classList.toggle('completed');
}

/*Com a ajuda da Luiza Antiques ela explicou o toggle, o toggle ele adiciona a classe e remove a classe. O que é bem 
útil nesse exercício já que vários elementos precisam ser riscados, daí todos ganham essa classe, e depois clicando duas vezes eles perdem a classe
no css colocou a classe completed que faz o riscado.*/

function EraseAll(){
 const ListAgain= document.querySelectorAll('.lista');
 const Listorder= document.querySelector('#lista-tarefas');
 for (let index = 0; index < ListAgain.length; index += 1) {
 Listorder.removeChild(ListAgain[index])
}
}
 const buttonEraseTask = document.querySelector('#apaga-tudo')

buttonEraseTask.addEventListener('click', EraseAll);


const ol = document.createElement('ol');
ol.id = 'lista-tarefas';
document.body.appendChild(ol);

function CreateTask() {
  const inputtext = document.querySelector('#texto-tarefa'); // criei variavel para o input
  const buttonAddTask = document.querySelector('#criar-tarefa'); // variavel para o botao
  buttonAddTask.addEventListener('click', () => { // botao ao clicar
    if (inputtext.value !== '') { // se estiver diferente de vazio , ou seja você escreveu
      const list = document.createElement('li'); // cria uma lista
      list.classList = 'lista'; // lista ganha classe
      list.addEventListener('click', ChangeBackground);
      list.addEventListener('dblclick', Strikeout);
      list.innerHTML = inputtext.value; // insere o valor
      ol.appendChild(list); // filho da ol
    }
    inputtext.value = ''; // zera
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
o elemento que ganha essa classe , no css colocou a classe selected e colocou para ganhar a cor cinza */

function Strikeout(event) {
  event.target.classList.toggle('completed');
}

/* Com a ajuda da Luiza Antiques ela explicou o toggle, o toggle ele adiciona a classe e remove a classe. O que é bem
útil nesse exercício já que vários elementos precisam ser riscados, daí todos ganham essa classe, e depois clicando duas vezes eles perdem a classe
no css colocou a classe completed que faz o riscado. */

function EraseAll() {
  const ListAgain = document.querySelectorAll('.lista');
  for (let index = 0; index < ListAgain.length; index += 1) {
    ol.removeChild(ListAgain[index]);
  }
}
const buttonEraseTask = document.querySelector('#apaga-tudo');

buttonEraseTask.addEventListener('click', EraseAll);
/* Com a ajuda da Julia eu vi que a lógica estava certa, mas eu estava esquecendo de por a # */
function RemoveCompleted() {
  const taskCompleted = document.querySelectorAll('.completed');// procura todos com a classe completed
  for (let index = 0; index < taskCompleted.length; index += 1) { // um for passa por todos
    ol.removeChild(taskCompleted[index]); // remove da ol todos os filhos com a classe completed
  }
}

const buttonRemove = document.querySelector('#remover-finalizados');

buttonRemove.addEventListener('click', RemoveCompleted);

/* fonte:https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_insertbefore */
function moveUp() {
  const selected = document.querySelector('.selected');// primeiro busquei o elemento com  a classe  selecionado
  if (selected !== null && selected !== ol.firstElementChild) { // se o elemento selecionado nao for o primeiro
    ol.insertBefore(selected, selected.previousSibling); // a primeira parte é o item no caso o elemento selcioando, a segunda parte onde quero por,inserir o elemento antes do que vem acima que é o ṕrevious sibling
  }
}

const moveUpbtn = document.querySelector('#mover-cima');
moveUpbtn.addEventListener('click', moveUp);

function moveDown() {
  const selected = document.querySelector('.selected');
  if (selected !== null && selected !== ol.lastElementChild) { // null foi colocado aí para mostrar que algum elemento esta selecioando, e satisfazer o requisito "Será verificado que, caso nenhum elemento esteja selecionado, clicar nos botões não altera a lista"
    ol.insertBefore(selected.nextSibling, selected);// o elemento seguinte seja adicionado antes do elemento selcionado, assim o elemento selecionado cai para baixo
  }
}

const moveDownbtn = document.querySelector('#mover-baixo');
moveDownbtn.addEventListener('click', moveDown);

function RemoveSelect() {
  const selected = document.querySelector('.selected');
  ol.removeChild(selected);
}
const selectbutton = document.querySelector('#remover-selecionado');
selectbutton.addEventListener('click', RemoveSelect);

function saveTask() {
  const allList = ol.innerHTML;
  localStorage.setItem('savetask', allList);
}

const savedTask = localStorage.getItem('savetask');
ol.innerHTML = savedTask;

const saveButton = document.querySelector('#salvar-tarefas');
saveButton.addEventListener('click', saveTask);

/* A resolução do salvar foi baseado no vídeo que existe no curso da Trybe, do bloco 5.4, no minuto 24.
Temos que guardar o item, e depois recuperar ele com o get item. */

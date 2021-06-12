const criartarefaButton = document.getElementById('criar-tarefa');
const criartarefaInput = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const buttonClear = document.getElementById('apaga-tudo');

//criartarefaButton.addEventListener('click', ()=>{
//   let li = document.createElement('li');
//    li.innerHTML = criartarefaInput.value;
//    listaTarefas.appendChild(li);
//    criartarefaInput.value = "";
//});

//criar lista de tarefas com botão
function createTask() {
    criartarefaButton.addEventListener('click',()=>{
        let li = document.createElement('li');
        li.innerHTML = criartarefaInput.value;
        listaTarefas.appendChild(li);
        criartarefaInput.value = "";
        })
}
createTask();

//selecionar somente um item da lista item da lista
function selectWord() {
    const word = document.querySelector('ol');
    word.addEventListener('click', (event) => {

    const wordList = document.getElementsByTagName('li')
    for (let index = 0; index < wordList.length; index+=1) {
    wordList[index].classList.remove('selected');
    }
        event.target.classList.add('selected');
    });
}
selectWord();

//função clique duplo
function dbClick() {
    const word = document.querySelector('ol');
    word.addEventListener('dblclick', (event) => {
        event.target.classList.toggle('completed');
    })
}
dbClick();

//botão que apaga lista completa

function clearList() {
    const word = document.querySelector('ol');
    while(word.firstChild) {
        word.removeChild(word.firstChild)
    }
}
buttonClear.addEventListener('click', clearList);
clearList()

//remover itens marcados
const buttonRem = document.getElementById('remover-finalizados');

function removeFin() {
    const itemSelec = document.querySelectorAll('.completed');
    for (let index = 0; index < itemSelec.length; index++) {
        itemSelec[index].parentNode.removeChild(itemSelec[index]);
    }
}
buttonRem.addEventListener('click', removeFin);

//salvar as tarefas

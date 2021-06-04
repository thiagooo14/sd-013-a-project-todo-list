const criartarefaButton = document.getElementById('criar-tarefa');
const criartarefaInput = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

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
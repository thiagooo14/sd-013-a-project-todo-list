const criartarefaButton = document.getElementById('criar-tarefa');
const criartarefaInput = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

//criartarefaButton.addEventListener('click', ()=>{
//   let li = document.createElement('li');
//    li.innerHTML = criartarefaInput.value;
//    listaTarefas.appendChild(li);
//    criartarefaInput.value = "";
//});

function createTask() {
    criartarefaButton.addEventListener('click',()=>{
        let li = document.createElement('li');
        li.innerHTML = criartarefaInput.value;
        listaTarefas.appendChild(li);
        criartarefaInput.value = "";
        })
}
createTask();
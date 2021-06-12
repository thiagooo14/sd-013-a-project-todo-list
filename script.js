let enter = document.getElementById('texto-tarefa'); //recuperando o elemento input

let button = document.getElementById('criar-tarefa'); // recuperando o elemento botão

let list = document.getElementById('lista-tarefas'); // recuperando e elemento lista




//função para criar a lista de tarefas

function createList() {
    let listItem = document.createElement('li'); // criando o elemento onde as tarefas ficarão armazanadas
    let task = document.createTextNode(enter.value); // pegando o texto digitado no input e colocando em task
    listItem.appendChild(task); // colocando as tarefas digitadas como filhas de li
    list.appendChild(listItem); // colocando as li's como filhas do elemento ol
    enter.value = ''; //para o campo de input ficar em branco após a tarefa ser registrada


    
        function mudaCor(novaCor) {
            const listaTarefas = document.getElementsByTagName('li');
            for(let index = 0; index < listaTarefas.length; index += 1){
                let listItem = listaTarefas[index];
                listItem.style.backgroundColor = 'rgb(255, 255, 255)';
            }
      
            novaCor.target.style.backgroundColor='rgb(128, 128, 128)';
        }
        listItem.addEventListener('click', mudaCor)



      function riscar () {
        listItem.classList.toggle('completed');
      }
      listItem.addEventListener('dblclick', riscar);
    

}
button.addEventListener('click', createList);













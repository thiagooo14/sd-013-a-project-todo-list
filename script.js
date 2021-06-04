const buttonTask = document.querySelector("#criar-tarefa");
buttonTask.addEventListener("click", function(){
    const input = document.querySelector("#texto-tarefa");
    const textValue = input.value;
    const createList = document.createElement('li');
    createList.innerText = textValue;
    const olList = document.querySelector("#lista-tarefas");
    olList.appendChild(createList);
    input.value = '';
}); 

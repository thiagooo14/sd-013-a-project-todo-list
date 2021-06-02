    let button = document.getElementById("criar-tarefa");

    button.addEventListener("click", adicionaTarefa);

    function adicionaTarefa() {
        let tarefa = document.getElementById("texto-tarefa");
        let lista = document.querySelector("#lista-tarefas");
        let li = document.createElement("li");
        li.textContent = tarefa.value;
        lista.appendChild(li);
        tarefa.value ="";
        tarefa.focus();
    }
        



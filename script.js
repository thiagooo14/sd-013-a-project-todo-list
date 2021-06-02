    /*Requisito 5*/
    
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

    /*Requisito 6*/
    
    let listaOrdenada = document.querySelector("#lista-tarefas");
      function pintaLista(event) {
         let liClicado = event.target;
         liClicado.classList.add("color")
      }
        listaOrdenada.addEventListener("click", pintaLista);
    
  
        


/*Referências

Requisito 5 - https://www.youtube.com/watch?v=ucfNgEl_Vcw*/


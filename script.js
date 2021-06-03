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

    /*Requisito 7*/
    
    let listaOrdenada = document.querySelector("#lista-tarefas");
      function pintaLista(event) {
         let liClicado = event.target;
         liClicado.classList.add("color");
      }
        listaOrdenada.addEventListener("click", pintaLista);

    /*Requisito 8*/

    let tarefas = document.getElementsByTagName("li");

      function justOneElement(event) {
          for (let index = 0; index < tarefas.length; index += 1) {
              tarefas[index].classList.remove("color");
          }
          let liClicado = event.target;
          liClicado.classList.add("color");
      }
      listaOrdenada.addEventListener("click", justOneElement);
       
  

    
    
  
        


//Referências

//Requisito 5 - https://www.youtube.com/watch?v=ucfNgEl_Vcw*/
//Requisoto 6 - Aula de revisão Fernando


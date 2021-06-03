    /*Requisito 5*/

    let button = document.getElementById("criar-tarefa");

    button.addEventListener("click", adicionaTarefa);

    function adicionaTarefa() {
      let tarefa = document.getElementById("texto-tarefa");
      let lista = document.querySelector("#lista-tarefas");
      let li = document.createElement("li");
      li.textContent = tarefa.value;
      lista.appendChild(li);
      tarefa.value = "";
      tarefa.focus();
    }

    /*Requisito 7*/

    let listaOrdenada = document.querySelector("#lista-tarefas");

    function printList(event) {
      let liClicado = event.target;
      liClicado.classList.add("color");
    }
    listaOrdenada.addEventListener("click", printList);

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

    /*Requisito 9*/

    function riscaItem(event) {
      let liClicado = event.target;
      liClicado.classList.toggle("completed");
    }

    listaOrdenada.addEventListener("dblclick", riscaItem);

    /*Requisito 10*/

    function clear() {
      let buttonClear = document.getElementById("apaga-tudo");
      listaOrdenada = document.getElementById("lista-tarefas");

      buttonClear.addEventListener("click", function () {

        let lista = document.getElementsByTagName("li");
        for (let index = 0; index < lista.length; index += 1) {
          listaOrdenada.removeChild(lista[index]);
          index -= 1;
        }
      })
    }
    clear()


















    //Referências

    //Requisito 5 - https://www.youtube.com/watch?v=ucfNgEl_Vcw*/
    //Requisoto 6 - Aula de revisão Fernando
    //Requisito 10 - Slack, duvida de um aluno da Turna 10 - B// Levei bastante tempo, pois limpava apenas metade da lista, por isso o decremento em -1 no indice!

window.onload = function () {
  let tarefa = document.querySelector("input[id=texto-tarefa");
  let button = document.querySelector("button[id=criar-tarefa");
  let list = document.getElementById("lista-tarefas");
  let deleta = document.querySelector("button[id=apaga-tudo");
  let deletaF = document.querySelector("button[id=remover-finalizados");
  deletaF.addEventListener("click", (event) => {
    newLista = document.getElementsByClassName("completed");
    for (let index = newLista.length - 1; index > 0; index -= 1) {
      newLista[index].remove("li");
      console.log(newLista.length);
    }
  })

  deleta.addEventListener("click", (event) => {
    newList = document.getElementsByTagName("li");
    for (let index = newList.length - 1; index >= 0; index -= 1) {
      newList[index].remove("li");
      console.log(newList.length);
    }
  })

  button.addEventListener("click", function () {
    let newList = document.createElement("li");
    newList.innerText = tarefa.value;
    newList.className = "";
    selected(newList);
    list.appendChild(newList);
    tarefa.value = "";
    dblclick();
  })

  function selected(newList) {
    newList.addEventListener("click", function () {
      let tamanho = document.getElementsByTagName("li");
      let color = "rgb(128,128,128)";
      this.setAttribute("style", `background-color:${color}`);
      //nSelected(tamanho); 
      //dblclick();
    })
  }

  function dblclick() {
    newList = document.getElementsByTagName("li");
    let aux = 0;
    for (let index = 0; index < newList.length; index += 1) {
      newList[index].addEventListener("dblclick", function () {
        this.className = "completed";
        console.log(aux);
        if (aux == 0) {
          newList[index].addEventListener("dblclick", function () {
            this.className = "";
            console.log(aux);
            //aux=1;
          })
        } else {
          aux = 0;
        }
      })
    }
  }
}
let btnCriarTarefa = document.querySelector("#criar-tarefa");
let campoInput = document.querySelector("#texto-tarefa");
let listaOrd = document.querySelector("#lista-tarefas");

btnCriarTarefa.addEventListener("click", function () {
    let novaTarefa = document.createElement("li");
    listaOrd.appendChild(novaTarefa);
    novaTarefa.innerText = campoInput.value;
    campoInput.value = "";

    novaTarefa.addEventListener("click", function () {
        deselect();
        this.classList.add("select");
    })

    novaTarefa.addEventListener("dblclick", function () {
        if (this.classList.contains("completed")) {
            this.classList.remove("completed");
        } else {
            this.classList.add("completed");
        }
    })
});

function deselect() {
    let itemSelecionado = document.querySelector(".select");
    
    if (itemSelecionado) {
        itemSelecionado.classList.remove("select");
    }
  };





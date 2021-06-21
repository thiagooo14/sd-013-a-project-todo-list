let btnCriarTarefa = document.querySelector("#criar-tarefa");
let campoInput = document.querySelector("#texto-tarefa");
let listaOrd = document.querySelector("#lista-tarefas");
let btnApagar = document.querySelector("#apaga-tudo");
let btnFinalizados = document.querySelector("#remover-finalizados");
let btnRemoveSelecionado = document.querySelector("#remover-selecionado");
let btnSalvarTarefa = document.querySelector("#salvar-tarefas");


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

btnApagar.addEventListener("click", function () {
  listaOrd.innerHTML = "";
});

btnFinalizados.addEventListener("click", function () {
  let completedClass = document.querySelectorAll(".completed");

  for (item of completedClass) {
    item.remove();
  }
})

btnRemoveSelecionado.addEventListener("click", function () {
  document.querySelector(".select").remove();
})


btnSalvarTarefa.addEventListener("click", function () {
  let itemList = document.querySelector("#lista-tarefas").innerHTML;

  localStorage.setItem('itemList', itemList);
  
});

function elementoSalvo() {
  if (localStorage.getItem('itemList')) {
    listaOrd.innerHTML = localStorage.getItem('itemList');
  }
}

elementoSalvo();












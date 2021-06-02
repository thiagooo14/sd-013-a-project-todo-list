
let botaoCriar = document.querySelector("#criar-tarefa");


function addTarefa(){
    let campoTexto = document.querySelector("#texto-tarefa").value;
    window.alert(campoTexto);
}

botaoCriar.addEventListener("click", addTarefa);
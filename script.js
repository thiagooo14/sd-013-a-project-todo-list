let botaoApaga = document.querySelector("#apaga-tudo");

let botaoCriar = document.querySelector("#criar-tarefa");

let listaArray = document.querySelectorAll('li');
for (let i = 0; i < listaArray.length ; i += 1 ) {
    listaArray[i].addEventListener("dblclick", riscaElemento)
    listaArray[i].addEventListener("click", mudaCorFundo)
}

function mudaCorFundo() {
    window.alert('mudacor');
}
function riscaElemento() {
    window.alert('riscaelemento');
}

function addTarefa(){
    let campoTexto = document.querySelector("#texto-tarefa").value;
    let lugarNaLista = document.querySelector("#lista-tarefas");
    let li = document.createElement('li');
    li.innerHTML = campoTexto;
    lugarNaLista.appendChild(li)
    document.querySelector("#texto-tarefa").value = null
}

function apagaTudo() {
    window.location.reload();
}

botaoApaga.addEventListener("click",apagaTudo);
botaoCriar.addEventListener("click", addTarefa);
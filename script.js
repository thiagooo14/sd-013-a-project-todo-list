let botaoApaga = document.querySelector("#apaga-tudo");

let botaoCriar = document.querySelector("#criar-tarefa");

let botaoLimpaFinalizados = document.querySelector("#remover-finalizados");

let listaOrdenada = document.querySelector("#lista-tarefas");

function mudaCorFundo(event) {
    let temporario = event.target;
    document.querySelector('#selected').style.backgroundColor = 'white';
    document.querySelector('#selected').removeAttribute('id');
    temporario.style.backgroundColor = 'rgb(128, 128, 128)';
    temporario.id = 'selected';
}

function riscaElemento(event) {
    let temporario = event.target;
    temporario.classList.toggle('riscado');
}

function removeFinalizados(){
    let listaTemporaria = document.querySelectorAll('.riscado');
    for (let i = 0; i < listaTemporaria.length; i += 1){
        listaTemporaria[i].remove();
    }
    document.querySelector('.comum').id = 'selected'
}

    //fim bloco requerimento 7
    //fim bloco requerimento 7
    
function addTarefa(){
    let campoTexto = document.querySelector("#texto-tarefa").value;
    let lugarNaLista = document.querySelector("#lista-tarefas");
    let li = document.createElement('li');
    li.innerHTML = campoTexto;
    li.className = 'comum';
    lugarNaLista.appendChild(li);
    document.querySelector("#texto-tarefa").value = null;
}
    
function apagaTudo() {
    window.location.reload();
}
    
    botaoApaga.addEventListener("click",apagaTudo);
    botaoCriar.addEventListener("click", addTarefa);
    botaoLimpaFinalizados.addEventListener("click", removeFinalizados)
    listaOrdenada.addEventListener("click", mudaCorFundo);
    listaOrdenada.addEventListener("dblclick", riscaElemento);

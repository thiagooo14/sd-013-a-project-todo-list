let botaoApaga = document.querySelector("#apaga-tudo");

let botaoCriar = document.querySelector("#criar-tarefa");

let botaoLimpaFinalizados = document.querySelector("#remover-finalizados");

let botaoSalva = document.querySelector("#salvar-tarefas");

let listaOrdenada = document.querySelector("#lista-tarefas");

let meuStorage = localStorage;


function mudaCorFundo(event) {
    let temporario = event.target;
    document.querySelector('#selected').style.backgroundColor = 'white';
    document.querySelector('#selected').removeAttribute('id');
    temporario.style.backgroundColor = 'rgb(128, 128, 128)';
    temporario.id = 'selected';
}

function riscaElemento(event) {
    let temporario = event.target;
    temporario.classList.toggle('completed');
}

function removeFinalizados(){
    let listaTemporaria = document.querySelectorAll('.completed');
    for (let i = 0; i < listaTemporaria.length; i += 1){
        listaTemporaria[i].remove();
    }
    document.querySelector('.comum').id = 'selected'
}

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
    meuStorage.clear();
    window.location.reload();
}

function salvarTarefas() {
    let temporarioSave = document.querySelectorAll('li');
    for(let i = 0; i <temporarioSave.length; i+= 1){
        if (temporarioSave[i].className == ".selected"){
            localStorage.setItem(i,`Ç + ${temporarioSave[i]}`)
        }
        else {
        localStorage.setItem(i,temporarioSave[i].innerHTML);
        }
    }
}

   
    botaoApaga.addEventListener("click",apagaTudo);
    botaoCriar.addEventListener("click", addTarefa);
    botaoLimpaFinalizados.addEventListener("click", removeFinalizados)
    listaOrdenada.addEventListener("click", mudaCorFundo);
    listaOrdenada.addEventListener("dblclick", riscaElemento);
    botaoSalva.addEventListener("click", salvarTarefas)

    window.onload = function carregaListaSalva(){
        //window.alert(meuStorage.length)
        for (let i = 0 ; i < meuStorage.length; i += 1){
            let campoTexto = document.querySelector("#texto-tarefa").value;
            let lugarNaLista = document.querySelector("#lista-tarefas");
            let li = document.createElement('li');
            li.innerHTML = meuStorage[i];
            li.className = 'comum';
            lugarNaLista.appendChild(li);
            document.querySelector("#texto-tarefa").value = null;
        }
    }

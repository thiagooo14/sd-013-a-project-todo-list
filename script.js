let botaoApaga = document.querySelector("#apaga-tudo");

let botaoCriar = document.querySelector("#criar-tarefa");

let listaOrdenada = document.querySelector("#lista-tarefas");


//bloco do requerimento 7
//bloco do requerimento 7
// function carregaArrayLista() {
//     let listaArray = document.querySelectorAll('li');
//     for (let i = 0; i > listaArray.length ; i += 1 ) {
//         listaArray[i].addEventListener("dblclick", riscaElemento);
//         listaArray[i].addEventListener("click", mudaCorFundo);
//     }
//     return listaArray;
// }

function mudaCorFundo(event) {
    //let temporario = event.target.className
    //window.alert(temporario);
    event.target.className = "selected";
}

function riscaElemento() {
    window.alert('riscaelemento');
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
    // botaoCriar.addEventListener("click", carregaArrayLista)
    listaOrdenada.addEventListener("click", mudaCorFundo);

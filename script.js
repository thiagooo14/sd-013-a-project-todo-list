let botao = document.createElement('button');
let tasks = document.querySelector('#tasks');
let ol = document.createElement('ol');
let input = document.querySelector('#texto-tarefa');
let texto = '';
let botaoDelete = document.createElement('button');
let tools = document.querySelector('#tools');
let botaoFinalizados = document.createElement('button');

ol.id = 'lista-tarefas';
botao.id = 'criar-tarefa';
botao.innerText = 'Criar tarefa';
botaoDelete.id = 'apaga-tudo';
botaoDelete.innerText = 'Apagar tarefas';
botaoFinalizados.innerText = 'Remover finalizadas';
botaoFinalizados.id = 'remover-finalizados';
tools.appendChild(botaoDelete);
tools.appendChild(botaoFinalizados);
tasks.appendChild(botao);
tasks.appendChild(ol);


function criaLi() {
    let li = document.createElement('li');
    li.innerText = texto;
    li.className = 'item';
    ol.appendChild(li);
    input.value = '';
    texto = '';
}

function textoTarefa(event) {
    texto = event.target.value;
}

function mudaCor(event) {
    let li = document.getElementsByTagName('li');
    for (let i = 0; i < li.length; i += 1) {
        li[i].setAttribute('id', 'unselected');
    }
    event.target.id = 'selected';
}

function completed(event) {
    if (event.target.className === 'completed') {
        event.target.setAttribute('class', 'item');
    }
    else {
        event.target.className = 'completed';
    }
}

function apagar() {
    let li = document.querySelectorAll('.item')
    for (let i = 0; i < li.length; i += 1) {
        ol.removeChild(li[i]);
        
    }
}

function apagarFinalizados() {
    let finalizados = document.querySelectorAll('.completed');
    for (let i = 0; i < finalizados.length; i += 1) {
        ol.removeChild(finalizados[i]);
    }
}

botao.addEventListener('click', criaLi);
input.addEventListener('keyup', textoTarefa);
ol.addEventListener('click', mudaCor);
ol.addEventListener('dblclick', completed);
botaoDelete.addEventListener('click', apagar);
botaoFinalizados.addEventListener('click', apagarFinalizados);

let getButton = document.getElementById('criar-tarefa');
let input = document.getElementById('texto-tarefa');
let listaOrdenada = document.getElementById('lista-tarefas');
function addItemList() {
    getButton.addEventListener('click', function () {
        tarefa = document.createElement('li');
        listaOrdenada.appendChild(tarefa);
        if (document.getElementById('texto-tarefa').value !==""){
        let texto = document.getElementById('texto-tarefa').value;
        tarefa.innerText = texto;
        }
    })
}
addItemList();

function eraseText() {
    getButton.addEventListener('click', function () {
        document.getElementById('texto-tarefa').value = "";
    })
}
eraseText();

function selected() {
    lista = document.querySelector('ol');
    lista.addEventListener('click', function (event) {
        listas = document.getElementsByTagName('li');
        for (let i = 0; i < listas.length; i++) {
            listas[i].className = listas[i].className.replace('selected', '')//.replace verifica se contém a class 'selected' e a troca por ''.
        }
        event.target.className += ' selected'
    })
}
selected();

function riscarItem() {
    lista = document.querySelector('ol');
    lista.addEventListener('dblclick', function (event) {
        if (event.target.classList.contains('completed')) {
            event.target.className = event.target.className.replace('completed', '');
        } else {
            event.target.className += ' completed';
        }

    })
}
riscarItem()

function eraseAll() {
    let button = document.getElementById('apaga-tudo');
    button.addEventListener('click', function () {
        let listas = document.getElementById('lista-tarefas');
        listas.innerText = '';
    })
}
eraseAll();


// function eraseAll() {
//     let button = document.getElementById('apaga-tudo');
//     button.addEventListener('click', function () {
//     while (button.firstChild) {
//         button.removeChild(button.firstChild);
//     }
// })
// }
// eraseAll();

// function eraseAll() {
//     let button = document.getElementById('apaga-tudo');
//     button.addEventListener('click', function () {
//         let lista = document.querySelectorAll('li');
//         for (let i =lista.length-1; i>0; i-=1) {
//             lista[i].remove();
//         }
//     })
// }    
// eraseAll();

function removeCompleted() {
    button = document.getElementById('remover-finalizados');
    button.addEventListener('click',function () {
        lista = document.querySelectorAll('li')
        for (let i = 0; i < lista.length; i++) {
            const element = lista[i];
            if (element.classList.contains('completed')) {
                element.remove();
            }

        }
    })
}
removeCompleted();


function addItemList() {
    let input = document.getElementById('texto-tarefa');
    let getButton = document.getElementById('criar-tarefa');
    let listaOrdenada = document.getElementById('lista-tarefas');
    getButton.addEventListener('click', function () {
        tarefa = document.createElement('li');
        listaOrdenada.appendChild(tarefa);
        let texto = input.value;
        if (input.value !== "") {
            tarefa.innerText = texto;
        } else {
            alert('tarefa vazia!');
            tarefa.remove();
        }
    })
}
addItemList();

function eraseText() {
    let getButton = document.getElementById('criar-tarefa');
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
            listas[i].classList.remove('selected');
        }
        event.target.classList.add('selected');
    })
}
selected();

function riscarItem() {
    lista = document.querySelector('ol');
    lista.addEventListener('dblclick', function (event) {
        if (event.target.classList.contains('completed')) {
            event.target.classList.remove('completed');
        } else {
            event.target.classList.add('completed');
        }
    })
    lista.style.backgroundColor = "#eeede7";
    lista.classList.remove('selected');
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
    button.addEventListener('click', function () {
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

function saveTasks() {
    lista = document.getElementsByTagName('li');
    for (let i = 0; i < lista.length; i++) {
        const element = lista[i];
        element.addEventListener('click', save());
    }
}
function save() {
    lista = document.getElementsByTagName('li');
    let armazenamento = [];
    for (let i = 0; i < lista.length; i++) {
        const element = lista[i];
        armazenamento.push(element.innerText);
        var armazenamentoJson = JSON.stringify(armazenamento);
    }
    localStorage.setItem('savedtasks', armazenamento);
}
function removeSelected() {
    let button = document.getElementById('remover-selecionado');
    button.addEventListener('click', function () {
        let lista = document.querySelectorAll('li');
        for (let i = 0; i < lista.length; i++) {
            const element = lista[i];
            if (element.classList.contains("selected")) {
                element.remove();
            }
        }
    })
}
removeSelected();

// estilo CSS do id listComponents adquirido do site: https://stackoverflow.com/questions/40915850/css-ordered-list-styling-before-margins

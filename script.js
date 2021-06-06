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
    let button = document.getElementById('salvar-tarefas')
    button.addEventListener('click', function () {
        lista = document.getElementById('lista-tarefas');
        localStorage.setItem('savedtasks', lista.innerHTML);
    })
}
saveTasks();
lista = document.getElementById('lista-tarefas');
lista.innerHTML = localStorage.getItem('savedTasks');

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

lista = document.getElementById('lista-tarefas');
lista.innerHTML = localStorage.getItem('savedtasks');
// estilo CSS do id listComponents adquirido do site: https://stackoverflow.com/questions/40915850/css-ordered-list-styling-before-margins

function scrollDown() {
    listaOl = document.getElementById('lista-tarefas');
    let button = document.getElementById('salvar-tarefas');
    let button2 = document.createElement('button');
    button2.innerText = "down";
    button2.id = 'mover-baixo'
    button.after(button2);
    button2.addEventListener('click', function () {
        listas = document.querySelectorAll('li')
        for (let i = 0; i < listas.length-1; i++) {
            if (listas[i].classList.contains('selected')) {
                listaOl.insertBefore(listas[i+1],listas[i]);
                break;
            }

        }
    })
}
scrollDown();

function scrollUp() {
    listaOl = document.getElementById('lista-tarefas');
    let button = document.getElementById('mover-baixo');
    let button2 = document.createElement('button');
    button2.innerText = "up";
    button2.id = 'mover-cima'
    button.after(button2);
    button2.addEventListener('click', function () {
        listas = document.querySelectorAll('li')
        for (let i = 1; i < listas.length; i++) {
            if (listas[i].classList.contains('selected')) {
               listaOl.insertBefore(listas[i],listas[i-1])
                break; 
            }

        }
    })
}
scrollUp();

let getButton = document.getElementById('criar-tarefa');
let input = document.getElementById('texto-tarefa');
let listaOrdenada = document.getElementById('lista-tarefas');
function addItemList() {
    getButton.addEventListener('click', function () {
        tarefa = document.createElement('li');
        listaOrdenada.appendChild(tarefa);
        let texto = document.getElementById('texto-tarefa').value;
        tarefa.innerText = texto;
    })
}
addItemList();

function eraseText() {
    getButton.addEventListener('click', function () {
        document.getElementById('texto-tarefa').value = "";
    })
}
eraseText();

function changeColorList() {
    let listas = document.querySelector('ol');
    listas.addEventListener('click', function (event) {
            event.target.style.backgroundColor = 'rgb(128,128,128)';
    })
}
changeColorList();

console.log(document.getElementById('texto-tarefa').value)
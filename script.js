const title = document.querySelector('#titulo');
title.innerHTML = 'Minha Lista de Tarefas';

const operation = document.querySelector('#funcionamento');
operation.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';

const buttonInsert = document.querySelector('#criar-tarefa');
buttonInsert.innerHTML = 'Inserir Tarefa';

const taskText = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');

function insert() {
    const task = document.createElement('li');
    task.innerHTML = taskText.value;
    taskList.appendChild(task);
    taskText.value = '';
}

function listenClick() {
    buttonInsert.addEventListener('click', insert);
}
listenClick();

function backgroundGray(x) {
    if (document.querySelector('.gray') === null) {
        x.target.classList.add('gray');
        document.querySelector('.gray').style.backgroundColor = 'rgb(128, 128, 128)';
    } else {
        document.querySelector('.gray').style.backgroundColor = 'rgb(255, 255, 255)';
        document.querySelector('.gray').classList.remove('gray');
        x.target.classList.add('gray');
        document.querySelector('.gray').style.backgroundColor = 'rgb(128, 128, 128)';
    }
}
taskList.addEventListener('click', backgroundGray);

function lineThrough(y) {
    if (y.target.classList.contains('completed') === true) {
        y.target.classList.remove('completed');
    } else {
        y.target.classList.add('completed');
    }
}
taskList.addEventListener('dblclick', lineThrough);

const list = document.querySelector('#lista-tarefas');
const buttonDelete = document.querySelector('#apaga-tudo');
buttonDelete.innerHTML = 'Apague Tudo';

function del() {
    list.innerText = '';
    document.querySelector('#selected');
}
buttonDelete.addEventListener('click', del);

const buttonRemove = document.querySelector('#remover-finalizados');
buttonRemove.innerHTML = 'Remova Finalizados';

function remove() {
    const allCompleted = document.querySelectorAll('.completed');
    for (let i = 0; i < allCompleted.length; i += 1) {
        allCompleted[i].remove();
    }
    document.querySelector('.completed');
}
buttonRemove.addEventListener('click', remove);
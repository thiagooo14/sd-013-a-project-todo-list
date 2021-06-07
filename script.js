// como recuperar valor do input -> https://www.youtube.com/watch?v=bC5Mp37L5hA
let button = document.querySelector('#criar-tarefa');

button.addEventListener('click', function(){
    let input = document.querySelector('#texto-tarefa');
    let value = input.value;
    //alert(value);

    //crio a Li e recupero o OL
    let listLI = document.createElement('li');
    let listOL = document.querySelector('#lista-tarefas');

    //Insiro o valor que recuperei na LI que foi criada e do um append na OL
    listLI.innerText = value;
    listOL.appendChild(listLI);
    input.value = '';
});



// como recuperar valor do input -> https://www.youtube.com/watch?v=bC5Mp37L5hA
let button = document.querySelector('#criar-tarefa');

button.addEventListener('click', function(){
    let input = document.querySelector('#texto-tarefa');
    let value = input.value;

    //crio a Li e recupero o OL
    let listLI = document.createElement('li');
    let listOL = document.querySelector('#lista-tarefas');

    //Insiro o valor que recuperei do input na li que foi criada e do um append na OL
    listLI.innerText = value;
    listOL.appendChild(listLI);

    input.value = '';
    
    //insere bg ao clicar no LI

    listLI.addEventListener('click', ()=> {
        switch (listLI.style.backgroundColor) {
            case "":
                removeBG();
                listLI.style.backgroundColor = "rgb(128,128,128)";
                break;
        
            default:
                removeBG();
                listLI.style.backgroundColor = "";
                break;
        };
    });

    listLI.addEventListener('dblclick', function(){
        listLI.classList.add('completed');
    });
});

//remove todos os backgrounds das li


function removeBG() {
    let lis = document.querySelectorAll('li');
    for (let i = 0; i<lis.length; i+=1) {
        lis[i].style.backgroundColor="";
    };
};

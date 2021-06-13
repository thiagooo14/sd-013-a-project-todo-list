// como recuperar valor do input -> https://www.youtube.com/watch?v=bC5Mp37L5hA
let button = document.querySelector('#criar-tarefa');
let olList = document.getElementById('lista-tarefas');
let lis = document.getElementsByTagName('li');

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

    listLI.addEventListener('click', function () {
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

    // insere a classe select na li
    listLI.addEventListener('click', function () {
        switch (listLI.classList.contains('select')) {
            case true:
                console.log("tem a classe select")
                break;
        
            default:
                removeAllSelect();
                console.log("nao tem a classe select");
                listLI.classList.add('select');
                break;
        };
    });
});

//remove todos os backgrounds das li
function removeBG() {
    for (let i = 0; i<lis.length; i+=1) {
        lis[i].style.backgroundColor="";
    };
};


function risk() {
    olList.addEventListener('dblclick', function(event) {
        if(event.target.classList.contains('completed')) {
            event.target.classList.remove('completed');
        } else {
            event.target.classList.add('completed');
        };
    });
};

//enquanto a UL tiver filho, ira remover o primeiro filho. https://stackoverflow.com/questions/18795028/javascript-remove-li-without-removing-ul
function exclude() {
    let button = document.getElementById('apaga-tudo');
    button.addEventListener('click', function(){
        while (olList.firstChild) {
            olList.removeChild(olList.firstChild);
          };
    });
};

function excludeDone(){
    let button = document.getElementById('remover-finalizados');

    button.addEventListener('click', function(){
        let liDone = document.querySelectorAll('.completed');
        for (let i =0; i<liDone.length; i+=1){
            olList.removeChild(liDone[i]);
        };
    });
};

function removeSelect(){
    let button = document.getElementById('remover-selecionado');
    button.addEventListener('click', function(){
        let removeLi = document.querySelector('.select');
        removeLi.remove();
    });
};

risk();
exclude();
excludeDone();
removeSelect();

function removeAllSelect(){
    for(let i = 0; i <lis.length; i +=1){
        if(lis[i].classList.contains('select')){
            lis[i].classList.remove('select');
        };
    };
};
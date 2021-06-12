window.onload = function() {

    function taskList() {
        const contentTask = document.getElementById('texto-tarefa');
        const contentList = document.getElementById('lista-tarefas');
        const listItem = document.createElement('li');
        const liExistentes = document.querySelectorAll('li');
        listItem.id = liExistentes.length + 1; 
        if (contentTask.value.indexOf(' ') === 0 || contentTask.value === '') {
           alert('Campo não preenchido');
           contentTask.focus();
        }else {
          listItem.textContent = contentTask.value;
           contentList.appendChild(listItem);
           contentTask.value = '';
           contentTask.focus();
        }
     }
    function clickSelect() {
         const clickBoton = document.getElementById('criar-tarefa');
         clickBoton.addEventListener('click', taskList); 
     }
    clickSelect();
    function corNoClick() {
        const clickLista = document.getElementById('lista-tarefas');
        clickLista.addEventListener('click', function (event) {
            cliqueLista(event.target.id);              
        })
    }
    corNoClick();
    function cliqueLista(fundoCinza) {
        let todasLis = document.querySelectorAll('li');
            for (let i = 0; i < todasLis.length; i+=1) {   
                if (todasLis[i].id === fundoCinza){ 
                    const color = document.getElementById(todasLis[i].id)
                    color.classList.add('corDaselecao'); 
                }else{
                    const color = document.getElementById(todasLis[i].id)
                    color.classList.remove('corDaselecao');
                }   
            }
    }
    function doubleClick() {
        const doubleClick = document.getElementById('lista-tarefas');
        doubleClick.addEventListener('dblclick', function (event) {
            clickDuplo(event.target.id);      
        })
    }
    doubleClick();

    function clickDuplo(id) {
        const A = document.getElementById(id).className;
        if (A.indexOf('completed') !== -1) {
            document.getElementById(id).classList.remove('completed');
        }else{
                document.getElementById(id).classList.add('completed');
        }  
    }      
} 
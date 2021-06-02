let button = document.createElement('button');
button.id = 'criar-tarefa';
posicaoBotao1 = document.querySelector('#section-text');
button.innerHTML = "Adicionar";
posicaoBotao1.appendChild(button);
let tarefas = document.querySelectorAll('.tasks');

function adicionarLista(){    
    let listaTarefa = document.getElementById('lista-tarefas');
    button.addEventListener('click', function(){
        let texto = document.getElementById('texto-tarefa').value;
        let lista = document.createElement('li');
        lista.classList.add('tasks');
        listaTarefa.appendChild(lista);
        lista.innerHTML = texto;
        document.getElementById('texto-tarefa').value = '';      
    })
}
console.log(tarefas);

function liFundo(){
    for(let index = 0; index < tarefas.length; index += 1){
        tarefas[index].addEventListener('click', function(){
            tarefas[index].style.backgroundColor = 'rgb(128, 128, 128)';
        })
    }
}


adicionarLista();
liFundo();
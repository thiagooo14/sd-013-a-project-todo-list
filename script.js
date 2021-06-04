

window.onload


function adicionar (){
    let valorInput = document.querySelector('#texto-tarefa').value;
    let botao = document.querySelector('#criar-tarefa');
    let adicionaItemL = document.querySelector('#lista-tarefas');
    let item = document.createElement('li');
    if (valorInput !== ""){
            adicionaItemL.appendChild(item).innerHTML = valorInput;
            document.querySelector('input').value = null;
             
         
    } 
    

}
adicionar();

function itemSelecionado(e) {
    e.target.style.backgroundColor = 'gray';
        
    
    


  
    
}

let lis = document.querySelectorAll('li');
    for (let index = 0; index < lis.length; index++) {
        lis[index].addEventListener('click', itemSelecionado);
        
    }
    




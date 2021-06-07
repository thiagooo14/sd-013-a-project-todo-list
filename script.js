function adicionar (){
    let valorInput = document.querySelector('#texto-tarefa').value;
    let adicionaItemL = document.querySelector('#lista-tarefas');
    let item = document.createElement('li');
    item.style.border = '1px solid black';
    item.classList.add('none');
    item.addEventListener('dblclick',riscar)
    item.addEventListener('click',selecionado);
    if (valorInput !== ""){
            adicionaItemL.appendChild(item).innerHTML = valorInput;
            document.querySelector('input').value = null;
             
         
    } 
    

}
adicionar();

function riscar(e) {
    e.target.classList.toggle('completed')
}

function selecionado (e){
    let todosItem = document.querySelectorAll('li');
      for (let index = 0; index < todosItem.length; index +=1){
          todosItem[index].classList.remove('selectedClass');
          e.target.classList.add('selectedClass');}
}

function apagaTudo() {
    
    document.body.removeChild(document.body.querySelector("ol"));
}

function removeRis() {
    let selecionados = document.querySelectorAll('.completed')
    for (let index = 0; index < selecionados.length; index += 1) {
        selecionados[index].parentNode.removeChild(selecionados[index]);
        
    }
}

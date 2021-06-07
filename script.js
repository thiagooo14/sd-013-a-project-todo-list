function riscar (e){
    
}







function adicionar (){
    let valorInput = document.querySelector('#texto-tarefa').value;
    let botao = document.querySelector('#criar-tarefa');
    let adicionaItemL = document.querySelector('#lista-tarefas');
    let item = document.createElement('li');
    item.style.border = '1px solid black';
    item.classList.add('none');
    item.addEventListener('click',function(e){
      let todosItem = document.querySelectorAll('li');
      for (let index = 0; index < todosItem.length; index +=1){
          todosItem[index].classList.remove('selectedClass');
          e.target.classList.add('selectedClass');
      }
       item.addEventListener('dblclick',function(event){
          
            
            e.target.classList.toggle('completed');
           
       }) 
    });
    if (valorInput !== ""){
            adicionaItemL.appendChild(item).innerHTML = valorInput;
            document.querySelector('input').value = null;
             
         
    } 
    

}
adicionar();


      

    
      
     


      function tarefaFinalizada() {
        const lis = document.querySelectorAll('li');
        for (let index = 0; index < lis.length; index++) {
            lis[index].addEventListener('dbclick', function(event){
                event.target.classList.add('completed');
            })
            
        }
      }
      tarefaFinalizada();
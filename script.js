  function req5() {

    let teste2 = document.querySelector('#criar-tarefa');

    teste2.addEventListener("click", function() {

    let teste = document.querySelector('#texto-tarefa').value;
    let teste3 = document.createElement('li');
    teste3.innerHTML = teste;
    teste3.className = 'task';
    
    document.querySelector('#lista-tarefas').appendChild(teste3);
    
    document.querySelector('#texto-tarefa').value = "";
    })

    
  } 
req5();

function req7() {
  let tarefas = document.querySelector('#lista-tarefas');
  let gray = '';
  tarefas.addEventListener('click', (event) => {
    if (gray === ''){
      event.target.classList.add('gray');
      gray = document.querySelector('.gray');
     
    } else {
      gray.classList.remove('gray');
      event.target.classList.add('gray');
      gray = document.querySelector('.gray');
    }

  })
}
req7();

function req9(){
let tarefas = document.querySelector('#lista-tarefas');
let completed = '';
tarefas.addEventListener('dblclick', (event) => {
 
    event.target.classList.add('completed');
    completed = document.querySelector('.completed');
})}

// function req92(){
//   let tarefas = document.querySelector('#lista-tarefas');

//   tarefas.addEventListener('dblclick', (event) => {
//     if (event.target.className === 'completed') {
//       tarefas.innerHTML = '';
//     }
// })
  
// }

req9();

// req92();

function req10() {
  const lista = document.querySelector('#lista-tarefas');
  const clear = document.querySelector('#apaga-tudo');

  clear.addEventListener('click', () => {
    lista.innerHTML = '';
  })

}

req10();

// function req11(){
//   let buttoon = document.querySelector('#remove-finalizados');
//   let remove = document.querySelectorAll('.completed');
//   let tarefas = document.querySelector('#lista-tarefas');

//   buttoon.addEventListener('click',function(){

//   for (let i = 0; i < remove.length; i +=1) {  
//       tarefas.removeChild(remove[i]);
//   }
// })
// }

// req11();


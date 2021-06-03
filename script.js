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
      // gray.style.cssText = 'background-color : rgb(128,128,128);'
    } else {
      gray.classList.remove('gray');
      event.target.classList.add('gray');
      gray = document.querySelector('.gray')
    }

  })
}
req7();




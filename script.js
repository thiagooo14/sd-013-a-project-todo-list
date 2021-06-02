  function req5() {

    let teste2 = document.querySelector('#criar-tarefa');

    teste2.addEventListener("click", function() {

    let teste = document.querySelector('#texto-tarefa').value;
    let teste3 = document.createElement('li');

    teste3.innerHTML = teste;
    
    document.querySelector('#lista-tarefas').appendChild(teste3);
    
    document.querySelector('#texto-tarefa').value = "";
    })

    
  }
req5();

// function clear() {

// }





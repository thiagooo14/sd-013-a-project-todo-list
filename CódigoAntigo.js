const btnAdd = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');
const inputText = document.getElementById('texto-tarefa');

// Botão para adicionar:
btnAdd.addEventListener('click', function () {
  const itemList = document.createElement('li');
  itemList.innerText = inputText.value;
  lista.appendChild(itemList);
  inputText.value = "";

  // Evento para pintar o fundo do texto:
  let liList = document.getElementsByTagName('li');

  for (let i = 0; i < liList.length; i += 1) {
    liList[i].addEventListener('click', function () {
      for (let j = 0; j < liList.length; j += 1) {
        liList[j].style.backgroundColor = 'white';
      }
      liList[i].style.backgroundColor = 'rgb(128,128,128)';
    })
  };

    const listaOl = document.getElementById('lista-tarefas');
    listaOl.addEventListener('dblclick', function (event) {
    event.target.classList.toggle('completed');
  })

  // Botão para limpar lista:
  const btnLimpa = document.getElementById('apaga-tudo');
    btnLimpa.addEventListener('click', function () {
    document.location.reload();
  })

  const btnLimpaFinalizados = document.getElementById('remover-finalizados')
  
    btnLimpaFinalizados.addEventListener('click', function (){
    const removeFinalizados = document.getElementsByClassName('completed')
    for (let i = 0; i < removeFinalizados.length; i += 1){
    let removeItem = document.getElementById('lista-tarefas')
      while (removeFinalizados.length > 0) {
        removeItem.removeChild(removeFinalizados[i])
      }
  }
})
});


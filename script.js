function criarLista() {
  //pega o botão para o evento de click
  let btnAdd = document.querySelector
  ('#criar-tarefa');
  btnAdd.addEventListener('click', function() {
  //pegar a ol
  let lista = document.querySelector('#lista-tarefas');
  //criar a li
  let li = document.createElement('li');
  // pegar o input(o valor do que vai ser escrito)
  let texto = document.querySelector('#texto-tarefa');
  li.innerHTML = texto.value
  texto.value = '';
  //criar a lista no HTML
  lista.appendChild(li);
  });
}

criarLista();

function backgroundChange(){
  let listaOl = document.querySelector('#lista-tarefas');
  let listaLi = document.getElementsByTagName('li')

  listaOl.addEventListener('click', (evento) =>{
    for(let i = 0; i < listaLi.length; i ++){
      let li = listaLi[i];
      li.style.bagroundColor='red'
      li.style.backgroundColor='';
    }
    evento.target.style.backgroundColor='red'

  })
}
backgroundChange();


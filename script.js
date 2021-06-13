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

  //criar a lista no HTML
  lista.appendChild(li);

  texto.value = '';
  })
}

criarLista();

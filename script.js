function listaOrdenada() {
  let listaTarefas = document.getElementById('lista-tarefas');
  for (let i = 0; i < 10; i += 1) {
    let lista = document.createElement('li');
    listaTarefas.appendChild(lista);
  }
}
listaOrdenada();
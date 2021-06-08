function addTarefa(){
  const listaTarefas = document.getElementById('lista-tarefas');
  const textoTarefa = document.getElementById('texto-tarefa');
  const botao = document.querySelector('#criar-tarefa');

  botao.addEventListener("click", (() => {
    let texto = textoTarefa.value
    if(textoTarefa === ""){
      alert ("texto inválido");
      return;
    }
    const li = document.createElement('li');
    listaTarefas.appendChild(li);
    li.innerText = texto;

    textoTarefa.value = "";        // retorna o input limpo 
    textoTarefa.focus();          // continua com o cursor no input
  }))
}
addTarefa()
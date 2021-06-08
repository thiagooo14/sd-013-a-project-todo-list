function addTarefa(){
  const listaTarefas = document.getElementById('lista-tarefas');
  const textoTarefa = document.getElementById('texto-tarefa');
  const botao = document.querySelector('#criar-tarefa');

  botao.addEventListener("click", (() => {
    let texto = textoTarefa.value
    if(texto === ""){
      alert ("Erro, texto inválido");
      return;
    }
    const li = document.createElement('li');
    listaTarefas.appendChild(li);
    li.innerText = texto;

    textoTarefa.value = "";        // retorna o input limpo 
    textoTarefa.focus();          // continua com o cursor no input

    li.addEventListener('dblclick',(event) =>{
      event.target.classList.toggle('completed')
    })
  }))
}
addTarefa()

function color(){
  const li = document.getElementsByTagName('li');
  const ol = document.querySelector('ol');
  ol.addEventListener("click", (event) => {
    for(let i = 0; i < li.length; i += 1){
      let lis = li[i];
      lis.style.backgroundColor = "";
    }
    event.target.style.backgroundColor = "rgb(128,128,128)"
  })
}
color()

function apagaTudo(){
const botaoApaga = document.getElementById('apaga-tudo');
const ol = document.querySelector('ol');
const li = document.querySelector('li');

botaoApaga.addEventListener("click", (() => {
    ol.innerHTML = null; // remove todos os itens dentro da "ol"
}))

}
apagaTudo()
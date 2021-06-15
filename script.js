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


  }))
  
}
addTarefa()

const inputEnter = () =>{
  const listaTarefas = document.getElementById('lista-tarefas');
  const textoTarefa = document.getElementById('texto-tarefa');

  textoTarefa.addEventListener('keyup', (event) => {
    if(event.keyCode === 13 && textoTarefa.value.length > 0){
      let texto = textoTarefa.value;
      const li = document.createElement('li');
      listaTarefas.appendChild(li);
      li.innerText = texto;
      textoTarefa.value = "";
    }
  })
}
inputEnter()

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

function riscarLi(){
  const ol = document.querySelector('ol');

  ol.addEventListener('dblclick', (event)=>{
    if(event.target.classList.contains('completed')){
      event.target.classList.remove('completed');
    }else{
      event.target.classList.add('completed');
    }
  })

}
riscarLi()

function apagaTudo(){
const botaoApaga = document.getElementById('apaga-tudo');
const ol = document.querySelector('ol');
// const li = document.querySelector('li');

botaoApaga.addEventListener("click", (() => {
    ol.innerHTML = null; // remove todos os itens dentro da "ol"
}))

}
apagaTudo()

const removeItens = () => {
  const botaoRemoveFin = document.getElementById('remover-finalizados');
  
  botaoRemoveFin.addEventListener('click', () => {
    const tarefaCompleted = document.querySelectorAll('.completed');
    const ol = document.getElementById('lista-tarefas');
    for(let i = 0; i < tarefaCompleted.length; i += 1){
      ol.removeChild(tarefaCompleted[i]);
    }
  })
}
removeItens()

const salvarTarefas = () => {
  const botaoSalvarTaf = document.getElementById('salvar-tarefas');
  const ol = document.getElementById('lista-tarefas')
  botaoSalvarTaf.addEventListener('click', () => {
    
    localStorage.setItem("tasks", ol.innerHTML);
  });
}
salvarTarefas()
window.onload = () => {
  const ol = document.getElementById('lista-tarefas')
  if(localStorage.getItem("tasks") !== null){
    ol.innerHTML += localStorage.getItem("tasks");
  }
}

// const upButton = () => {
//   const getUpButton = document.getElementById('mover-cima');
//   const liSelect = document.getElementsByTagName('.select');
// }
function criarLista() {
  let btnAdd = document.querySelector ('#criar-tarefa');
  btnAdd.addEventListener('click', function() {
  let lista = document.querySelector('#lista-tarefas');
  let li = document.createElement('li');
  let texto = document.querySelector('#texto-tarefa');
  li.innerHTML = texto.value;
  texto.value = '';
  texto.focus();
  lista.appendChild(li);
  });
}

criarLista();

function backgroundChange() {
  let listaOl = document.querySelector('#lista-tarefas');
  let listaLi = document.getElementsByTagName('li');

  listaOl.addEventListener('click', (evento) => {
    for (let i = 0; i < listaLi.length; i ++) {
      let li = listaLi[i];
      li.style.backgroundColor = 'rgb(128,128,128)';
      li.style.backgroundColor = '';
    }
    evento.target.style.backgroundColor = 'rgb(128,128,128)';
  })
}
backgroundChange();

function doubleClick(){
let ol = document.querySelector("ol");
ol.addEventListener("dblclick", (event) => {
  
  if (event.target.classList.contains("completed")) {
    event.target.classList.remove("completed")
  } else {
    event.target.classList.add("completed")
   } 
} )
}
doubleClick();

function apagarTudo() {
  let btnApagar = document.querySelector('#apaga-tudo');
  btnApagar.addEventListener('click', () => {
    document.querySelector('ol').innerHTML = '';
  })
}
apagarTudo();

const butonAdd = document.querySelector("#criar-tarefa");
const list = document.querySelector("#lista-tarefas");
const texto = document.querySelector("#texto-tarefa");
const li = document.getElementsByTagName("li");
const butonApagar = document.querySelector("#apaga-tudo");
const butonSalvar = document.querySelector("#salvar-tarefas");

function criarTarefa(){
  butonAdd.addEventListener('click', (event) => {
    const li = document.createElement('li')
    const lista = texto.value
   if(lista.length > 0){
  li.innerText = lista
  list.appendChild(li)
  texto.value = ""
 }
 });
} criarTarefa()

function changeColor(){
  list.addEventListener("click", (event) =>{
    for (let index = 0; index < li.length; index++) {
    li[index].classList.remove("estilo")

    }event.target.classList.add("estilo");
  })

} changeColor()

function riscar(){
 list.addEventListener('dblclick', (event) =>{
   event.target.classList.toggle("completed")
 } )
} riscar()

function apagar(){
butonApagar.addEventListener("click", () => {
  while(li.length>0){
    for (let index = 0; index < li.length; index+=1) {
      const filho = li[index]; 
      list.removeChild(filho);
      }     
    }
})
}apagar()

if(localStorage.lista)
{document.querySelector("#lista-tarefas").innerHTML = localStorage.lista}
function salvar(){
butonSalvar.addEventListener("click", () => {
  const crhomeList = list.innerHTML
  localStorage.setItem("lista", crhomeList)
})
}salvar () 
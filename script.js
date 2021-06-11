let button = document.getElementById("criar-tarefa");
function addLines(){
    
    let novaLine = document.createElement("li")
    let texto =  document.getElementById("texto-tarefa");
    let ol = document.querySelector("#lista-tarefas");
   
    novaLine.innerText = texto.value
    ol.appendChild(novaLine)
    texto.value = ""
 }button.addEventListener("click", addLines);

function desafio1() {
    let h1 = document.createElement("h1")  // somente criar 
    h1.innerText = "Minha Lista de Tarefas";
    let header = document.createElement("header")
    header.appendChild(h1)
    document.body.appendChild(header)  // adiciona no body
}
desafio1()

function desafio2() {
    let p = document.createElement("p");
    p.innerText = "Clique duas vezes em um item para marcá-lo como completo"
    p.setAttribute("id", "funcionamento")
    let header = document.querySelector("header")
    header.appendChild(p)
}
desafio2()

function desafio3() {
    let input = document.createElement("input");
    input.setAttribute("id", "texto-tarefa");
    input.setAttribute("type", "input");  // chave, valor
    let div = document.createElement("div");
    div.appendChild(input);
    let body = document.querySelector("body");
    body.appendChild(div);
}
desafio3()

function desafio4(){
    let ol = document.createElement("ol");
    ol.setAttribute("id", "lista-tarefas");
    let body = document.querySelector("body");
    body.appendChild(ol);
}
desafio4()

function desafio5() {
    let button = document.createElement("button");
    button.setAttribute("id", "criar-tarefa");
    button.innerHTML = "Adicionar"
    let div = document.querySelector("div")
    let textoTarefa = document.querySelector("#texto-tarefa")
     div.appendChild(button);
     let ol = document.querySelector("#lista-tarefas")

     button.addEventListener("click", (() => {
     let texto = textoTarefa.value    // value = o valor que é adicionado no input.
     let li = document.createElement("li") // sincrono, não precisa do if. mas poderia ter o if
     li.innerText = texto
     ol.appendChild(li)      
     textoTarefa.value = "";
     
     }))
}
desafio5()
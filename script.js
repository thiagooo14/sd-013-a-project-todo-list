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
function desafio1() {
    let h1 = document.createElement("h1")  // somente criar 
    h1.innerText = "Minha Lista de Tarefas";
    let header = document.createElement("header")
    header.appendChild(h1)
    document.body.appendChild(header)  // adiciona no body
}
desafio1()


function desafio1() {          // ajuda para desenvolver o projet: Greg, Aline, Leme -turma13A 
    let h1 = document.createElement("h1")             // somente criar 
    h1.innerText = "Minha Lista de Tarefas";          //adciiona texto no h1
    let header = document.createElement("header")     // cria elemento header
    header.appendChild(h1)             //adiciona elelmento h1 a um pai, através do pai, header
    document.body.appendChild(header)                 // adiciona header no body
}
desafio1()

function desafio2() {
    let p = document.createElement("p");
    p.innerText = "Clique duas vezes em um item para marcá-lo como completo"
    p.setAttribute("id", "funcionamento")   //dois parametros = atributo, nome.
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
     let texto = textoTarefa.value 
         if (textoTarefa.value === "") {
             alert("valor inválido")
            return
         }
        
     let li = document.createElement("li") 
     li.innerText = texto
     ol.appendChild(li) 
     textoTarefa.value = ""; 
     textoTarefa.focus();    // focus= mantem o input selecionado.  

                                    //A questão 6 foi resolvida, na 5. A partir
     
     }))
}
desafio5()

//function desafio6(){
//}                     //desafio 6 resolvido no 5
//desafio6

function desafio7(){
  let liS = document.getElementsByTagName("li");
  let ol = document.querySelector("ol"); 
  ol.addEventListener("click", (event) => {  //
   for ( let i= 0; i < liS.length; i +=1) {
       let li = liS[i]
       li.style.backgroundColor = "";
            
   } 
   event.target.style.backgroundColor = "rgb(128,128,128)";  // no ex:7, resolve o desafio8
   

  })
  
}
desafio7()

function desafio9(event) {

    //let lis =document.getElementsByTagName("li")
     //   console.log(lis)
      //  for (let i= 0; i < lis.length; i +=1) {
       //     let li = lis[i];  
         //   li.addEventListener("dblclick", (event) =>{
          //  console.log(event.target);

       //    } ) 
        // }
    //event.target.setAttribute("class", "completed") // if
    //event.target.classList.toggle("completed")  // interruptor (liga-desliga)
    
    
    let evento = event.target.style.textDecoration;
    if ( evento == "line-through") {
        event.target.style.textDecoration = 'none';
        
    
    } else { 
        event.target.style.textDecoration = "line-through"; 
    }
                 

}
let olol = document.querySelector("#lista-tarefas")
 olol.addEventListener("dblclick", desafio9 )







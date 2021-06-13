function desafio1() {          // ajuda para desenvolver o projet: Greg, Aline, Leme -turma13A 
    let h1 = document.createElement("h1")             // somente criar 
    h1.innerText = "Minha Lista de Tarefas";          //adiciona texto no h1
    let header = document.createElement("header")     // cria elemento header
    header.appendChild(h1)             //adiciona elelmento h1 a um pai, através do pai, header
    document.body.appendChild(header) 
    h1.style.backgroundColor="white"              // adiciona header no body
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

function desafio4() {
    let ol = document.querySelector("ol");
    let div = document.querySelector("div")
    div.appendChild(ol)
    //article.appendChild(ol)
    //let div2 = document.createElement("div")
    //div2.setAttribute("id", "listaGeral")
    //let div = document.getElementsByTagName("div")[0]
    
    //div2.appendChild(ol)
    //document.body.appendChild(ol)
   
}
desafio4()

function desafio5() {
    
     let div = document.querySelector("div")
     let textoTarefa = document.querySelector("#texto-tarefa")
     
     let criarTarefa = document.getElementById("criar-tarefa")
     div.appendChild(criarTarefa)
     let ol = document.querySelector("#lista-tarefas")

     criarTarefa.addEventListener("click", (() => { 
     let texto = textoTarefa.value 
         if (textoTarefa.value === "") {
             alert("valor inválido")
            return
         }
        
     let li = document.createElement("li") 
     li.innerText = texto
     ol.appendChild(li)
     div.appendChild(ol) 
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
  ol.addEventListener("click", (event) => {  
   for ( let i= 0; i < liS.length; i +=1) {
       let li = liS[i]
       li.style.backgroundColor = "";
            
   } 
   event.target.style.backgroundColor = "rgb(128,128,128)";  // no ex:7, resolve o desafio8
   

  })
  
}
desafio7()

 const desafio9 = () => {

    //let lis =document.getElementsByTagName("li")
     //   console.log(lis)
      //  for (let i= 0; i < lis.length; i +=1) {
       //     let li = lis[i];  
         //   li.addEventListener("dblclick", (event) =>{
          //  console.log(event.target);

       //    } ) 
        // }
     // if
    
     //event.target.classList.toggle("completed")  // interruptor (liga-desliga)
     const ol = document.querySelector("ol")
     ol.addEventListener("dblclick", (event) => {
         if (event.target.classList.contains("completed")) {      //se o evento tiver a classe completed
          event.target.classList.remove("completed")
          
        } else {
            event.target.classList.add("completed")
        } 
           
     } )
       
}
 desafio9()


 function desafio10() {
          
     let apagaTudo = document.getElementById("apaga-tudo");
     let div = document.querySelector("div");
     div.appendChild(apagaTudo);
     let ol = document.querySelector('ol');
     let li = document.querySelector("li");
     
     apagaTudo.addEventListener('click', () => {
             
        ol.innerText = null
        //ol.remove(li);
            
     })
     } 
     desafio10()  
     
     //let tarefas = document.querySelector("#texto-tarefa")
       // tarefas = tarefas.value
          //tarefas = texto-tarefa.value
        // if (tarefas != ""){
         // tarefas.value = "";
        //}

        function desafio11() {
         let removerFinal = document.getElementById("remove-finalizados")
         let div = document.querySelector("div");
         div.appendChild(removerFinal);
            removerFinal.addEventListener('click', () => {
             let finalizados = document.querySelectorAll(".completed")
             let ol = document.querySelector("ol")
             for ( let i= 0; i < finalizados.length; i += 1){
             ol.removeChild(finalizados[i])
            }
        })
    }
                 
     desafio11()

     function desafio12() {
         let salvarTarefas = document.querySelector("#salvar-tarefas");
         let div = document.getElementsByTagName('div')[0];
         div.appendChild(salvarTarefas);
         let ool = document.querySelector("ol");
           
          salvarTarefas.addEventListener("click", () =>{
           localStorage.setItem("salvo", ool.innerHTML) //chave valor: "salvo" & ool
          })
     }
     window.onload = () =>{
         let ool = document.querySelector("ol")
         if (localStorage.getItem("salvo") !== null) {
          ool.innerHTML += localStorage.getItem("salvo")
         }
     }
     
     
     desafio12()

         
     
     
 
 







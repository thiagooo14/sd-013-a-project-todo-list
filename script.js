    let textoDigitado = document.getElementById('texto-tarefa');
    let botao = document.getElementById('criar-tarefa');
    let lista = document.getElementById('lista-tarefas');
    let item = document.getElementsByClassName('lista');

    function adicionarTarefa() {
      let li = document.createElement('li');
      li.classList = 'lista';
      li.innerText = textoDigitado.value;
      li.addEventListener('click', paintBack);
      lista.appendChild(li);
      textoDigitado.value = ' ';
      
    }
    function paintBack(event) {
      
      for(let i =0; i < item.length; i += 1){
      item[i].classList.remove('selected');
      }
      event.target.classList.add('selected'); 
    }  
    
    botao.addEventListener('click', adicionarTarefa);
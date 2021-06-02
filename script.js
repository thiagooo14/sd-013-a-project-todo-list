let textoDigitado = document.getElementById('texto-tarefa');
    let botao = document.getElementById('criar-tarefa');
    let lista = document.getElementById('lista-tarefa');
    let item = document.querySelectorAll('li');

    function adicionarTarefa() {
      let li = document.createElement('li');
      li.innerText = textoDigitado.value;
      lista.appendChild(li);
      textoDigitado.value = ' ';
    }
    // item[0].addEventListener('click', pintaBack);

    // function pintaBack(event) {
    //   item.classList.remove('itemLista');
    //   event.target.classList.add('itemLista');
    // }

    botao.addEventListener('click', adicionarTarefa);

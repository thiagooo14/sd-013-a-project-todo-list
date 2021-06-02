let textoDigitado = document.getElementById('texto-tarefa');
    let botao = document.getElementById('criar-tarefa');
    let lista = document.getElementById('lista-tarefas');
    let item = document.getElementsByClassName('liList');

    function adicionarTarefa() {
      let li = document.createElement('li');
      li.innerText = textoDigitado.value;
      lista.appendChild(li);
      li.classList = 'liList';
      textoDigitado.value = ' ';
    }

    function paintBack() {
      for (let i in item) {
        item[i].addEventListener('click', (el) => {
          el.target.style.backgroundColor = 'red';
        });
      }
    }
  botao.addEventListener('click', adicionarTarefa);


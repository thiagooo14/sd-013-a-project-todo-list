const btnAdd = document.getElementById('criar-tarefa');
const listaOl = document.getElementById('lista-tarefas');
const inputText = document.getElementById('texto-tarefa');
const listaLi = document.getElementsByTagName('li');

// Botão adicionar:
function botaoAdicionar() {
  const itemList = document.createElement('li');
  itemList.innerText = inputText.value;
  listaOl.appendChild(itemList);
  inputText.value = '';
}
btnAdd.addEventListener('click', botaoAdicionar);

// Pinta fundo:
function pintaFundo() {
  listaOl.addEventListener('click', (event) => {
    for (let i = 0; i < listaLi.length; i += 1) {
      listaLi[i].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}
pintaFundo();

// Marcar e desmarcar texto:
function marcaItem() {
  listaOl.addEventListener('dblclick', function (event) {
    event.target.classList.toggle('completed');
  });
}
marcaItem();

// Botão para limpar lista:
const btnLimpa = document.getElementById('apaga-tudo');
function apagaLista() {
  btnLimpa.addEventListener('click', function () {
    document.location.reload();
  })
}
apagaLista();

// Remover os marcados:
const btnLimpaFinalizados = document.getElementById('remover-finalizados')

function removeMarcados() {
  btnLimpaFinalizados.addEventListener('click', function () {
    const removeFinalizados = document.getElementsByClassName('completed')
    for (let i = 0; i < removeFinalizados.length; i += 1) {
      let removeItem = document.getElementById('lista-tarefas')
      while (removeFinalizados.length > 0) {
        removeItem.removeChild(removeFinalizados[i])
      }
    }
  })
}
removeMarcados();
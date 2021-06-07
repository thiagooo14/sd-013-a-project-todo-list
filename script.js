const botao = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');

botao.addEventListener('click', () => {
  let elementList = document.createElement('li');
  ol.appendChild(elementList);
  elementList.innerText = input.value;
  input.value = '';
  elementList.addEventListener('click', (e) => {
    for (let filho of ol.children){
      filho.style.backgroundColor = ''; 
    }
    e.target.style.backgroundColor = 'rgb(128, 128, 128)'; 
   
  }); 
});



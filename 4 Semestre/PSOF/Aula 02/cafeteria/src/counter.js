export function criarContador(){
  const valorElemento = document.querySelector('#valor');
  const botaoAumentar = document.querySelector('#aumentar');
  const botaoDiminuir = document.querySelector('#diminuir');
  const botaoZerar = document.querySelector('#zerar');

  if(!valorElemento || !botaoAumentar || !botaoDiminuir || !botaoZerar){
    console.error("Não foi possivel encontrar os elementos do contador")
    return
  }

  let contador = 0;

  function atualizarContador() {
    valorElemento.textContent = contador
  }

  botaoAumentar.addEventListener('click', ()=>{
    contador += 1
    atualizarContador()
  })
  botaoDiminuir.addEventListener('click', () =>{
    contador -= 1
    atualizarContador()
  })

  botaoZerar.addEventListener('click',() => {
    contador = 0
    atualizarContador()
  })

}
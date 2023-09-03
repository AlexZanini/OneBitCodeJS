function escalar(){
     if (confirm("Deseja confirmar a scalação? ")){
        const posicaoJogador = document.getElementById("posicaoJogador").value
        const nomeJogador = document.getElementById("nomeJogador").value
        const numeroCamisa = document.getElementById("numeroCamisa").value

        const h3 = document.createElement("h3")
        h3.innerHTML = `Posição: ${posicaoJogador} <br>  Jogador: ${nomeJogador}<br>Número: ${numeroCamisa}<br>`        

        const divMostrar = document.getElementById("mostrar")
        divMostrar.appendChild(h3)

        //limpar os campos de texto 
        document.getElementById("posicaoJogador").value = ""
        document.getElementById("nomeJogador").value = ""
        document.getElementById("numeroCamisa").value = ""

     }else{
        alert("cancelado ")
         //limpar os campos de texto 
         document.getElementById("posicaoJogador").value = ""
         document.getElementById("nomeJogador").value = ""
         document.getElementById("numeroCamisa").value = ""
     }

}

function removerJogador() {
    const numeroCamisaRemover = document.getElementById("numeroCamisaRemover").value;
  
    const jogadores = document.querySelectorAll("#mostrar > h3");
  
    for (let jogador of jogadores) {
      const numeroCamisaJogador = jogador.querySelector("span").textContent;
  
      if (numeroCamisaJogador && numeroCamisaJogador === numeroCamisaRemover) {
        if (confirm("Tem certeza que deseja remover o jogador?")) {
          jogador.remove();
          document.getElementById("numeroCamisaRemover").value = "";
        }
        return;
      }
    }
  
    alert("Jogador não encontrado na lista.");
  }
  
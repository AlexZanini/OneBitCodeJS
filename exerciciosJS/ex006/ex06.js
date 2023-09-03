let nome = prompt("Qual o nome? ")

let caracter = prompt("Informe qual caractar dejesa substituir? ")
let  troca = prompt("E por qual deseja trocar? ")



let nomeAtualizado = "";


for (let i = 0; i < nome.length; i++) {
    if (nome[i] == caracter){
        nomeAtualizado += troca;
    }else{
        nomeAtualizado += nome[i]
    }
  }

  alert(`O novo nome da nave é ${nomeAtualizado}`)


  

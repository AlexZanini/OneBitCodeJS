let contador = 0
let opcao = ""

let naveName = prompt("Digite o nome da nave")

opcao = prompt("Deseja entrar em dobra espacial?\n1- Sim\n2- Não")

while(opcao == "1") {
    contador += 1
    opcao = prompt("Deseja realizar a próxima dobra?\n1- Sim\n2- Não")
}

alert("Nave: " + naveName + "\nQuantidade de dobras: " + contador)


















// let nomeNave = prompt("Qual o nome da Nave? ")
// let confirmacao = Number(prompt("deseja entrar em uma dobra espacial \n 1-Sim \n 2-Não"))


// if (confirmacao == 1) {
//     const novaDobra = Number(prompt(" Deseja realizar nova Dobra? \n 1-Sim \n 2-Não"))
//     let contador = 1
//     while (novaDobra == 1) {
//         contador = + 1
//         alert(`contabilizando `)
//     }

// } else if (confirmacao == 2) {
//     alert("Voce escolheu Não, continue navegando")

// }else {
//     alert("ERRO: escolha as opçoes 1 ou 2")
// }







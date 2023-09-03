

let cartas = ["Ás de Copas", "2 de Copas", "3 de Copas", "4 de Copas", "5 de Copas",
    "6 de Copas", "7 de Copas", "8 de Copas", "9 de Copas", "10 de Copas", "Valete de Copas",
    "Rainha de Copas", "Rei de Copas"]
let opcao = ""


do {
    opcao = prompt(` Quantidade de cartas no Baralho ${cartas.length}
1.Adicionar uma Carta
2.Puxar uma carta
3.Sair`)

    switch (opcao) {
        case "1":
            let novaCarta = prompt("Qual onome da Carta?")
            cartas.push(novaCarta)

            break
        case "2":
            let cartaPuxada = cartas.pop()
            if (!cartaPuxada) {
                alert("Não há nenhuma carta no baralho!")
              } else {
                alert("Você puxou um(a) " + cartaPuxada)
              }

            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida!")
            break
    }
} while (opcao !== "3")
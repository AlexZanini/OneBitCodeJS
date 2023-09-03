
let naveName = prompt("Qual o nome da Nave? ")

let velocidade = 10

alert("Sua velociade inicial é de 10Km/s")

function menu(){   
    
    let opcao = prompt(`Escolha as seguintes opçôes: \n 
    1. Acelerar a nave em 5Km/s 
    2. Desacelerar a nave em 5Km/s 
    3. imprimir dados de bordo 
    4. sair do progrma  `)

    if (opcao === '1'){
        acelerar()
        menu()
    } else if (opcao === '2'){
        desacelerar()
        menu()
    }else if (opcao === '3'){
        imprimir()
        menu()
    }else if (opcao === '4'){
        return alert('Voce está saindo simulação encerrada')
    }else{
        alert("Opção inválida. Tente novamente.")
        menu()
    }



}




function acelerar(){
    alert("A nave está sendo acelerada em 5Km/s")
    velocidade += 5
    
}

function desacelerar(){
    velocidade -= 5
    if (velocidade < 0) {
        velocidade = 0
        alert("A nave chegou à velocidade mínima (0km/s).")
    } else {
        alert(`A nave está sendo desacelerada em 5km/s. Velocidade atual: ${velocidade} km/s.`)
    }
    menu()
}


function imprimir(){
    alert(`Nome da nave: ${naveName}
    Sua velocidade atual ${velocidade}Km/s`)
    menu()
}


menu()




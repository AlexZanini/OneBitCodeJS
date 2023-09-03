
let spaceship = {
    velocity: 0,
    speedUp: function(acceleration) {
        this.velocity += acceleration
    }
}

function registerSpaceship() {
    spaceship.name = prompt("Informe o nome da nave")
    spaceship.type = prompt("Informe o tipo da nave")
    spaceship.maxVelocity = Number(prompt("Informe a velocidade mãxima da nave (km/s)"))
}

function acelerate() {
    let acceleration = Number(prompt("Quanto você quer acelerar? (km/s)"))
    spaceship.speedUp(acceleration)
    if(spaceship.velocity > spaceship.maxVelocity) {
        alert(  "VELOCIDADE MÁXIMA ULTRAPASSADA!" +
                "\nVelocidade da Nave: " + spaceship.velocity + "km/s" +
                "\nVelocidade máxima da Nave: " + spaceship.maxVelocity + "km/s")
    }
}

function stop() {
    alert(  "Nome: " + spaceship.name + "\nTipo: " + spaceship.type + "\nVelocidade da nave: "
            + spaceship.velocity + "\nMáxima da Nave: " + spaceship.maxVelocity)
    spaceship.velocity = 0
}

function showMenu() {
    let chosenOption
    do {
        chosenOption = prompt("Você deseja:\n1- Acelerar\n2- Parar")
        switch(chosenOption) {
            case "1":
                acelerate()
                break
            case "2":
                stop()
                break
            default:
                alert("Opação inválida")
        }
    } while(chosenOption != "2")
}

registerSpaceship()
showMenu()













// let nomeNave = promt("Inform o nome da nave:")
// let tipoNava = promt("Inform o tipo da nave:")
// let velocidadeMaxima = promt("Inform o velocidade maxima que essa nave pode atingir para que não entre em combustão")

// let veloInicial = 0 


// function menu() {
//     const opcao = prompt("Quer acelerar ou parar a nave?\n 1.Sim \n 2.Não")
//     if(opcao === '1'){
//         const acelerar = Number(prompt("Qundo Km/s você que acelelar ? "))
//         const somaVelo = velocidadeMaxima + acelerar
//         alert(`Sua velocidade atual é de ${somaVelo}Km/s`)
//     } else if (){

//     }

// }

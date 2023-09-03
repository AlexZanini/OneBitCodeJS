// Declara a função slowDown, que aceita dois argumentos: velocity e printer
function slowDown(velocity, printer) {
    // Define a quantidade de desaceleração a ser aplicada a cada iteração do loop
    let deceleration = 20

    // Inicia um loop que continuará enquanto a velocidade for maior que 0
    while(velocity > 0) {
        // Chama a função printer para imprimir a velocidade atual
        printer(velocity)

        // Reduz a velocidade em 20 unidades (valor de deceleration)
        velocity -= deceleration
    }

    // Exibe um alerta informando que a nave parou e as comportas podem ser abertas
    alert("Nave parada. As comportas podem ser abertas.")
}

// Define a velocidade inicial da nave espacial como 150
let spaceshipVelocity = 150

// Chama a função slowDown com a velocidade inicial da nave e uma função anônima para imprimir a velocidade atual
slowDown(spaceshipVelocity, function(velocity) {
    // Imprime a mensagem "Velocidade atual: " seguida da velocidade atual no console
    console.log("Velocidade atual: " + velocity)
})

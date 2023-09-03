


function slowDown(velocidade, imprimir){
    let desacelerar = 20

    while(velocidade > 0){
        imprimir(velocidade)
        velocidade -= desacelerar
    }
    alert("Nave parada. As comportas podem ser abertas.")
}

let naveVelocidade = 150

slowDown( naveVelocidade, function(velocidade) {
    console.log("Velocidade atual: " + velocidade)
})


// Declara a função slowDown, que aceita dois argumentos: velocity e printer

// Define a quantidade de desaceleração a ser aplicada a cada iteração do loop
    

// Inicia um loop que continuará enquanto a velocidade for maior que 0
    
// Chama a função printer para imprimir a velocidade atual
        

// Reduz a velocidade em 20 unidades (valor de deceleration)
        
    

// Exibe um alerta informando que a nave parou e as comportas podem ser abertas
    


// Define a velocidade inicial da nave espacial como 150


// Chama a função slowDown com a velocidade inicial da nave e uma função anônima para imprimir a velocidade atual
// Imprime a mensagem "Velocidade atual: " seguida da velocidade atual no console







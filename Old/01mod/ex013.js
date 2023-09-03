function triangulo(base, altura) {
    res = (base * altura) / 2
    return res
}

function retangulo(base, altura) {
    res = (base * altura)
    return res
}

function quadrado(lado) {
    res = lado *lado
    return res
}

function trapezio(baseMaior, baseMenor, altura) {
    res = (baseMaior + baseMenor) * altura / 2
    return res
}

function circulo(raio) {
    res = (3.14 * raio * raio)
    return res;
}

let opcao = ""

do {

    opcao = prompt(` Calculadora Geométrica: selecione a opção
        1 - Calcular: área do triângulo
        2 - Calcular: área do retângulo
        3 - Calcular: área do quadrado
        4 - Calcular: área do trapézio
        5 - Calcular: área do círculo
        6 - Sair
    `)
    switch (opcao) {

        case "1":
            let base = prompt(" Infomorme a Base:")
            let altura = prompt(" Infomorme a Altura:")
            let calculo = triangulo(base, altura)
            alert(`O calculo da Área do Triângulo é de: ${calculo} `)

            break
        case "2":
            let baseRetangulo = prompt(" Infomorme a Base:")
            let alturaRetangulo = prompt(" Infomorme a Altura:")
            let calculoRetangulo = retangulo(baseRetangulo, alturaRetangulo)
            alert(`O calculo da Área do Retângulo é de: ${calculoRetangulo} `)

            break

        case "3":
            let areaQuadrado = prompt(" Infomorme a medida dos lados:")
            let calculoQuadrado = quadrado(areaQuadrado)
            alert(`O calculo da Área do Quadrado é de: ${calculoQuadrado} `)

            break
        case "4":
            let baseMaiorT = prompt(" Infomorme a Base Maior:")
            let baseMenorT = prompt(" Infomorme a Base Menor:")
            let alturaTrapezio = prompt("Informe a Altura")
            let calculoTrapezio = trapezio(baseMaiorT, baseMenorT, alturaTrapezio)
            alert(`O calculo da Área do Trapézio é de: ${calculoTrapezio} `)

            break
        case "5":
            let raioCirculo = prompt(" Infomorme o Raio:")
            let calculoCirculo = circulo(raioCirculo)
            alert(`O calculo da Área do Círculo é de: ${calculoCirculo} `)

            break

        case "6":
            alert("Encerrando...")
            break

        default:
            alert("Opção inválida!")
            break


    }


} while (opcao !== 6)

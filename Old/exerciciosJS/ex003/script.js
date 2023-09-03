let nome = prompt("Qual é o seu nome: ")
let velocidade = 0
let acelerar = Number(prompt("Qual velociade voce gostaria de acelerar a nave? KM"))

let confirme = confirm("Voce tem certeza que dejesa almentar a velociadade? ")


if (acelerar <= 0 ){
    alert("Nave está parada considere partir e aumentar a velociadae")
}else if(acelerar > 0 &&  acelerar <= 40 ){
    alert(`${nome} está devagar pode aumentar mais`)
}else if (acelerar >= 41 && acelerar <= 80){
    alert("Parece uma velocidade boa de manter")
}else{
    alert("Fogueteeeeeeeeeeee")
}


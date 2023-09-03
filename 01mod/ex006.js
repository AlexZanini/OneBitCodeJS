const nomeTurista = prompt("Qual o seu nome? ");
let cidades = ""
let contagem = 0
let visita = prompt("Já visitou alguma cidade? (Sim/Não):  ")


while (visita === "Sim"){
    let cidade = prompt("Qual o nome da cidade visitada? ")
    cidades += " - " + cidade + "\n"
    contagem ++
    visita = prompt("Já visitou alguma outra cidade? (Sim/Não):  ")   
    
}

alert(
    "Turista: " + nomeTurista+
    "\nQuantidade de cidades visitadas: " + contagem +
    "\nCidades visitadas:\n" + cidades
  )
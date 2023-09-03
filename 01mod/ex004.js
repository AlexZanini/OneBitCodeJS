
const personagem01 = prompt("Nome do primeiro Personagem: ");
const dano1 = Number(prompt("Dano do primeiro Personagem: "));
const personagem02 = prompt("Nome do segundo Personagem: ");
const vida = Number(prompt("Pontos de vida do segundo Personagem: "));
const defesa = Number(prompt("Poder de defesa do segundo Personagem: "));
const possuiEscudo = (prompt("Ele possui um escudo? (Sim/Não)"))


if ( dano1 > defesa && possuiEscudo === "Não" ){
    const combat1 = dano1 - defesa
    const combat2 =  vida - combat1
    alert(`Dano causado é de: ${combat1}
    pontos de vida restante: ${combat2}`)

}if ( dano1 > defesa && possuiEscudo === "Sim" ){
  const combat1 = (dano1 - defesa) / 2
  const combat2 =  vida - combat1
  alert(`Ele possui escudo, danno reduzido,
  Dano causado é de: ${combat1}
  pontos de vida restante: ${combat2},`)

} else if (dano1 <= defesa){
        alert(`O dano causado é igual a 0`)
}



const Poder = Number(prompt("Dano do primeiro Personagem: "));


 
/*

const atacante = prompt("Qual é o nome do personagem atacante?")
const poderDeAtaque = parseFloat(prompt("Qual é o seu poder de ataque?"))

const defensor = prompt("Qual é nome do personagem defensor?")
let pontosDeVida = parseFloat(prompt("Quantos pontos de vida ele possui?"))
const poderDeDefesa = parseFloat(prompt("Qual é o seu poder de defesa?"))
const possuiEscudo = (prompt("Ele possui um escudo? (Sim/Não)"))

let danoCausado = 0

if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Não") {
  danoCausado = poderDeAtaque - poderDeDefesa
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim") {
  danoCausado = (poderDeAtaque - poderDeDefesa) / 2
}

pontosDeVida -= danoCausado

alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor)
alert(
  atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
  defensor + "\nPontos de vida: " + pontosDeVida +
  "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + possuiEscudo
)

*/




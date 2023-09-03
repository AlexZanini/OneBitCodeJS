// Essas funções que são passadas como parâmetros geralmente são chamadas de callbacks
// Um exemplo comum de high-order function no javascript é a função .forEach() dos arrays
function exibirElemento(megadet, sepultura, metallica, slayer) {
    console.log({
        megadet, 
        sepultura, 
        metallica,
        slayer
    })
  }
  
  const lista = ["Maçã", "Banana", "Laranja", "Limão", "Uva"]
 
  lista.forEach(exibirElemento)


  const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
  ]

  //Map
  console.log()
  console.log("<<<<<<<<<<<<<<<<<Separação de Aula>>>>>>>>>>>>>>>>>>>>>>>>")
  console.log()


//   const nomes = []

//   for (let i = 0; i < personagens.length; i++) {
//     nomes.push(personagens[i].nome )
//   }

const nomes = personagens.map(function(personagem){
    return personagem.nome
})

  console.log(nomes)

  // Filter


  console.log("<<<<<<<<<<<<<<<<<Usando Filter>>>>>>>>>>>>>>>>>>>>>>>>")


//   const orcs = []
//   for (let i = 0; i < personagens.length; i++) {
//     const personagem = personagens[i]
//     if (personagem.raca === "Orc") {
//       orcs.push(personagem)
//     }
//   }

//   console.log(orcs)



// filter: permite obter um novo array contendo apenas elementos específicos de um array existente
const orcs = personagens.filter(function (personagem) {
    return personagem.raca === "Orc"
  })

  console.log(orcs)



 














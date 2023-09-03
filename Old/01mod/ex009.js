
let numero = Number(prompt("Digite o valor para gerar a tabuada: "))
let res = document.getElementById("res");

for(i = 0  ; i <= 20 ; i++){
tab = numero * i 
res.innerHTML += `${numero} x ${i} = ${tab} <br>`

}
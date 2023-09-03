const  nome1 =  prompt("Nome do veiculo 1: ");
const car1 = Number(prompt("Digite sua velocidade 1 KM: "));
const  nome2 =  prompt("Nome do veiculo 2: ");
const car2 = Number(prompt("Digite sua velocidade 2 KM:"));

if ( car1 > car2 ) {
    alert(` O carro ${nome1} é mais rapido, atingindo a velocidad de ${car1}KM `)

}else if (car1 < car2 ) {
    alert(` O carro ${nome2} é mais rapido, atingindo a velocidad de ${car2}KM `)

}else if (car1 == car2){
    alert(`A velocuidade de ambos os carros: ${nome1} e ${nome2} 
    é de  ${car1}KM`)

}

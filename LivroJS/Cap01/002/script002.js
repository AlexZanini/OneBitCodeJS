// let entrada = prompt('informe um número ')
// let calcDobro = entrada * 2
// alert(`O dobro da ${entrada} é ${calcDobro} `)



function calcular() {
    const numUm = Number(document.getElementById('numeroUm').value)
    const numDois = Number(document.getElementById('numeroDois').value)
    const calc =  numUm + numDois
    document.getElementById('mostrar').textContent = 'O resultado da soma dos dois número é: ' + calc;


}